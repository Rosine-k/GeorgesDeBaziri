import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loupe from "../../assets/chercher.png";
import LogoPanier from "../../assets/panier.png";
import Logo from "../../assets/logo.png";

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navigation ${isScrolled ? "sticky" : ""}`}>

      <div className="navigation">

        <nav className="navigation__liens">
        <Link to="/" className="navigation__accueil">
          <img id="logo" src={Logo} alt="Recherche"></img>
        </Link>

          <form id="search-form" action="/search" method="get">
            <input type="text" id="search-input" name="q" placeholder="Recherche..."></input>
            <button type="submit" id="search-button">
              <img id="search-icon" src={Loupe} alt="Recherche"></img>
                      
            </button>
          </form>

          <Link to="/vetementsh"className="navigation__vetementsh">
            Vêtements hommes
          </Link>

          <Link to="/vetementsf"className="navigation__vetementsf">
            Vêtements femmes
          </Link>

          <Link to="/accessoires"className="navigation__accessoires">
            Accessoires
          </Link>
          
          <Link to="/panier" className="navigation__panier">
            <div className="block__panier">
              <span className="panier-text">Panier</span>
              <img alt="logoPanier" id="logoPanier" src={LogoPanier} />    
            </div>
          </Link>


        </nav>
      </div>

        

     

        
      
    </header>
  );
}

export default Header;