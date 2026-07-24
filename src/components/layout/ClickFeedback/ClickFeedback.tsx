import { useEffect } from "react";

let audioContext: AudioContext | null = null;

function playClickSound() {
  const AudioContextClass = window.AudioContext;

  if (!AudioContextClass) {
    return;
  }

  audioContext ??= new AudioContextClass();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(540, now);
  oscillator.frequency.exponentialRampToValueAtTime(680, now + 0.045);

  gain.gain.setValueAtTime(0.018, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start(now);
  oscillator.stop(now + 0.055);
}

export default function ClickFeedback() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactive = target.closest(
        "a, button, [role='button']",
      );

      if (
        !interactive ||
        interactive.hasAttribute("data-no-click-sound") ||
        interactive.getAttribute("aria-disabled") === "true"
      ) {
        return;
      }

      playClickSound();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
