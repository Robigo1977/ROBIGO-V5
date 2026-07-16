import Container from "../../ui/Container/Container";
import { trustItems } from "./trustBar.data";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <section className={styles.bar}>
      <Container>
        <div className={styles.grid}>
          {trustItems.map(({ icon: Icon, title }) => (
            <div key={title} className={styles.item}>
              <Icon size={20} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}