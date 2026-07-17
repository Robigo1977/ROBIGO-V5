import "./Footer.css";

import { site } from "../../../config/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>{site.business.name}</h3>

        <p>
          Professional Carpet, Upholstery, Mattress & Chemical-Free Steam
          Cleaning throughout {site.location.city} & surrounding areas.
        </p>

        <p>
          <a
            href={site.tel()}
            aria-label={`Call ${site.business.name}`}
          >
            {site.business.phone}
          </a>
        </p>

        <p>
          <a
            href={site.mailto()}
            aria-label={`Email ${site.business.name}`}
          >
            {site.business.email}
          </a>
        </p>

        <p>
          © {new Date().getFullYear()} {site.business.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}