import React from 'react'
import middleScribble from '../images/middle_scribble.svg'
import bottomScribble from '../images/bottom_scribble.svg'
 
function Hero() {
    return (
        <div className="hero">
            <div className="hero-banner">
                <span>Icons</span>
                <span>+</span>
                <span>Go</span>
                <span>+</span>
                <span>Here</span>
            </div>
            <div className="hero-content">
                <section>
                    <h1>Software Engineer</h1>
                    <h2>Aspiring Full-Stack Developer</h2>
                    <img src={middleScribble} className="hero-content-middle-scribble" alt="& Baking Enthusiast!" />
                    <p>
                        I create <span className="emphasis">experiences</span> through software and design.
                    </p>
                    <img src={bottomScribble} className="hero-content-bottom-scribble" alt="& Cupcakes!" />
                </section>
            </div>
        </div>
    );
}

export default Hero;