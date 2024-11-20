import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import Logout from "../components/Logout";
import Register from "../Pages/Register";
import UserContext from "../context/UserContext";

function Navigation() {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
        
    }, [user])

    return (
        <nav className="navbar">
            <img
                src="/images/logo/logo-top.png"
                alt="logo"
                className="navbar-logo"
            />
            <div className="navigation-control">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
                <Link to="/catalog" className="nav-link">
                    Catalog
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

                {!user ? (
                    <>
                        <Link to="/register">
                            <button className="btn">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                    </>
                ) : (
                    <Logout />
                )}
            </div>
        </nav>
    );
}

export default Navigation;
