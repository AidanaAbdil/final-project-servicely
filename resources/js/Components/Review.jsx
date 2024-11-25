import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Review() {
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

    return (
        <div className="reviews-section">
            <p>Reviews</p>
            {/* here is the starts */}
            {/* <p>map through reviews</p> */}
            <p>Leave a Review here</p>
            <input name="review" id="review" placeholder="Type here"></input>
            <button onClick={postServiceReview}>Submit</button>
        </div>
    );
}
