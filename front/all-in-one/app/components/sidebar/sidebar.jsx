import "./sidebar.css";
import Link from "next/link";
export function Sidebar({ actual }) {
  return (
    <div className="sidebar">
      <ul>
        <Link href="/">
          <li id={actual == "accueil" ? "actual" : ""}>Accueil</li>
        </Link>
        <Link href="/service">
          <li id={actual == "services" ? "actual" : ""}>Services</li>
        </Link>
        <Link href="/localisation">
          <li id={actual == "localisation" ? "actual" : ""}>Localisation</li>
        </Link>

        <Link href="/contact">
          <li id={actual == "contact" ? "actual" : ""}>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
