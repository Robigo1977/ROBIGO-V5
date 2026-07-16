import { useState } from "react";

import type { FAQItem as FAQItemType } from "./faq.data";

import styles from "./FAQ.module.css";

interface FAQItemProps {
  item: FAQItemType;
}

export default function FAQItem({
  item,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  const buttonId = `faq-button-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <article className={styles.item}>
      <button
        id={buttonId}
        className={styles.question}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{item.question}</span>

        <span
          className={`${styles.icon} ${
            open ? styles.iconOpen : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className={`${styles.answerWrapper} ${
          open ? styles.answerOpen : ""
        }`}
        role="region"
        aria-labelledby={buttonId}
      >
        <p className={styles.answer}>
          {item.answer}
        </p>
      </div>
    </article>
  );
}