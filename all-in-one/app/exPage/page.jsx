"use client";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Login } from "./components/login/login.jsx";

import { signOut } from "next-auth/react";
import "./page.css";

export default function home() {
  const { status, account } = useAuth();

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="top-container">
        <div className="top">
          <div className="top-content">
            <span>LA LAVERIE QUI SIMPLIFIE LA VIE</span>
            <br />
            <span>
              On collecte, lave, sèche, repasse et livre votre linge à Calavi
            </span>
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
      <div>
        Pour votre première commande, recevez un sac à linge offert par Tambour
        !
      </div>
      <div className="pro-sexion">
        <div className="subtitle">Vous êtes un professionnel ?</div>
        <div className="subtitle-description">
          Profitez d'un service de blanchisserie flexible et rapide à Calavi
        </div>
        <div className="offers-description">
          Notre service s'adresse aux professionnels ayant du linge à laver.
          Confiez-nous votre linge, profitez d'un lavage de qualité à des prix
          défiants toute concurrence et concentrez-vous sur votre coeur de
          métier.
        </div>
        <div className="hotel-bg">
          <div>
            Linge de lit blanc Vous êtes propriétaire d'un restaurant, d'un bar,
            d'un logement BnB, d'un institut de beauté ou encore d'un salon de
            coiffure ?
          </div>
          <div>Appelez nous !</div>
        </div>
      </div>
      <div className="contact-us">
        Vous êtes un professionnel ? Contactez-nous par mail sur
        contact@tambourlaverie.com pour une offre personnalisée
      </div>
      <div className="utilisation-faq">
        <div className="subtitle">Mode d'emploi et FAQ</div>
        <div className="subtitle-description">
          ⚠️ ATTENTION : NOUS NE SOMMES PAS UN PRESSING
        </div>
        <div className="offers-description description-header">
          La différence entre laverie et pressing, c’est quoi ?
        </div>
        <div className="offers-description">
          Notre service réalise le lavage de votre linge de tous les jours en
          machine avec de l’eau et de la lessive. Le pressing permet de détacher
          le linge fragile en lavage à sec, c’est à dire avec un solvant. Notre
          prestation est différente d’un pressing et aussi{" "}
          <strong>moins coûteuse</strong>.
        </div>
      </div>
      <button onClick={() => signOut()}>Se deconnecter</button>
    </div>
  );
}
