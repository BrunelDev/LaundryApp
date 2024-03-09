"use client";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Login } from "./components/login/login.jsx";
import { signOut } from "next-auth/react";
import "./page.css";

export default function home() {
  return (
    <div>
      <div>
        <Navbar actual={"accueil"} />
      </div>
      <div className="top">
        <div className="top-left">
          <div>20% de reduction sur un un abonnement d'un mois</div>
          <div>La laverie qui vous soulage la vie .</div>
          <div>
            Nous lavons, repassons et plions à un prix abordable. Choisissez et
            souscrivez à nos options disponibles.
          </div>
          <div>Comment ça marche ?</div>
        </div>
        <div className="top-right">
          <div></div>
          <img src="laundrymachine.png" alt="Une machine a laver" />
        </div>
      </div>
      <div className="functioning">
        <div className="tilte">Comment ça marche ?</div>
        <div className="subtitle">On s'occupe de tout !</div>
        <div className="cards-container">
          <div className="card">
            <div>Etape 1</div>
            <div>Récupérer le linge</div>
            <img src="pickup.png" alt="a post man" />
          </div>
          <div className="card">
            <div>Etape 2</div>
            <div>Laver et sécher</div>
            <img src="washAndDry.png" alt="a woman next to a washing machine" />
          </div>

          <div className="card">
            <div>Etape 3</div>
            <div>Plier</div>
            <img
              src="fold.png"
              alt="a functioning washing machine next to folded cloth"
            />
          </div>
          <div className="card">
            <div>Etape 4</div>
            <div>Livrer</div>
            <img src="delivery.png" alt="a post man and a woman" />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="title">Services</div>
        <div className="subtitle">Services et offres</div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
