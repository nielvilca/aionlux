import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";

const Contact = () => {
  return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    <p>Contactanos a los siguientes correos</p>
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default Contact;