import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import axios from "axios";
import DateTimePicker from "../components/DateTimePicker";
import Review from "../components/Review";

export default function ServiceDetail() {
    const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { id } = useParams();

    const loadServiceDetail = async () => {
        try {
            const response = await axios.get(`/api/service/${id}`);
            console.log(response);
            setSelectedServiceDetail(response.data);
        } catch (error) {
            console.error("Error finding service details!", error);
        }
    };
    useEffect(() => {
        loadServiceDetail();
    }, [id]);

    const handleAddToCartClick = async () => {
        if (!date || !time) {
            setErrorMessage("Please select both a date and a time."); // Set error message
            return;
        } else {
            setErrorMessage(""); // Clear error if date and time are selected
        }
        if (!user) {
            navigate("/login");
        } else {
            try {
                const response = await axios.post("/api/add-to-cart", {
                    service_id: selectedServiceDetail.id,
                    date: date,
                    time: time,
                });
                setSuccessMessage("Service added to cart successfully!"); // Set success message
                setErrorMessage(""); // Clear any error message
                setTimeout(() => {
                    navigate("/catalog");
                }, 2000); 
            } catch (error) {
                console.error("Error adding service to cart:", error);
                setSuccessMessage(""); // Clear success message if error occurs
                setErrorMessage("Failed to add service to cart.");
            }
        }
        
        
    };

    if (!selectedServiceDetail) {
        return <div>No service details available</div>;
    }

    return (
        <>
            <div className="service-detail-container">
                <button className="return_button">
                    <Link to="/catalog" className="return_link">
                        Go back to catalog
                    </Link>
                </button>

                <h3>Details of selected service</h3>

                <div className="service-detail-info">
                    <h4 key={selectedServiceDetail.id}>
                        {selectedServiceDetail.title}
                    </h4>
                    <div className="service-description">
                        <p>
                            <strong>Description: </strong>{" "}
                            {selectedServiceDetail.description}
                        </p>
                        <p>
                            <strong>Price: </strong>
                            {selectedServiceDetail.price}
                            {selectedServiceDetail.currency}
                        </p>
                    </div>

                    <div className="service-detail-map">
                        <p>
                            <strong>Address:</strong>{" "}
                            {selectedServiceDetail.address}
                        </p>
                        <div>
                            <iframe
                                width="60%"
                                height="300"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURI(
                                    selectedServiceDetail.address
                                )}&z=14&output=embed`}
                            >
                                <a href="https://www.gps.ie/">gps devices</a>
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="calendar-time-section">
                      <div className="date-picker-container">  <DateTimePicker setDate={setDate} setTime={setTime} /></div>
                
                    <button className="btn-add-cart" onClick={handleAddToCartClick}>
                        Add to Cart
                    </button>
                </div>
                {errorMessage && (
                    <p style={{ color: "red", margin: "10px auto" }}>
                        {errorMessage}
                    </p>
                )}

                {successMessage && (
                    <p style={{ color: "green", margin: "10px auto" }}>
                        {successMessage}
                    </p>
                )}

                <div className="service_provider_information">
                    <p>
                        If you have any questions, feel free to reach out to the
                        below contact information:
                    </p>
                    <p>
                        {" "}
                        {selectedServiceDetail.user?.firstname}{" "}
                        {selectedServiceDetail.user?.surname}
                    </p>{" "}
                    <p>
                        <strong>Phone number:</strong>{" "}
                        {selectedServiceDetail.user?.phone}
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        {selectedServiceDetail.user?.email}
                    </p>
                </div>
                <Review service_id={selectedServiceDetail.id} />
            </div>
        </>
    );
}
