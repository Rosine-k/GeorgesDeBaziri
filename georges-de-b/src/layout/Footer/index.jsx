import React from "react";
import { Link } from "react-router-dom";
import logoFacebook from "../../assets/facebook.png";
import logoInstagram from "../../assets/instagram.png";

function Footer() {
    return (
      <footer className="footer">

        <div className="footer__logo-container">


          <Link to="/">
           <img className="footer__facebook" src={logoFacebook} alt="logo Facebook" />
          </Link>

          <Link to="/">
           <img className="footer__instagram" src={logoInstagram} alt="logo Instagram" />
          </Link>

        </div>
        
        <a className="footer__contact" href="./contact">A propos</a>
        <a className="footer__contact" href="./contact">CGU</a>
        <a className="footer__contact" href="./contact">Contact</a>
        <a className="footer__mentions" href="./mentions">Mentions légales</a>
        <p className="footer__text">© 2024 Georges de Baziri. All rights reserved</p>
      </footer>
      
    );
}
  
export default Footer;