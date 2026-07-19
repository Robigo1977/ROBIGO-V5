import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import { site } from "../../../config/site";

import styles from "./Footer.module.css";

const services = [
  "Carpet Cleaning",
  "Upholstery Cleaning",
  "Mattress Cleaning",
  "Steam Cleaning",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <section className={styles.brand}>
            <h2>{site.business.name}</h2>

            <p>
              Professional carpet, upholstery, mattress and chemical-free steam
              cleaning throughout Winchester and surrounding Hampshire.
            </p>

            <a
              href={site.whatsappMessage()}
              className={styles.cta}
            >
              <Button>{site.cta.primary}</Button>
            </a>
          </section>

          <section className={styles.column}>
            <h3>Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section className={styles.column}>
            <h3>Contact</h3>

            <ul>
              <li>
                <a href={site.tel()}>{site.business.phone}</a>
              </li>

              <li>
                <a href={site.mailto()}>{site.business.email}</a>
              </li>

              <li>
                {site.location.city}, {site.location.county}
              </li>

              <li>Every day • 8:00 AM – 8:00 PM</li>
            </ul>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {site.business.name}. All rights
            reserved.
          </p>

          <p>No Call-Out Charge • Card Payments Accepted</p>
        </div>
      </Container>
    </footer>
  );
}