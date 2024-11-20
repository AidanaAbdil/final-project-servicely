import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Logout() {
    const { setUser } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const response = axios.post("/logout");
            setUser(null);
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
