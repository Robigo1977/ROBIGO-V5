import Container from "../../ui/Container";
import { site } from "../../../config/site";
import { pricing } from "../../sections/Pricing/pricing.data";
import styles from "../../sections/Pricing/Pricing.module.css";

export default function CarpetPrices() {
  const carpet = pricing.find((category) => category.id === "carpet");

  if (!carpet) return null;

  return (
    <section className={styles.section} aria-labelledby="carpet-prices-heading">
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>SIMPLE ROOM PRICES</span>
          <h2 id="carpet-prices-heading">Carpet Cleaning Prices in Winchester</h2>
          <p>
            No square-metre calculation. Choose the closest room type below.
            Minimum total booking is £50 and call-out is free.
          </p>
        </div>

        <article className={styles.card}>
          <div className={styles.list}>
            {carpet.items.map((item) => (
              <div className={styles.row} key={item.label}>
                <span className={styles.label}>{item.label}</span>
                <strong className={styles.price}>{item.price}</strong>
              </div>
            ))}
          </div>
          {carpet.note && <p className={styles.note}>{carpet.note}</p>}
        </article>

        <div className={styles.cta}>
          <p>Not sure which room size applies? Send Robert a photo for a free quote.</p>
          <a
            className={styles.button}
            href={site.whatsappMessage(
              "Hi ROBIGO, I'd like a free carpet cleaning quote in Winchester.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask Robert on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
