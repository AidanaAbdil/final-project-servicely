import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

function Homepage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [services, setServices] = useState([]);

    const fetchFeaturedServices = async () => {
        try {
            const response = await axios.get(`/api/services/featured`);
            setServices(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching featured services!", error);
        }
    };

    useEffect(() => {
        fetchFeaturedServices();
    }, []);

    const handleAddServiceClick = () => {
        if (!user) {
            navigate("/login");
        } else if (user.role_id === 2) {
            navigate("/add-service");
        } else {
            alert("You do not have permission to access this page.");
        }
    };

    return (
        <>
            <div className="add-service-section">
                <div className="add-service">
                    <h3>We Are At YourServicely</h3>
                    {user?.role_id === 2 && (
                        <button
                            className="add-service-button"
                            onClick={handleAddServiceClick}
                        >
                            Add Your Services Here
                        </button>
                    )}
                </div>
            </div>

            <div className="featured-services-container">
                <h2>Featured Services</h2>
                <div className="featured-services-grid">
                    {services.length > 0 ? (
                        services.map((service) => (
                            <div
                                className="featured-service-card"
                                key={service.id}
                            >
                                <h4 className="service-title">
                                    {service.title}
                                </h4>
                                <p>{service.description}</p>
                                <p>
                                    <strong>Price:</strong> {service.price}{" "}
                                    {service.currency}
                                </p>
                                <Link to={"/service/" + service.id}>
                                    <button className="btn-see-details">
                                        See details
                                    </button>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No services available at the moment.</p>
                    )}
                </div>
            </div>

            <>
                <div className="about-us-section">
                    <p>
                        This platform allows users to post various services they
                        offer, while others can search for.
                    </p>
                    <Link to="/about">
                        <button className="about-us-btn">About Us</button>
                    </Link>
                </div>
            </>
        </>
    );
}

export default Homepage;
