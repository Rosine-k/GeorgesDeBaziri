// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/index";
import Contact from "./pages/Contact/index";
import Panier from "./pages/Panier/index";
import Produits from "./pages/Produits/index";

function App() {
  return (
    <BrowserRouter>            
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Panier/>} />
        <Route path="/produits" element={<Produits/>} />
        {/* <Route path="*" element={<Erreur />} />        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
