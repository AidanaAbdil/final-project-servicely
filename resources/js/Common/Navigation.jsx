import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import Logout from "../components/Logout";
import Register from "../pages/Register";
import UserContext from "../context/UserContext";

function Navigation() {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
    }, [user]);

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

                {!user ? (
                    <>
                        <Link to="/register">
                            <button className="register_button">
                                Register
                            </button>
                        </Link>
                        <Link to="/login">
                            {" "}
                            <button className="login_button" role="link">
                                Login
                            </button>
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
