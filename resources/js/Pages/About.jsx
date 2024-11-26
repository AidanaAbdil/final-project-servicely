import { Link } from "react-router-dom";


function About() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>Welcome to Yourservicely</h1>
                    <p>Empowering communities, one step at a time.</p>
                </div>
            </section>
            <section className="about-section" id="about">
                <div className="about-content">
                    <h4>About Us</h4>
                    <p>
                        At <strong>Yourservicely</strong>, our mission is to
                        connect individuals and businesses through seamless
                        service exchanges. We started with a simple idea: to
                        empower communities by fostering collaboration and
                        creating opportunities.
                    </p>
                    <p>
                        From creative freelancers to professional services, our
                        platform is designed to make finding the right fit
                        effortless. Whether you’re here to share your expertise
                        or solve your next challenge, Yourservicely is your
                        trusted partner.
                    </p>
                    <p>
                        Join a growing community of problem-solvers and
                        collaborators. Together, we’re redefining the way
                        services are shared and valued. Yourservicely —
                        connecting needs with skills, every step of the way.
                    </p>
                </div>
            </section>

            <section className="cta-section">
                <h4>Join Us Today!</h4>
                <p>Be part of our mission to make the world a better place.</p>
                <a href="/register" className="cta-button">
                    Sign up
                </a>
            </section>
        </>
    );
       
    
}

export default About;
