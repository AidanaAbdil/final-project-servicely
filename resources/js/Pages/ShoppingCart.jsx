import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import axios from "axios";

export default function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); 

    const fetchCart = async () => {
        try {
            const response = await axios.get("/api/cart");
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

   
    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, id) => {
            return total + cart[id].price;
        }, 0);
    };

   
    const handleNext = () => {
        navigate("/payment-options"); //we need a path here
    };

    const handleCancel = () => {
        navigate(`/catalog`); 
    };

    return (
        <section className="shopping-cart-container">
            <div className="shopping-cart-nav">
                <h4>1. Shopping Cart</h4>
                <h4>2. Payment Options</h4>
            </div>
            <div className="shopping-cart-content">
                <h3>Shopping Cart</h3>
                {Object.keys(cart).length > 0 ? (
                    <div className="shopping-cart-items">
                        {Object.keys(cart).map((id) => (
                            <div className="shopping-cart-item" key={id}>
                                <div className="shopping-cart-text">
                                    <h5>{cart[id].title}</h5>
                                    <p>{cart[id].description}</p>
                                    {/* <p>${cart[id].price}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <input type="number" defaultValue="1" min="1" />
                <div className="btn shopping-cart-btn">
                    <button onClick={handleNext}>Next</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>

            <div className="shopping-cart-summary">
                <h3>Total</h3>
                <p>${calculateTotal()}</p>
            </div>
        </section>
    );
}
