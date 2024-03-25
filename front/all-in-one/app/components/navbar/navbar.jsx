import "./navbar.css";
import { Bubbles } from "../logo/logo";
import { Menu } from "../menu/menu";
export function Navbar({ actual }) {
  return (
    <div className="fixed z-50 left-0 top-0 w-full">
      <div className="navbar">
        <div>Logo</div>
        <div>
          <ul>
            <li id={actual == "accueil" ? "actual" : ""}>Accueil</li>
            <li id={actual == "comment ca marche" ? "actual" : ""}>
              Comment ca marche
            </li>
            <li id={actual == "services" ? "actual" : ""}>Services</li>
            <li id={actual == "localisation" ? "actual" : ""}>Localisation</li>
            <li id={actual == "contact" ? "actual" : ""}>Contact</li>
          </ul>
          <div className="menu z-10">
            <Menu />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
