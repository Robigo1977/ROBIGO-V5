import ovenImage from "../../../assets/optimized/approved/oven-clean-web-2026.jpg";
import { site } from "../../../config/site";
import styles from "./OvenCleaning.module.css";

const ovenPrices = [
  { name: "Single Oven", price: "£50", note: "Interior oven clean" },
  { name: "Double Oven", price: "£70", note: "Both oven compartments" },
  { name: "Range Cooker", price: "£90", note: "Large range-style cooker" },
  { name: "Hob", price: "£20", note: "Available with oven cleaning only" },
  { name: "Microwave", price: "£20", note: "Microwave cleaning" },
] as const;

export default function OvenCleaning() {
  const whatsappHref = site.whatsappMessage(
    "Hi ROBIGO, I'd like to book oven cleaning. Please let me know your next available appointment."
  );
  const emergencyHref = site.whatsappMessage(
    "Hi ROBIGO, I need the earliest available oven cleaning appointment."
  );

  return (
    <section className={styles.section} id="oven-cleaning" aria-labelledby="oven-cleaning-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.badge}>OVEN CLEANING</span>
          <img
            src={ovenImage}
            alt="Professional oven cleaning in a modern Winchester kitchen"
            width={650}
            height={366}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              margin: "0.8rem 0 1rem",
              borderRadius: "16px",
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.28)",
            }}
          />
          <h2 id="oven-cleaning-title">Professional Oven Cleaning in Winchester</h2>
          <p>
            A careful deep clean for ovens, cookers and selected kitchen appliances.
            Clear fixed prices, £50 minimum booking and no call-out charge within our service area.
          </p>
          <ul className={styles.benefits}>
            <li>Built-up grease and burnt-on residue removed</li>
            <li>Racks, trays and accessible internal surfaces cleaned</li>
            <li>Available seven days a week</li>
          </ul>
          <a href="/oven-cleaning-winchester">
            More about oven cleaning in Winchester →
          </a>
          <a className={styles.cta} href={whatsappHref} target="_blank" rel="noreferrer">
            Book Oven Cleaning on WhatsApp
          </a>
        </div>

        <details className={styles.priceDropdown}>
          <summary className={styles.priceSummary}>
            <span className={styles.priceSummaryText}>
              <strong>VIEW PRICES</strong>
              <small>Tap here to see exactly how much</small>
            </span>
            <span className={styles.summaryIcon} aria-hidden="true">+</span>
          </summary>

          <div className={styles.dropdownContent}>
            <div className={styles.priceList} aria-label="Oven cleaning prices">
              {ovenPrices.map((item) => (
                <div className={styles.priceItem} key={item.name}>
                  <div>
                    <span>{item.name}</span>
                    <small>{item.note}</small>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              ))}
              <p className={styles.priceNote}>
                Hob cleaning is £20 only when booked together with an oven clean. Minimum total booking is £50. Call-out is free.
              </p>
            </div>

            <div className={styles.urgentGrid} aria-label="Fast oven cleaning options">
              <article className={`${styles.urgentCard} ${styles.emergencyCard}`}>
                <span className={styles.urgentBadge}>EMERGENCY</span>
                <div className={styles.urgentPrice}>from £50</div>
                <p>The earliest available appointment.</p>
                <a href={emergencyHref} target="_blank" rel="noreferrer">
                  Request Emergency Help
                </a>
              </article>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
