import { Link } from "react-router-dom";
import React, { useContext, useEffect,useState } from "react";

import Logout from "../components/Logout";
import Register from "../pages/Register";
import UserContext from "../context/UserContext";

function Navigation() {
    const { user } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <nav className="navbar">
            <Link to="/">
                <img
                    src="/images/logo/logo-top.png"
                    alt="logo"
                    className="navbar-logo"
                />
            </Link>
            {/* Burger Menu for smaller screens */}
            <div
                className={`burger-menu ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`navigation-control ${isMenuOpen ? "active" : ""}`}>
                <Link to="/" className="nav-link" onClick={toggleMenu}>
                    Home
                </Link>
                <Link to="/about" className="nav-link" onClick={toggleMenu}>
                    About Us
                </Link>
                <Link to="/catalog" className="nav-link" onClick={toggleMenu}>
                    Catalog
                </Link>

                {!user ? (
                    <>
                        <Link to="/register" onClick={toggleMenu}>
                            <button className="btn-register">Register</button>
                        </Link>
                        <Link to="/login" onClick={toggleMenu}>
                            <button className="btn-login">Login</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <div className="nav-profile">
                            <Link
                                to="/profile"
                                className="nav-link"
                                onClick={toggleMenu}
                            >
                                {/* Display Profile Picture and Name */}
                                <img
                                    src={
                                        user.user_profile?.image_url ||
                                        "/images/profile_photos/watermelon-8368_11.png"
                                    } // Use a default avatar if no profile image
                                    alt="Profile"
                                    className="profile-picture"
                                />
                                <span className="user-name">
                                    {user.firstname} {user.surname}
                                </span>
                            </Link>
                        </div>
                        <Link
                            to="/cart"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Shopping Cart
                        </Link>
                        <Logout />
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
