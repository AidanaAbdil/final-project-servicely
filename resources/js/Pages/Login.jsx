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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", values);
            const response_data = response.data;

            console.log(response_data);

            getUser();
            navigate("/");
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
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
            <form action="/login" method="post" onSubmit={handleSubmit}>
                Email:{" "}
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                Password:{" "}
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <button className="btn-submit">Login</button>
            </form>
            <div className="no-account">
                <p>
                    Don't have an account yet?{" "}
                    <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}
