import { site } from "../../../config/site";
import styles from "./MeetRobert.module.css";

export default function MeetRobert() {
  return (
    <section
      id="meet-robert"
      className={styles.section}
      aria-labelledby="meet-robert-heading"
    >
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src="/media/robert-profile.webp"
            alt="Robert from ROBIGO professional cleaning services in Winchester"
            loading="lazy"
            decoding="async"
            width="640"
            height="640"
          />
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>LOCAL. PERSONAL. PROFESSIONAL.</p>
          <h2 id="meet-robert-heading">Meet Robert from ROBIGO</h2>
          <p>
            ROBIGO is a local Winchester cleaning service. Robert handles your
            enquiry personally, explains the price clearly before the job and
            uses professional Kärcher equipment for the right cleaning method.
          </p>
          <p>
            Need help choosing a service? Send a photo on WhatsApp and get a
            free quotation without a call-out charge.
          </p>

          <div className={styles.points}>
            <span>Winchester local</span>
            <span>7 days a week</span>
            <span>£50 minimum booking</span>
            <span>No call-out charge</span>
          </div>

          <a
            className={styles.cta}
            href={site.whatsappMessage(
              "Hi Robert, I'd like a free ROBIGO cleaning quotation.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Robert
          </a>
        </div>
      </div>
    </section>
  );
}
