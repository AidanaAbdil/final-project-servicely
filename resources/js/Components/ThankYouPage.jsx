import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
    return (
        <div className="thank-you-page-container">
            <h1>Thank You for Your Purchase!</h1>
            <p>
                Your payment has been successfully processed. We appreciate your
                business!
            </p>
            <Link to="/">
                <button className="btn-submit">go back to Homepage</button>
            </Link>
        </div>
    );
};

export default ThankYouPage;
