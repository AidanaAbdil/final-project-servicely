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
            console.log(response.data);
            
            const initialQuantities = {};
            response.data.forEach((item) => {
                initialQuantities[item.id] = 1; 
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
            ...quantities, // this creates a shallow copy of the items, spread operator
            [id]: value,
        });
    };

    

    const handleRemovebutton = async (id)=> {
        const newCart = cart.filter((item) => {            
            return item.id !== id;
        });

        setCart(newCart);

        try {
            await axios.post("/api/remove-from-cart", { service_id: id }); 
            console.log("Item removed from server-side cart.");
        } catch (error) {
            console.error("Failed to update server cart:", error);
        }
    };


    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const quantity = quantities[item.id] || 1; 
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
                {cart.length > 0 ? (
            
                    <div className="shopping-cart-items">
                        {cart.map((item) => {
                            return (
                                <div
                                    className="shopping-cart-item"
                                    key={item.id}
                                >
                                    <div className="shopping-cart-text">
                                        <h5>{item.title}</h5>
                                        <p>Duration: {item.duration}</p>
                                        <p>
                                            Price: {item.price} {item.currency}
                                        </p>
                                        {/* how do we combine the time slots?? */}
                                    </div>
                                    <div className="shopping-cart-quantity">
                                        <input
                                            className="shopping-cart-input"
                                            type="number"
                                            defaultValue={item.quantity}
                                            min="1"
                                            readOnly
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    item.id,
                                                    parseInt(e.target.value) ||
                                                        1
                                                )
                                            }
                                        />
                                        <button
                                            className="btn remove-item-btn"
                                            onClick={() =>
                                                handleRemovebutton(item.id)
                                            }
                                        >
                                            remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                
                <div className="shopping-cart-btn-box">
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
                
                <p>{calculateTotal()} {""}CZK</p>

            </div>
        </section>
    );
}
