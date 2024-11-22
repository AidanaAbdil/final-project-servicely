import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Logout() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = axios.post("/logout");
            setUser(null);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button className="btn" onClick={handleLogout}>
            Logout
        </button>
    );
}
