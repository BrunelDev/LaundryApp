"use client";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Login } from "./components/login/login.jsx";
import { signOut } from "next-auth/react";
import { ListDecoration } from "./components/logo/logo.jsx";
import "./page.css";

export default function Home() {
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
        <div className="title">Comment ça marche ?</div>
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
        <div className="cards2-container">
          <div className="card2">
            <div>
              <img src="iron.png" alt="an iron" />
              <div className="card2-title">Economique</div>
            </div>
            <div>Pour repasser vos vetements</div>
            <div>Que contient cette formule ?</div>
            <ul>
              <li>
                {" "}
                <ListDecoration />
                <div className="pl-5">Repassage de vos vetements</div>
              </li>
              <li>
                <ListDecoration />
                <div className="pl-5">jusqu'à 30 kilos de colis</div>
              </li>
            </ul>
            <hr />

            <div>
              A partir de <span>5000 francs CFA</span>
            </div>
            <input type="submit" value="Choisir" />
          </div>
          <div className="card2">
            <div>
              <img src="iron.png" alt="an iron" />
              <div className="card2-title">Economique</div>
            </div>
            <div>Pour repasser vos vetements</div>
            <div>Que contient cette formule ?</div>
            <ul>
              <li>
                {" "}
                <ListDecoration />
                <div className="pl-5">Repassage de vos vetements</div>
              </li>
              <li>
                <ListDecoration />
                <div className="pl-5">jusqu'à 30 kilos de colis</div>
              </li>
            </ul>
            <hr />

            <div>
              A partir de <span>5000 francs CFA</span>
            </div>
            <input type="submit" value="Choisir" />
          </div>
          <div className="card2">
            <div>
              <img src="iron.png" alt="an iron" />
              <div className="card2-title">Economique</div>
            </div>
            <div>Pour repasser vos vetements</div>
            <div>Que contient cette formule ?</div>
            <ul>
              <li>
                {" "}
                <ListDecoration />
                <div className="pl-5">Repassage de vos vetements</div>
              </li>
              <li>
                <ListDecoration />
                <div className="pl-5">jusqu'à 30 kilos de colis</div>
              </li>
            </ul>
            <hr />

            <div>
              A partir de <span>5000 francs CFA</span>
            </div>
            <input type="submit" value="Choisir" />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
        <button
          onClick={() => {
            signOut();
          }}
        >
          Deconnexion
        </button>
      </div>
    </div>
  );
}
