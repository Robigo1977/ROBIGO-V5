import Container from "../../ui/Container/Container";
import BeforeAfterCard from "./BeforeAfterCard";
import { beforeAfterItems } from "./beforeAfter.data";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  return (
    <section className={styles.section} id="before-after">
      <Container>
        <div className={styles.header}>
          <h2>See the Difference</h2>

          <p>
            Real results from professional carpet and upholstery cleaning
            across Winchester and the surrounding area.
          </p>
        </div>

        <div className={styles.grid}>
          {beforeAfterItems.map((item) => (
            <BeforeAfterCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}