import { Link } from "react-router-dom";
import React from "react";

import Searchbar from "../Components/Searchbar";
import Logout from "../Components/Logout";

function Navigation() {
    return (
        <nav>
            <img src="/public/images/logo/logo.png" alt="logo" />
            <Searchbar />
            <Link to={`/`}>
                <span>Home</span>
            </Link>
            <a href="">About Us</a>
            <a href="">Catalog</a>
            <Link to={`/register`}>
                <button role="link">Register</button>
            </Link>
            <Link to={`/login`}>
                <button role="link">Login</button>
            </Link>
            <Logout />
        </nav>
    );
}

export default Navigation;
