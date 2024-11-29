import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


const CheckoutForm = ({ onSubmit }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return; 
        }

        onSubmit();
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Enter Payment Details</h3>
            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input
                type="text"
                id="cardholder-name"
                placeholder="John Doe"
                required
            />

            <label htmlFor="card-number">Card Number</label>
            <CardElement id="card-number" />


            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
