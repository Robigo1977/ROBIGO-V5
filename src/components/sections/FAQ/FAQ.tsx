import Container from "../../ui/Container/Container";

import FAQItem from "./FAQItem";
import { faqs } from "./faq.data";

import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section
      id="faq"
      className={styles.section}
    >
      <Container>
        <div className={styles.header}>
          <span className={styles.badge}>
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Everything You Need to Know Before Booking
          </h2>

          <p>
            We believe in honest advice, transparent pricing and clear
            communication. Here are the questions we're asked most often by
            homeowners across Winchester.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <p>
            Can't find the answer you're looking for?
          </p>

          <a
            href="#quote"
            className={styles.link}
          >
            Get Your Free Quote →
          </a>
        </div>
      </Container>
    </section>
  );
}