import axios from "axios";
import React from "react";
import { useLocation, Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";


function Homepage() {
    const location = useLocation();
    const navigate = useNavigate();

    // If the current route is `/add-service`, do not render the button
    if (location.pathname === "/add-service") {
        return null;
    }

    const [services, setServices] = useState([]);

    const fetchFeaturedServices = async () => {
        try {
            const response = await axios.get(`/api/services`);
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
        } else {
            navigate("/add-service");
        }
    };

    return (
        <>
            <div className="add-service-section">
                <div className="add-service">
                    <h3>We Are At YourServicely</h3>

                    <Link to="/add-service">
                        <button
                            className="add-service-button"
                            onClick={handleAddServiceClick}
                        >
                            Add Your Services Here
                        </button>
                    </Link>
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
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                                <p>
                                    Price: {service.price} {service.currency}
                                </p>
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
