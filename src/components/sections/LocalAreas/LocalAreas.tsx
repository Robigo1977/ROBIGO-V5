import Container from "../../ui/Container/Container";
import styles from "./LocalAreas.module.css";

const areas = [
  "Winchester",
  "Eastleigh",
  "Chandler's Ford",
  "Shawford",
  "Compton",
  "Otterbourne",
  "Twyford",
  "King's Worthy",
  "Hursley",
] as const;

function AreaList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className={styles.areaList} aria-hidden={hidden || undefined}>
      {areas.map((area) => (
        <li key={`${hidden ? "repeat-" : ""}${area}`}>{area}</li>
      ))}
    </ul>
  );
}

export default function LocalAreas() {
  return (
    <section
      id="service-areas"
      className={styles.section}
      aria-labelledby="service-areas-heading"
    >
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>LOCAL CLEANING SERVICE</span>
          <h2 id="service-areas-heading">
            Professional Cleaning in Winchester & Nearby Areas
          </h2>
          <p>
            ROBIGO provides carpet, upholstery, mattress, oven and chemical-free
            hard-floor steam cleaning across Winchester and nearby Hampshire
            communities. Free call-out. Minimum total booking £50.
          </p>
        </div>
      </Container>

      <div className={styles.marquee} aria-label="ROBIGO service areas">
        <div className={styles.track}>
          <AreaList />
          <AreaList hidden />
        </div>
      </div>
    </section>
  );
}
