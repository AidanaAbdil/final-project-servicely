import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-info">
                <img
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="footer-logo"
                    className="footer-logo"
                />

                <p>Strakonická 3367, 150 00 Praha 5-Smíchov</p>
                <p>© Yourservicely</p>
            </div>

            <div className="footer-right-section">
                <div className="footer-menu">
                <div className="footer-menu">
                    <h4>Main Menu</h4>
                    <ul>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <Link to="/about">
                            <p>About</p>
                        </Link>
                        <Link to="/catalog">
                            <p>Catalogue</p>
                        </Link>
                        <Link to="/faq">
                            <p>FAQ</p>
                        </Link>
                    </ul>
                </div>
                <div className="footer-social">
                <div className="footer-social">
                    <h4>Find Us On</h4>
                    <ul>
                        <Link>
                            <p>Facebook</p>
                        </Link>
                        <Link>
                            <p>Instagram</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
