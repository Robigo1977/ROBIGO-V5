import type { ReactNode } from "react";
import Container from "../Container";
import styles from "./Section.module.css";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "light" | "dark";
}

export default function Section({
  children,
  id,
  className = "",
  background = "default",
}: SectionProps) {
  const classes = [
    styles.section,
    styles[background],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <Container>{children}</Container>
    </section>
  );
}