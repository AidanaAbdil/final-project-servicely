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
        if(!user){
            navigate('/login')
        } else{
            try {
                const response = await axios.post("/api/add-to-cart", {
                    service_id: selectedServiceDetail.id,
                    date: date,
                    time: time,
                });
                console.log(response.data);
                alert("Service added to cart successfully!");
            } catch (error) {
                console.error("Error adding service to cart:", error);
                alert("Failed to add service to cart.");
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
                    <div className="calender-date-picker">
                        <p>Pick a date: </p>
                        <DateTimePicker setDate={setDate} setTime={setTime} />
                    </div>
                    <button className="btn" onClick={handleAddToCartClick}>
                        Add to Cart
                    </button>
                </div>

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
                    <p><strong>Phone number:</strong> {selectedServiceDetail.user?.phone}</p>
                    <p><strong>Email:</strong> {selectedServiceDetail.user?.email}</p>
                </div>
                <Review service_id={selectedServiceDetail.id} />
            </div>
        </>
    );
}
