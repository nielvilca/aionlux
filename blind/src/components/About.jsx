import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";

const About = () => {
  return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    <h1>Sobre Nosotros</h1>
                 
                    <h2>Misión</h2>
                    
                    <p>
                    hola gente
                    </p>
                    <h2>Visión</h2>
                    <p>
                    
                    </p>
                    <h2>Historia</h2>
                    <p>
                    
                    </p>
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default About;