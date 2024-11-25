import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Payment() {
    const [selectedPayment, setSelectedPayment] = useState("");
    const [cartDetails, setCartDetails] = useState("");

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const getCart = async () => {
        try {
            const response = await axios.get("/api/get-cart");
            setCartDetails(response.data);
        } catch (error) {
            console.log("Error finding cart", error);
        }
    };
    useEffect(() => {
        getCart();
    }, []);

    return (
        <div className="payment-section">
            <div className="payment-method">
                <h2>Payment Method</h2>

                <div className="payment-option">
                    <input
                        type="radio"
                        id="cash-payment"
                        name="payment"
                        value="cash-payment"
                        className="input-radio-button"
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="cash-payment">Cash Payment</label>
                </div>
                <div className="payment-option">
                    <input
                        type="radio"
                        id="credit-card"
                        name="payment"
                        value="credit-card"
                        className="input-radio-button"
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="credit-card">Credit Card</label>
                </div>
                {selectedPayment === "credit-card" && (
                    <div className="payment-details">
                        <form>
                            <p>Credit Card Details</p>
                            <label htmlFor="card-number">Card Number</label>
                            <input
                                type="text"
                                id="card-number"
                                placeholder="0000 0000 0000 0000"
                            />
                            <label htmlFor="expiry-date">Expiry Date</label>
                            <input
                                type="text"
                                id="expiry-date"
                                placeholder="MM / YY"
                            />
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" placeholder="CVV" />
                            <label htmlFor="card-holder">
                                Card Holder Name
                            </label>
                            <input
                                type="text"
                                id="card-holder"
                                placeholder="Card Holder Name"
                            />
                            <button type="submit" className="btn-submit">
                                Pay
                            </button>
                        </form>
                    </div>
                )}

                {selectedPayment === "cash-payment" && (
                    <div className="payment-details">
                        <p>
                            Cash Payment Selected: No additional details
                            required.
                        </p>
                    </div>
                )}
            </div>

            <div className="payment-summary">
                {cartDetails.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))}
            </div>
        </div>
    );
}
export default Payment;
