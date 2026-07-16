import "./Navbar.css";

import { site } from "../../../config/site";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="/"
          className="navbar-logo"
          aria-label="ROBIGO Home"
        >
          ROBIGO
        </a>

        <nav
          className="navbar-nav"
          aria-label="Primary navigation"
        >
          <a href="#services">Services</a>
          <a href="#quote">Quote</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="navbar-button"
          href={site.whatsappMessage()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact ROBIGO on WhatsApp"
        >
          {site.cta.whatsappLabel}
        </a>
      </div>
    </header>
  );
}