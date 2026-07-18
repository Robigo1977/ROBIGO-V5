import type { Transition } from "framer-motion";

export const duration = {
  fast: 0.25,
  normal: 0.45,
  slow: 0.7,
} as const;

export const ease = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  fast: {
    duration: duration.fast,
    ease,
  },

  normal: {
    duration: duration.normal,
    ease,
  },

  slow: {
    duration: duration.slow,
    ease,
  },
} satisfies Record<string, Transition>;