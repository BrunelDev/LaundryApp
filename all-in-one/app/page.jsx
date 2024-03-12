"use client";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Login } from "./components/login/login.jsx";
<<<<<<< HEAD
import "./page.css"

=======
>>>>>>> 44b308879748d80b9c5f559d750bf42d7c6e1f83
import { signOut } from "next-auth/react";
import { ListDecoration } from "./components/logo/logo.jsx";
import "./page.css";

export default function home() {
<<<<<<< HEAD

  return (
    <div>
      import {Navbar} from "./components/laundry/navbar2/navbar2.jsx"; import
      "./page.css";
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="top-container">
        <div className="top">
          <div className="top-content">
            <span>LA LAVERIE QUI SIMPLIFIE LA VIE</span>
            <br />
            <span>On collecte, lave, sèche, repasse et livre votre linge</span>
            <br />
            <span>Comment ca marche ?</span>
            <br />
            <span>JE RESERVE MON LAVAGE</span>
            <br />
            <span></span>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="explanation mt-5">
          <div className="subtitle">Comment ca marche ?</div>
          <br />
          <div className="subtitle-description">
            Passez commande en 2minutes chrono, ne bougez pas on s'occupe de
            tout.
          </div>
          <div className="etape-list">
            <div className="etape">
              <img src="phone.png" alt="" />
              <div>
                <span>
                  <span className="text-2xl">E</span>tape 1 :
                </span>{" "}
                Passez commande sur l'application mobile ou sur WhatsApp, un de
                nos conseillers vous accompagnera dans la personnalisation de
                votre commande.
              </div>
            </div>
            <div className="etape">
              <img src="payment.png" alt="" />
              <div>
                <span>
                  <span className="text-2xl">E</span>tape 2 :
                </span>{" "}
                Préparez vos vêtements dans le sac à linge qui vous a été offert
                lors de votre première commande. Un de nos coursiers le
                récupérera à l'adresse de votre choix.
              </div>
            </div>
            <div className="etape">
              <img src="delivery.png" alt="" />
              <div>
                <span>
                  <span className="text-2xl">E</span>tape 3 :
                </span>
                Ne pensez plus à rien, nous vous rapportons votre linge propre
                selon votre formule de livraison.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offers mt-5 pt-12">
        <div className="subtitle">Nos offres</div>
        <hr />
        <div className="offers-description">
          Nous lavons vos vêtements de tous les jours (vêtements,
          sous-vêtements, draps, serviettes…) par lot de 8 ou 12 kg dans des
          machines professionnelles. Chaque commande est traitée
          individuellement, afin de vous garantir un lavage de qualité.
        </div>
        <div className=" card-container">
          <div className="offer-card">
            <div>
              Economique
              <div>(Lavage + Séchage)</div>
            </div>

            <div>
              À partir de : <div>8 500 FCFA</div>
            </div>
            <div>
              Le linge est collecté au lieu de votre choix et il vous est rendu
              lavé, séché et plié.
            </div>
            <input type="button" value="Passer commande" />
          </div>
          <div className="offer-card">
            <div>
              Premium
              <div>(Lavage + Séchage + Repassage)</div>
            </div>

            <div>
              À partir de : <div>8 500 FCFA</div>
            </div>
            <div>
              Le linge est collecté au lieu de votre choix et il vous est rendu
              lavé, séché, repassé et plié.
            </div>
            <input type="button" value="Passer commande" />
          </div>
        </div>
      </div>
=======
  return (
    <div>
>>>>>>> 44b308879748d80b9c5f559d750bf42d7c6e1f83
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
