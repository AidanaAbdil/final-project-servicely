import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import axios from "axios";
import DateTimePicker from "../components/DateTimePicker";
import Review from "../components/Review";

export default function ServiceDetail() {
    const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

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
        //should we use the condition if (!user)??
        try {
            const response = await axios.post("/api/add-to-cart", {
                service_id: selectedServiceDetail.id,
            });
            console.log(response.data);
            alert("Service added to cart successfully!");
        } catch (error) {
            console.error("Error adding service to cart:", error);
            alert("Failed to add service to cart.");
        }
    };

    if (!selectedServiceDetail) {
        return <div>No service details available</div>;
    }

    return (
        <>
            <button className="return_button">
                <Link to="/catalog" className="return_link">
                    Go back to catalog
                </Link>
            </button>

            <div className="service-detail-container">
                <h3>Details of selected service</h3>

                <div className="service-detail-info">
                    <h3 key={selectedServiceDetail.id}>
                        {selectedServiceDetail.title}
                    </h3>
                    <div className="service-description">
                        <p>Description: {selectedServiceDetail.description}</p>
                        <p>
                            Price:{selectedServiceDetail.price}
                            {selectedServiceDetail.currency}
                        </p>
                    </div>

                    <div className="service-detail-map">
                        <p>Address: {selectedServiceDetail.address}</p>
                        {/* here is a map */}
                        <button className="btn" onClick={handleAddToCartClick}>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="calendar-time-section">
                    <p>Pick a date: </p>
                    <DateTimePicker />
                    {/* date picker */}
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
                    <p>Phone number: {selectedServiceDetail.user?.phone}</p>
                    <p>Email: {selectedServiceDetail.user?.email}</p>
                </div>
                <Review />
            </div>
        </>
    );
}
