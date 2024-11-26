import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Review({ service_id }) {
    const { user } = useContext(UserContext);
    const [review, setReview] = useState({
        comment: "",
        service_id: service_id,
    });

    const postServiceReview = async () => {
        try {
            const response = await axios.post("/api/add-review", review);
            setReview(response.data);
        } catch (error) {
            console.log("Error posting review", error);
        }
    };

    const getServiceReview = async (service_id) => {
        try {
            const response = await axios.get("/api/list-review", {
                service_id: service_id,
            });
            setReview(response.data);
        } catch (error) {
            console.log("Error getting review", error);
        }
    };
    useEffect(() => {
        getServiceReview();
    }, []);

    if (!user) {
        return (
            <div className="review-list">
                <p>Please login to leave a review</p>
            </div>
        );
    }
    if (user) {
        return (
            <div className="reviews-section">
                <div className="list-of-reviews-section">
                    {review.map((item) => {
                        <p>{item.comment}</p>;
                    })}
                </div>
                <div className="add-reviews-section">
                    <p>Leave a Review here</p>
                    <input
                        name="comment"
                        id="comment"
                        placeholder="Type here"
                        onChange={(e) => {
                            setReview({ ...review, comment: e.target.value });
                        }}
                    ></input>
                    <button onClick={postServiceReview}>Submit</button>
                </div>
            </div>
        );
    }
}
