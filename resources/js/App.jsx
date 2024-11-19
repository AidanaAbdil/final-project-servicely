import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Register from "./Pages/Register";
import Navigation from "./Common/Navigation";
import AddService from "./Components/AddService";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import Login from "./Pages/Login";

function App() {
    return (
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
    );
}
export default App;
