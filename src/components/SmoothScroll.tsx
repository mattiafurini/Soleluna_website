"use client";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Native browser scrolling handles 120Hz touch and mousewheel with zero jitter,
  // zero frame-lag on fixed/sticky elements, and zero initial load bounce.
  return <>{children}</>;
}
