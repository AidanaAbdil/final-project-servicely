import React, { useState, useEffect } from "react";
import axios from "axios";

function AddService () {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        description: "",
        duration: "",
        price: "",
        contact: "",
    });

    // Fetch categories
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategories(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/services", formData);
            console.log("Service created:", response.data);
            setFormData({
                title: "",
                category: "",
                location: "",
                description: "",
                duration: "",
                price: "",
                contact: "",
            }); // i am resetting the form after it is submitted
        } catch (error) {
            console.error("Error creating service:", error);
        }
    };

    return (
        <div className="add-service-form">
            <h2>Create a Service Listing</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Service Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter service title"
                    required
                />

                <label htmlFor="category">Service Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Category</option>
                    {Array.isArray(categories) &&
                        categories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                </select>

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    required
                />

                <label htmlFor="description">Service Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide a brief description"
                    required
                ></textarea>

                <label htmlFor="duration">Service Duration</label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 1 hour, 2-3 hours"
                    required
                />

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price in USD"
                    required
                />

                <label htmlFor="contact">Contact Information</label>
                <input
                    type="email"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />

                <button type="submit" className="btn-submit">
                    Submit Listing
                </button>
            </form>
        </div>
    );
};

export default AddService;
