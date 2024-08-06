import "./navbar.css";
import { Bubbles } from "../logo/logo";
import { Menu } from "../menu/menu";
import Link from "next/link";
export function Navbar({ actual }) {
  return (
    <div className="fixed z-50 left-0 top-0 w-full">
      <div className="navbar">
        <div>Logo</div>
        <div>
          <ul>
            <Link href="/">
              <li id={actual == "accueil" ? "actual" : ""}>Accueil</li>
            </Link>
            <Link href="/service">
              <li id={actual == "services" ? "actual" : ""}>Services</li>
            </Link>
            <Link href="/localisation">
              <li id={actual == "localisation" ? "actual" : ""}>
                Localisation
              </li>
            </Link>

            <Link href="/contact">
              <li id={actual == "contact" ? "actual" : ""}>Contact</li>
            </Link>
          </ul>
          <div className="menu z-10">
            <Menu actual={actual} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
