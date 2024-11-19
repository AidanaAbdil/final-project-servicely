import React, { useContext } from "react";
import UserContext from "../context/UserContext";

import axios from "axios";

export default function Logout() {
    const { user, setUser } = useContext(UserContext);
    const handleLogout = async () => {
        try {
            const response = axios.post("/logout");
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };
    if (!user) return null;
    return (
        <button className="logout_button" onClick={handleLogout}>
            Logout
        </button>
    );
}
