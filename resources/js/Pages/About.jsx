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
                        We started with a mission to 'Placeholder'.  Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quis dolorem ratione minima inventore
                        quia, quos temporibus fugiat vel eum sequi maxime,
                        quaerat soluta quisquam, reiciendis aspernatur explicabo
                        illum neque impedit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus minus, saepe quis dignissimos, repudiandae repellendus adipisci natus atque numquam, ducimus possimus cum quae? Ut, repellendus eum. Reiciendis, facere culpa!
                    </p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam alias obcaecati cum, nobis at debitis nam id, sit repellat inventore ex temporibus maxime eveniet accusantium commodi veritatis impedit perferendis?</p>
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
