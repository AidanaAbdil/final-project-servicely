import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navigation from "./Common/Navigation";
import AddService from "./Components/AddService";
import Homepage from "./Pages/Homepage";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-service" element={<AddService />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
