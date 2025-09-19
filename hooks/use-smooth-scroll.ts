import { useCallback } from "react";

export default function useSmoothScroll() {
  return useCallback((targetId: string, duration?: number, offset = 20) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - offset;
    const distance = end - start;
    let startTime: number | null = null;

    const goingDown = distance > 0;

    let effectiveDuration = duration ?? Math.abs(distance) * 0.5;

    if (goingDown) {
      effectiveDuration = Math.min(Math.max(effectiveDuration, 800), 1200);
    } else {
      effectiveDuration = Math.min(Math.max(effectiveDuration, 500), 1200);
    }

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / effectiveDuration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * eased);

      if (elapsed < effectiveDuration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, []);
}
