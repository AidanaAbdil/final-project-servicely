import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("your-public-stripe-key");

const Payment = () => {
    const [cartDetails, setCartDetails] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartDetails = async () => {
            try {
                const response = await axios.get("/api/get-cart");
                setCartDetails(response.data);
                let total = 0;
                response.data.forEach((item) => {
                    total += item.price * 100;
                });
                setTotalAmount(total);
            } catch (error) {
                console.error("Error fetching cart details:", error);
            }
        };
        fetchCartDetails();
    }, []);

    const handlePaymentSubmit = async () => {
        try {
            console.log("Processing payment...");
            setPaymentSuccess(true);
            setTimeout(() => {
                navigate("/thank-you");
            }, 2000);
        } catch (error) {
            console.error("Payment error:", error);
            setErrorMessage("Payment failed. Please try again.");
        }
    };

    return (
        <div className="payment-page-container">
            <h1 className="page-title">Payment Page</h1>
            <div className="payment-page">
                <div className="cart-summary">
                    <h2>Cart Summary</h2>
                    <ul className="cart-items-list">
                        {cartDetails.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span className="cart-item-title">
                                    {item.title}
                                </span>{" "}
                                <span className="cart-item-price">
                                    {item.price} {item.currency}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="total-amount">
                        <h3>Total: CZK {totalAmount / 100}</h3>
                    </div>
                </div>

    
                    <div className="checkout-form-container">
                        <h3>Enter Payment Details</h3>
                        {paymentSuccess ? (
                            <div className="thank-you-message">
                                <h3>Thank you for your purchase!</h3>
                                <p>Your payment has been successfully processed.</p>
                            </div>
                        ) : (
                            <Elements stripe={stripePromise}>
                                <CheckoutForm onSubmit={handlePaymentSubmit} />
                            </Elements>
                        )}
                        {errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default Payment;
