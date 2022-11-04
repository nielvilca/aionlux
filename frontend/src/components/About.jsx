import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";


class GoogleMap extends React.Component {
    iframe = () => {
        return {
          __html: this.props.iframe
        }
    }
    
    render = () => {
        return (
          <div>
            <div dangerouslySetInnerHTML={ this.iframe() } />
          </div>
        );
      }
}

const About = () => {
    // const iframe_= '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7860.299295680215!2d-76.24293802571549!3d-9.921492221619916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1657900515816!5m2!1ses-419!2spe" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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

                    {/* <h2>Objetivos</h2>
                    <ul>
                        <li>Ofrecer un servicio de calidad en la venta de motocicletas y accesorios originales.</li>
                        <li>Cumplir y superar las expectativas de nuestros clientes.</li>
                        <li>Capacitar a nuestro personal de forma continua.</li>
                        <li>Fidelizar a nuestros clientes mediante la entrega de una propuesta de excelencia</li>
                    </ul> */}
                    <h2>Historia</h2>
                    <p>
                    
                    </p>
                    {/* <GoogleMap iframe={iframe_}/> */}
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default About;