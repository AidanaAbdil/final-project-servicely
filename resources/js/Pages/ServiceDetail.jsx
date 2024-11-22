import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";


export default function ServiceDetail() {
    const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

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

    if (!selectedServiceDetail) {
        return <div>No service details available</div>;
    }

    return (
        <div className="service-detail-container">
            <div className="service-detail-background">
                <h3>Details of selected service</h3>
            </div>
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
                    <p>Pick a date: </p>
                   
                    {/* date picker */}
                </div>
                <div className="service-detail-map">
                    <p>Address</p>
                    {/* here is a map */}
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
            <div className="service_provider_information">
                <p>
                    If you have any questions, feel free to reach out to the
                    below contact information:
                </p>
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
