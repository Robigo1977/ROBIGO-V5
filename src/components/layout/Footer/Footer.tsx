import "./Footer.css";

import { site } from "../../../config/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>{site.businessName}</h3>

        <p>
          Professional Carpet, Upholstery, Mattress & Chemical-Free Steam
          Cleaning throughout {site.serviceArea}.
        </p>

        <p>
          <a
            href={site.tel()}
            aria-label={`Call ${site.businessName}`}
          >
            {site.phone}
          </a>
        </p>

        <p>
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.businessName}`}
          >
            {site.email}
          </a>
        </p>

        <p>
          © {new Date().getFullYear()} {site.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}