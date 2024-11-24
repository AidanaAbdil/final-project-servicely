import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();

    const fetchCart = async () => {
        try {
            const response = await axios.get("/api/get-cart");
            setCart(response.data);
            const initialQuantities = {};
            Object.keys(response.data).forEach((key) => {
                initialQuantities[key] = 1; 
            });
            setQuantities(initialQuantities);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const handleQuantityChange = (id, value) => {
        setQuantities({
            ...quantities,
            [id]: value,
        });
    };

    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, key) => {
            const item = cart[key];
            const quantity = quantities[key] || 1; 
            return total + item.price * quantity;
        }, 0);
    };

    const handleNext = () => {
        navigate("/payment");
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
                        {Object.keys(cart).map((id) => {
                            const item = cart[id];
                            return (
                                <div className="shopping-cart-item" key={id}>
                                    <div className="shopping-cart-text">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className="shopping-cart-quantity">
                                        <input
                                            type="number"
                                            value={quantities[id] || 1}
                                            min="1"
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    id,
                                                    parseInt(e.target.value) ||
                                                        1
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <div classname="shopping-cart-btn-box">
                    <button
                        className="btn shopping-cart-btn"
                        onClick={handleNext}
                    >
                        Procced to Payment
                    </button>
                    <button
                        className="btn shopping-cart-btn"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <div className="shopping-cart-summary">
                <h3>Total</h3>
                <p>${calculateTotal()}</p>
            </div>
        </section>
    );
}
