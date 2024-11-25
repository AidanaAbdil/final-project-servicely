import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Review() {
    const { user } = useContext(UserContext);
    const [review, setReview] = useState({
        user_id: "",
        rating: "",
        comment: "",
        service_id: "",
    });

    const postServiceReview = async () => {
        try {
            const response = await axios.post("/api/post-review");
            setReview(response.data);
        } catch (error) {
            console.log("Error posting review", error);
        }
    };
    if (!user) {
        return <div>Please login to leave a review</div>;
    }
    if (user) {
        return (
            <div className="reviews-section">
                <p>Leave a Review here</p>
                <input
                    name="review"
                    id="review"
                    placeholder="Type here"
                ></input>
                <button onClick={postServiceReview}>Submit</button>
            </div>
        );
    }
}
