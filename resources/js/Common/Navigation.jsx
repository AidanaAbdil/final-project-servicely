import { Link } from "react-router-dom";
import React, { useContext } from "react";

import Logout from "../components/Logout";
import Register from "../pages/Register";
import UserContext from "../context/UserContext";

function Navigation() {
    const { user } = useContext(UserContext);
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
                {/* <Link to={`/register`}>
                    <button className="register_button" role="link">
                        Register
                    </button>
                </Link> */}
                {/* <Link to={`/login`}>
                    <button className="login_button" role="link">
                        Login
                    </button>
                </Link> */}

                {user ? <Register /> : <Link to="/register">Register</Link>}
                {user ? <Logout /> : <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
}

export default Navigation;
