import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Register from "./pages/Register";
import Navigation from "./common/Navigation";
import AddService from "./components/AddService";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import UserContext from "./Context/UserContext";

function App() {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const response = await axios("/api/user");

            console.log(response.data);

            setUser(response.data);
        } catch (error) {
            setUser(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, getUser }}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/add-service" element={<AddService />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
export default App;
