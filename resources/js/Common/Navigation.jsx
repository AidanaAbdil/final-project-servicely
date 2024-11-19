import { Link } from "react-router-dom";
import React from "react";

import Logout from "../Components/Logout";

function Navigation() {
    return (
        <nav>
            <img src="/images/logo/logo.png" alt="logo" />
            <div className="navigation_control">
                <Link to={`/`}>
                    <span>Home</span>
                </Link>
                <Link to={`/about`}>
                    <span>About us</span>
                </Link>
                <Link to={`/catalog`}>
                    <span>Catalog</span>
                </Link>
                <Link to={`/register`}>
                    <button role="link">Register</button>
                </Link>
                <Link to={`/login`}>
                    <button role="link">Login</button>
                </Link>
                <Logout />
            </div>
        </nav>
    );
}

export default Navigation;
