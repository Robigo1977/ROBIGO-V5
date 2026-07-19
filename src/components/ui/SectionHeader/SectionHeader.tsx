import styles from "./SectionHeader.module.css";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <header
      className={`${styles.header} ${
        align === "left" ? styles.left : styles.center
      }`}
    >
      {badge && (
        <span className={styles.badge}>
          {badge}
        </span>
      )}

      <h2 className={styles.title}>
        {title}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </header>
  );
}