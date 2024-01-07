// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/index";
import Contact from "./pages/Contact/index";
import Panier from "./pages/Panier/index";
import VetementsH from "./pages/VetementsH/index";
import VetementsF from "./pages/VetementsF/index";
import Accessoires from "./pages/Accessoires/index";
import ScrollToTop from "./components/Scroll/ScrollToTop";

function App() {
  return (
    <BrowserRouter>    
      <ScrollToTop />         
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Panier/>} />
        <Route path="/vetementsh" element={<VetementsH/>} />
        <Route path="/vetementsf" element={<VetementsF/>} />
        <Route path="/accessoires" element={<Accessoires/>} />
        {/* <Route path="*" element={<Erreur />} />        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
