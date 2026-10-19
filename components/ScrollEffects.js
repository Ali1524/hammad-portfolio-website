"use client";
import { useEffect } from "react";

// Adds the reveal animation, counters and skill bars when elements scroll into view.
export default function ScrollEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add("in");
          if (el.dataset.c) {
            const target = +el.dataset.c;
            const suffix = el.dataset.s || "";
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / 1600, 1);
              el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          el.querySelectorAll("[data-w]").forEach((b) => (b.style.width = b.dataset.w + "%"));
          io.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv,[data-c]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return null;
}
