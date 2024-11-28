import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddService () {
    const [formData, setFormData] = useState({
        title: "",
        category_id: "",
        location: "",
        address:"",
        description: "",
        duration: "",
        price: "",
        currency: "",
    });

    // Fetch categories
    const [categories, setCategories] = useState([]);
     const navigate = useNavigate();

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
            const response = await axios.post("/api/service/store", formData);
            
            setFormData({
                title: "",
                category_id: "",
                location: "",
                address: "",
                description: "",
                duration: "",
                price: "",
                currency: "",
            }); // i am resetting the form after it is submitted
            alert('You have successfully added a listing!');
            navigate("/");
        } catch (error) {
            console.error("Error creating service:", error);
        }
    };




    return (
        <div className="form">
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

                <label htmlFor="category_id">Service Category</label>
                <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Category</option>
                    {Array.isArray(categories) &&
                        categories.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            );
                        })}
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
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street, posttal code"
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

                <label htmlFor="duration">Service Duration (in hours)</label>
                <input
                    type="number"
                    id="duration"
                    step="0.1"
                    min="0"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    required
                />

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    step="0.1"
                    min="0"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price in USD"
                    required
                />

                <label htmlFor="currency">Currency</label>
                <input
                    type="text"
                    id="curency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    placeholder="currency"
                    required
                />
                {/* redirect to homepage */}
                <button type="submit" className="btn-submit">
                    Submit Listing
                </button>
            </form>
        </div>
    );
};

export default AddService;
