import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Login() {
    const { getUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState(""); // Initialize errorMessage state

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", values);
            const response_data = response.data;

            console.log(response_data);
            getUser(); 
            navigate("/"); 
        } catch (error) {
            if (error.response) {
                
                console.log("Error response:", error.response);

                if (error.response.status === 401) {
                    setErrorMessage(
                        "These credentials do not match our records."
                    );
                } else if (error.response.status === 422) {
                    setErrorMessage(
                        "Validation failed. Please check your input."
                    );
                } else if (error.response.status === 500) {
                    setErrorMessage("Server error. Please try again later.");
                } else {
                    setErrorMessage(
                        "An unknown error occurred. Please try again."
                    );
                }
            } else {
                setErrorMessage("Network error. Please check your connection.");
            }
        }
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
            <div className="form">
                <h2>Login to your profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button className="btn-submit">Login</button>
                </form>

                {/* Display error message if it exists */}
                {errorMessage && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                        {errorMessage}
                    </p>
                )}

                <div className="no-account">
                    <p>
                        Don't have an account yet?{" "}
                        <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>

    );
}
