import { ArrowRight, CircleCheck } from "lucide-react";

import Container from "../../ui/Container";

import styles from "./ExploreMore.module.css";

const topics = [
  "Meet Robert",
  "Before & after results",
  "Customer reviews",
  "Prices and service areas",
  "Helpful cleaning answers",
];

export default function ExploreMore() {
  return (
    <section className={styles.section} aria-labelledby="explore-title">
      <Container>
        <div className={styles.panel}>
          <div>
            <p className={styles.eyebrow}>Want to know more?</p>
            <h2 id="explore-title">Discover the ROBIGO difference</h2>
            <p className={styles.text}>
              Read our story, see detailed results and find practical service
              information whenever you need it.
            </p>
          </div>

          <ul className={styles.list}>
            {topics.map((topic) => (
              <li key={topic}>
                <CircleCheck aria-hidden="true" />
                {topic}
              </li>
            ))}
          </ul>

          <div className={styles.links}>
            <a className={styles.link} href="/more-about-robigo#reviews">
              Read Customer Reviews
              <ArrowRight aria-hidden="true" />
            </a>
            <a className={styles.secondaryLink} href="/more-about-robigo">
              More About ROBIGO
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
