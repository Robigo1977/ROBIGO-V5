import { site } from "../../../config/site";
import styles from "./OvenCleaning.module.css";

const ovenPrices = [
  { name: "Single Oven", price: "£60", note: "Interior oven clean" },
  { name: "Double Oven", price: "£80", note: "Both oven compartments" },
  { name: "Range Cooker", price: "£90", note: "Large range-style cooker" },
  { name: "Hob", price: "£20", note: "Add-on hob cleaning" },
  { name: "Microwave", price: "£20", note: "Add-on microwave cleaning" },
] as const;

export default function OvenCleaning() {
  const whatsappHref = site.whatsappMessage(
    "Hi ROBIGO, I'd like to book oven cleaning. Please let me know your next available appointment."
  );

  return (
    <section className={styles.section} id="oven-cleaning" aria-labelledby="oven-cleaning-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.badge}>NEW ROBIGO SERVICE</span>
          <h2 id="oven-cleaning-title">Professional Oven Cleaning in Winchester</h2>
          <p>
            A careful deep clean for ovens, cookers and selected kitchen appliances.
            Clear fixed prices, friendly local service and no call-out charge within our service area.
          </p>
          <ul className={styles.benefits}>
            <li>Built-up grease and burnt-on residue removed</li>
            <li>Racks, trays and accessible internal surfaces cleaned</li>
            <li>Available seven days a week, subject to availability</li>
          </ul>
          <a className={styles.cta} href={whatsappHref} target="_blank" rel="noreferrer">
            Book Oven Cleaning on WhatsApp
          </a>
        </div>

        <div className={styles.pricing} aria-label="Oven cleaning prices">
          <div className={styles.pricingHeader}>
            <span>Service</span>
            <span>Price</span>
          </div>
          {ovenPrices.map((item) => (
            <div className={styles.priceRow} key={item.name}>
              <div>
                <strong>{item.name}</strong>
                <small>{item.note}</small>
              </div>
              <strong className={styles.price}>{item.price}</strong>
            </div>
          ))}
          <p className={styles.smallPrint}>
            Hob and microwave prices apply when booked with an oven clean. Final suitability is confirmed before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
