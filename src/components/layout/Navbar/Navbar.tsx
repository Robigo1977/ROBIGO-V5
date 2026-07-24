import "./Navbar.css";

import Button from "../../ui/Button/Button";
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
            <a href="/#quote">Quote</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#contact">Contact</a>
          </nav>

          <Button
            href={site.whatsappMessage()}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            aria-label={`Contact ${site.business.name} on WhatsApp`}
          >
            {site.cta.whatsappLabel}
          </Button>
        </div>
      </Container>
    </header>
  );
}