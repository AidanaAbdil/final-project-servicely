import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";

import React from "react";

import Register from "./pages/Register";
import Navigation from "./common/Navigation";
import AddService from "./components/AddService";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Footer from "./common/Footer";
import UserContext from "./context/UserContext";

import UserProfile from "./pages/UserProfile";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
    const [user, setUser] = useState(false);

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
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/add-service" element={<AddService />} />
                    <Route path="/service/:id" element={<ServiceDetail />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    );
}
export default App;
