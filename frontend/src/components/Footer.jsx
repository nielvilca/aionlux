import * as React from "react";
import "../assets/styles/Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {buttonURL} from "../utils";

const Footer = () => {
  const contactURL = buttonURL;
  return (
    <React.Fragment>
      <div className="home-footer">
        <ul className="home-footer__ul">
            <li className="home-footer__li"><Link  to="/about/" className="home-footer__link">Sobre Nosotros</Link></li>
            <li className="home-footer__li"><Link  to="/contact/" className="home-footer__link" onClick={() => window.location.href = contactURL}>Contacto</Link></li>
            <li className="home-footer__li"><Link  to="/products/" className="home-footer__link">Productos</Link></li>
        </ul>
       
        {/* <div>
          <p className="home-footer__p">Siguenos en redes sociales</p>
          <div className="social-media">
            <a className="social-media-link" href="https://www.facebook.com/granitohomecenter/" target="_blank" rel="noopener noreferrer">
              <span><FontAwesomeIcon icon={["fab", "facebook"]}/></span>
            </a>
            <a className="social-media-link" href="https://www.instagram.com/granitoshomecenter/" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={["fab", "instagram"]}/></span>
            </a>
          </div>
        </div> */}
    </div>
    {/* <img className="redwoman" src="" /> */}
    <p className="home-footer__copyright">
      2022 © Aionlux - Reservados todos los derechos
    </p>
    </React.Fragment>
  );
}

export default Footer;