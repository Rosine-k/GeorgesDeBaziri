import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Banner from "../../components/Banner/index";
import bannerHome from "../../assets/couvertureAccueil.png";
import VigFemmes from "../../assets/femmes.png";
import VigHommes from "../../assets/hommes.jpg";
import VigAccessoires from "../../assets/accessoires.png";
import AccueilUn from "../../assets/accueil1.png";
import AccueilDeux from "../../assets/accueil2.png";
import AccueilTrois from "../../assets/accueil3.png";
import { Link } from "react-router-dom";


function Accueil() {

    return (
        <div className="">
            <Header />
            <main>
                <Banner
                    class="banner"
                    image={bannerHome} 
                    alt="Paysage"
                    >
                    <h1 className="banner__text">Prêt-à-porter<br></br> GEORGES DE BAZIRI</h1>
                </Banner>

                <div className="choix">

                    <Link to="/vetementsf" className="choix__block">
                        <img className="vignette" alt="vignette femmes" src={VigFemmes}></img>

                        <h5 className="vig__accueil">Vêtements femmes</h5>
                    </Link>

                

                    <Link to="/vetementsh" className="choix__block">

                        <img className="vignette" alt="vignette hommes" src={VigHommes}></img>

                        <h5 className="vig__accueil">Vêtements hommes</h5>
                    </Link>

                    <Link to="/accessoires" className="choix__block">

                        <img className="vignette" alt="vignette accessoires" src={VigAccessoires}></img>

                        <h5 className="vig__accueil">Accessoires</h5>
                    </Link>

                </div>

                <div className="decoimg">

                    <img className="deco" alt="vignette deco" src={AccueilUn}></img>
                    <img className="deco" alt="vignette deco" src={AccueilDeux}></img>
                    <img className="deco" alt="vignette deco" src={AccueilTrois}></img>

                </div>

                

            </main>
            <Footer />

        </div>
    )
}

export default Accueil;