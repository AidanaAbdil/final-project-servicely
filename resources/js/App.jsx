import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navigation from "./Common/Navigation";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
