import { useEffect, useRef, type ReactNode } from "react";

type Direction = "left" | "right" | "up";

interface RevealProps {
  /** Images use "left" (enter from the left), text uses "right" (enter from the right). */
  direction?: Direction;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  children: ReactNode;
}

const directionClass: Record<Direction, string> = {
  left: "reveal-from-left",
  right: "reveal-from-right",
  up: "reveal-up",
};

export function Reveal({ direction = "up", delay = 0, className = "", children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass[direction]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
