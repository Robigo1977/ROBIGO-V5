import "./Footer.css";

import Container from "../../ui/Container";
import Button from "../../ui/Button/Button";
import { site } from "../../../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <section className="footer-column">
            <h3>{site.business.name}</h3>

            <p className="footer-description">
              Premium carpet, upholstery, mattress and chemical-free steam
              cleaning throughout{" "}
              <strong>{site.location.city}</strong> and the surrounding areas.
            </p>

            <div className="footer-badges">
              <span>✓ Fully Insured</span>
              <span>✓ No Call-Out Charge</span>
              <span>✓ Card Payments Accepted</span>
              <span>✓ 7 Days a Week</span>
            </div>
          </section>

          <section className="footer-column">
            <h4>Contact</h4>

            <a
              href={site.tel()}
              className="footer-link"
              aria-label={`Call ${site.business.name}`}
            >
              📞 {site.business.phone}
            </a>

            <a
              href={site.mailto()}
              className="footer-link"
              aria-label={`Email ${site.business.name}`}
            >
              ✉ {site.business.email}
            </a>

            <p className="footer-hours">
              Open every day • 8:00 AM – 8:00 PM
            </p>

            <div className="footer-cta">
              <Button
                href={site.whatsappMessage()}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                aria-label={`Get a free quote from ${site.business.name} on WhatsApp`}
              >
                Get a Free WhatsApp Quote
              </Button>
            </div>
          </section>

          <section className="footer-column">
            <h4>Our Services</h4>

            <ul className="footer-list">
              <li>Carpet Cleaning</li>
              <li>Upholstery Cleaning</li>
              <li>Mattress Cleaning</li>
              <li>Chemical-Free Steam Cleaning</li>
            </ul>
          </section>

          <section className="footer-column">
            <h4>Why Choose ROBIGO?</h4>

            <ul className="footer-list">
              <li>Local Winchester Business</li>
              <li>Professional Equipment</li>
              <li>Honest Pricing</li>
              <li>Fast WhatsApp Quotes</li>
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {site.business.name}. All rights reserved.
          </p>

          <p>
            When you feel good in your home, you feel better everywhere else.
          </p>
        </div>
      </Container>
    </footer>
  );
}