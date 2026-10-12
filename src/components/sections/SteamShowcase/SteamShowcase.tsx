import { site } from "../../../config/site";
import styles from "./SteamShowcase.module.css";

export default function SteamShowcase() {
  const whatsapp = site.whatsappMessage(
    "Hi ROBIGO, I'd like a free quote for chemical-free hard-floor steam cleaning.",
  );

  return (
    <section
      id="steam-cleaning"
      className={styles.section}
      aria-labelledby="steam-cleaning-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>CHEMICAL-FREE HARD-FLOOR STEAM CLEANING</p>
          <h2 id="steam-cleaning-heading">
            Professional Steam Cleaning in Winchester
          </h2>
          <p>
            High-temperature dry steam for suitable hard floors. We check the
            surface first, then use professional Kärcher steam equipment without
            adding chemical cleaning product to the floor surface.
          </p>
        </header>

        <div className={styles.mediaGrid}>
          <div className={styles.videoCard}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster="/media/steam-action.webp"
              aria-label="ROBIGO professional dry steam equipment in action"
            >
              <source src="/media/steam-cleaning.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <div className={styles.videoCopy}>
              <h3>See ROBIGO dry steam equipment in action</h3>
              <p>
                Watch the real ROBIGO steam-cleaning process. Chemical-free room
                pricing on this website applies specifically to suitable hard
                floors; other surfaces are assessed separately before cleaning.
              </p>
            </div>
          </div>

          <figure className={styles.posterCard}>
            <img
              src="/media/pet-friendly-poster.webp"
              alt="ROBIGO chemical-free hard-floor steam cleaning information with Robert and Pedro"
              loading="lazy"
              decoding="async"
              width="520"
              height="780"
            />
            <figcaption>
              Steam cleaning is the chemical-free option for suitable hard
              floors. Other ROBIGO services may use appropriate professional
              cleaning products where required.
            </figcaption>
          </figure>
        </div>

        <div className={styles.trustRow} aria-label="Steam cleaning benefits">
          <span>Suitable hard floors</span>
          <span>Professional Kärcher equipment</span>
          <span>Simple room prices</span>
          <span>No call-out charge</span>
        </div>

        <a
          className={styles.cta}
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp for a Free Steam Cleaning Quote
        </a>
      </div>
    </section>
  );
}
