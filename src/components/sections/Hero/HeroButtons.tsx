import Button from "../../ui/Button";
import { site } from "../../../config/site";

import styles from "./Hero.module.css";

export default function HeroButtons() {
  return (
    <nav
      className={styles.actions}
      aria-label="Hero call to actions"
    >
      <Button
        href={site.whatsappMessage()}
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {site.cta.primary}
      </Button>

      <Button
        href={site.tel()}
        variant="secondary"
        size="lg"
      >
        {site.cta.secondary}
      </Button>
    </nav>
  );
}