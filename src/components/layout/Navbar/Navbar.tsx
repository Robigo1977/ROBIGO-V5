import "./Navbar.css";

import Container from "../../ui/Container";
import { site } from "../../../config/site";

export default function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="navbar-container">
          <a
            href="/"
            className="navbar-logo"
            aria-label={`${site.business.name} Home`}
          >
            {site.business.name}
          </a>

          <nav
            className="navbar-nav"
            aria-label="Primary navigation"
          >
            <a href="/#services">Services</a>
            <a href="/#services">Prices</a>
            <a href="/more-about-robigo#reviews">Reviews</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
