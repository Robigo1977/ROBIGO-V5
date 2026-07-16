import Button from "../../ui/Button";
import { site } from "../../../config/site";

import styles from "./Hero.module.css";

export default function HeroButtons() {
  return (
    <div className={styles.actions}>
      <Button
        href={site.whatsappMessage()}
        target="_blank"
        rel="noopener noreferrer"
      >
        {site.cta.primary}
      </Button>

      <Button
        href={site.tel()}
        variant="secondary"
      >
        {site.cta.secondary}
      </Button>
    </div>
  );
}