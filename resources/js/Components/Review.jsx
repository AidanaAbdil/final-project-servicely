import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Review({ service_id }) {
    const { user } = useContext(UserContext);
    const [listReviews, setListReviews] = useState([]);
    const [review, setReview] = useState({
        comment: "",
        service_id: service_id,
    });

    const postServiceReview = async () => {
        try {
            const response = await axios.post("/api/add-review", review);

            // clears the input review input field
            setReview({ ...review, comment: "" });

            // Re-fetch the updated list of reviews
            getServiceReview(service_id);
        } catch (error) {
            console.log("Error posting review", error);
        }
    };

    const getServiceReview = async (service_id) => {
        try {
            const response = await axios.get(
                `/api/list-review?service_id=${service_id}`
            );
            setListReviews(response.data.reviews);
        } catch (error) {
            console.log("Error getting review", error);
        }
    };

    useEffect(() => {
        getServiceReview(service_id);
    }, [service_id]);

    return (
        <div className="review-box">
            {!user && (
                <div className="not-seeing-reviews-section">
                    <p>Please login to leave a review</p>
                </div>
            )}
            <div className="reviews-section">
                <div className="list-of-reviews-section">
                    <h4>Reviews:</h4>
                    {listReviews.map((item) => (
                        <div key={item.id}>
                            <h5>
                                {" "}
                                {item.user?.firstname} {item.user?.surname}
                            </h5>
                            <p>{item.comment}</p>
                        </div>
                    ))}
                </div>
                {user && (
                    <div className="add-reviews-section">
                        <h3>Leave a Review here</h3>
                        <input
                            name="comment"
                            id="comment"
                            placeholder="Type here"
                            value={review.comment}
                            onChange={(e) => {
                                setReview({
                                    ...review,
                                    comment: e.target.value,
                                });
                            }}
                        ></input>
                        <button
                            className="review-submit-btn"
                            onClick={postServiceReview}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
