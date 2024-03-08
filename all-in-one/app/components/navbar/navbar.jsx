import "./navbar.css";
export function Navbar() {
  return (
    <div>
      <div className="navbar flex justify-between">
        <div>Logo</div>
        <div className="navbar-buttons">
          <a href="">
            <span>Home</span>
          </a>
          <a href="">
            <span>How it works</span>
          </a>
          <a href="">
            <span>Contact</span>
          </a>
          <a href="">
            <span>About</span>
          </a>
        </div>
      </div>
    </div>
  );
}
