import { useLocation } from "react-router-dom";

import "./Navbar.css";

import Container from "../../ui/Container";
import { site } from "../../../config/site";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className={`navbar${isHome ? " navbar-home" : ""}`}>
      <Container>
        <div className={`navbar-container${isHome ? " navbar-container-home" : ""}`}>
          {!isHome && (
            <a
              href="/"
              className="navbar-logo"
              aria-label={`${site.business.name} Home`}
            >
              {site.business.name}
            </a>
          )}

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
