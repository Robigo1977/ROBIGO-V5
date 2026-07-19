import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Card.module.css";

type Variant = "default" | "soft" | "glass";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}