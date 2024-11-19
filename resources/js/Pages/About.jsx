import { Link } from "react-router-dom";


function About() {
    return (
        <>
            <div className="about-us-section">
                <p>
                    This platform allows users to post various services they
                    offer, while others can search for.
                </p>
                <Link to="/about">
                    <button className="about-us-btn">
                        About Us
                    </button>
                </Link>
            </div>
        </>
    );
}
export default About;
