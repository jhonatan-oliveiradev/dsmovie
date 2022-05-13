import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1><img src="https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png" alt="" width="40px" height="40px"/>DSMovie.</h1>
          <a
            href="https://github.com/jhonatan-oliveiradev/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/jhonatan-oliveiradev</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
