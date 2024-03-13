import "./sidebar.css";
export function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" id="current">
            Accueil
          </a>
        </li>
        <hr />
        <li>
          <a href="#">Comment ça marche ?</a>
        </li>
        <hr />
        <li>
          <a href="#">Services</a>
        </li>
        <hr />
        <li>
          <a href="#">Localisation</a>
        </li>
        <hr />
        <li>
          <a href="#">Contact</a>
        </li>
        <hr />
      </ul>
    </div>
  );
}
