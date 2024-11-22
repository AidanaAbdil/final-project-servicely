import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ServiceDetail() {
    const [selectedServiceDetail, setSelectedServiceDetail] = useState("");

    const loadServiceDetail = async () => {
        try {
            const response = await axios.get(`api/service/${id}`);
            console.log(response);
            setSelectedServiceDetail(response);
        } catch (error) {
            console.error("Error finding service details!", error);
        }
    };
    useEffect(() => {
        loadServiceDetail();
    }, []);

    return (
        <div className="service-detail-container">
            <div className="service-detail-background">
                <h3>Details of your selected service</h3>
            </div>
            <div className="service-detail-info">
                <h3>Service Title</h3>
                <div className="service-description">
                    <p>Description: </p>
                    <p>Cost: </p>
                    <p>Pick a date: </p>
                    {/* date picker */}
                </div>
                <div className="service-detail-map">
                    <p>Address</p>
                    {/* here is a map */}
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
            <div>
                <p>Reviews</p>
                {/* here is the starts */}
                {/* <p>map through reviews</p> */}
                <p>Leave a Review here</p>
                <textarea
                    name="review"
                    id="review"
                    placeholder="Type here"
                ></textarea>
            </div>
        </div>
    );
}
