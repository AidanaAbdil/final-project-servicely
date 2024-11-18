import React, { useState } from "react";
import axios from "axios";

const AddService = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [providerName, setProviderName] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            title,
            category,
            location,
            description,
            duration,
            price,
            providerName,
            contact,
        };

        try {
            const response = await axios.post("/api/services", formData);

            console.log("Service Created:", response.data);
        } catch (error) {
            console.error(
                "Error creating service:",
                error.response ? error.response.data : error.message
            );
        }
    };

    return (
        <div className="add-service-container">
            <h2 className="form-title">Create a Service Listing</h2>
            <form
                onSubmit={handleSubmit}
                id="serviceForm"
                className="service-form"
            >
                <label htmlFor="title" className="form-label">
                    Service Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-input"
                    placeholder="Enter service title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="category" className="form-label">
                    Service Category
                </label>
                <select
                    id="category"
                    name="category"
                    className="form-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="Consulting">Consulting</option>
                    <option value="IT Services">IT Services</option>
                </select>

                <label htmlFor="location" className="form-label">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-input"
                    placeholder="City, State"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />

                <label htmlFor="description" className="form-label">
                    Service Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="form-input"
                    placeholder="Provide a brief description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <label htmlFor="duration" className="form-label">
                    Service Duration
                </label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    className="form-input"
                    placeholder="e.g., 1 hour, 2-3 hours"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />

                <label htmlFor="price" className="form-label">
                    Price
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-input"
                    placeholder="Enter price in USD"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label htmlFor="providerName" className="form-label">
                    Name of Service Provider
                </label>
                <input
                    type="text"
                    id="providerName"
                    name="providerName"
                    className="form-input"
                    placeholder="Provider's Name"
                    value={providerName}
                    onChange={(e) => setProviderName(e.target.value)}
                    required
                />

                <label htmlFor="contact" className="form-label">
                    Contact Information
                </label>
                <input
                    type="email"
                    id="contact"
                    name="contact"
                    className="form-input"
                    placeholder="Email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
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
