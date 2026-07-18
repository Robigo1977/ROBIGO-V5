import "./Footer.css";

import { site } from "../../../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>{site.business.name}</h3>

            <p className="footer-description">
              Premium Carpet, Upholstery, Mattress &
              Chemical-Free Steam Cleaning throughout{" "}
              <strong>{site.location.city}</strong> and surrounding areas.
            </p>

            <div className="footer-badges">
              <span>✔ Fully Insured</span>
              <span>✔ No Call-Out Charge</span>
              <span>✔ Free Quotes</span>
              <span>✔ 7 Days a Week</span>
            </div>
          </div>

          <div className="footer-column">
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
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>

            <ul className="footer-list">
              <li>Carpet Cleaning</li>
              <li>Upholstery Cleaning</li>
              <li>Mattress Cleaning</li>
              <li>Chemical-Free Steam Cleaning</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Why Choose ROBIGO?</h4>

            <ul className="footer-list">
              <li>Local Winchester Business</li>
              <li>Professional Equipment</li>
              <li>Honest Pricing</li>
              <li>Fast WhatsApp Quotes</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {site.business.name}. All rights reserved.
          </p>

          <p>
            When you feel good in your home, you feel better everywhere else.
          </p>
        </div>
      </div>
    </footer>
  );
}