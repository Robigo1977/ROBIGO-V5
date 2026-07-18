import type { Variants } from "framer-motion";
import { transitions } from "./transitions";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};