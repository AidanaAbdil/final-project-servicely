import React, { useState, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Register(props) {
    const navigate = useNavigate();
    const { getUser } = useContext(UserContext);

    const [values, setValues] = useState({
        email: "",
        firstname: "",
        surname: "",
        phone: "",
        password: "",
        password_confirmation: "",
        role_id: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/register", values);

            const response_data = response.data;
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
            <h2>Registration</h2>
            <form action="/register" method="post" onSubmit={handleSubmit}>
                Firstname:{" "}
                <input
                    type="text"
                    name="firstname"
                    defaultValue={values.firstname}
                    onChange={handleChange}
                />
                <br />
                Surname:{" "}
                <input
                    type="text"
                    name="surname"
                    defaultValue={values.surname}
                    onChange={handleChange}
                />
                <br />
                Phone number:{" "}
                <input
                    type="text"
                    name="phone"
                    defaultValue={values.phone}
                    onChange={handleChange}
                />
                <br />
                Email:{" "}
                <input
                    type="email"
                    name="email"
                    defaultValue={values.email}
                    onChange={handleChange}
                />
                <br />
                Password:{" "}
                <input
                    type="password"
                    name="password"
                    defaultValue={values.password}
                    onChange={handleChange}
                />
                <br />
                Confirm password:{" "}
                <input
                    type="password"
                    name="password_confirmation"
                    defaultValue={values.password_confirmation}
                    onChange={handleChange}
                />
                <br />
                <div className="radio-btn">
                    <label htmlFor="customer">Register as customer</label>
                    <input
                        type="radio"
                        id="customer"
                        name="role_id"
                        value="1"
                        onChange={handleChange}
                    />
                </div>
                <div className="radio-btn">
                    <label htmlFor="provider">
                        Register as service provider
                    </label>
                    <input
                        type="radio"
                        id="provider"
                        name="role_id"
                        value="2"
                        onChange={handleChange}
                    />
                </div>
                <button className="btn-submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
