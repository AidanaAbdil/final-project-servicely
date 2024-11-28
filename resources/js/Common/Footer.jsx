import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <img
                    src="/images/logo/logo-top.png"
                    alt="Logo"
                    className="footer-logo"
                />

                <p>Strakonická 3367, 150 00 Praha 5-Smíchov</p>
                <p>© Yourservicely</p>
            </div>

            <div className="footer-right-section">
                <div className="footer-menu">
                    <h4>Main Menu</h4>
                    <ul>
                        <Link to="/" className="footer-menu-link">
                            <p>Home</p>
                        </Link>
                        <Link to="/about" className="footer-menu-link">
                            <p>About</p>
                        </Link>
                        <Link to="/catalog" className="footer-menu-link">
                            <p>Catalogue</p>
                        </Link>
                        <Link to="/faq" className="footer-menu-link">
                            <p>FAQ</p>
                        </Link>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Find Us On</h4>
                    <ul>
                        <Link className="footer-menu-link">
                            <p>Facebook</p>
                        </Link>
                        <Link className="footer-menu-link">
                            <p>Instagram</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
