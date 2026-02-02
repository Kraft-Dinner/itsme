import React from 'react'
import middleScribble from '../images/middle_scribble.svg'
import bottomScribble from '../images/bottom_scribble.svg'
import coffee from '../images/la_coffee.svg'
import headphones from '../images/ph_headphones-light.svg'
import design from '../images/clarity_design-line.svg'
import terminal from '../images/ant-design_code-outlined.svg'
 
function Hero() {
    return (
        <div className="hero">
            <div className="hero__banner">
                <img src={coffee} alt="Coffee" title="Coffee" />
                <span className="emphasis">+</span>
                <img src={headphones} alt="Music" title="Music"/>
                <span className="emphasis">+</span>
                <img src={design} alt="Design" title="Design"/>
                <span className="emphasis">+</span>
                <img src={terminal} alt="Develop" title="Develop"/>
            </div>
            <div className="hero__content">
                <section>
                    <h1>Senior Software Engineer</h1>
                    <h2>Full-Stack Developer</h2>
                    <img src={middleScribble} className="hero__content--middle" alt="& Baking Enthusiast!" />
                    <p>
                        I create <span className="emphasis">experiences</span> through software and design.
                    </p>
                    <img src={bottomScribble} className="hero__content--bottom" alt="& Cupcakes!" />
                </section>
            </div>
        </div>
    );
}

export default Hero;
