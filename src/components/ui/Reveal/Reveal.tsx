import type { ReactNode } from "react";

import useReveal from "../../../hooks/useReveal";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export default function Reveal({
  children,
  className = "",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[
        styles.reveal,
        visible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}