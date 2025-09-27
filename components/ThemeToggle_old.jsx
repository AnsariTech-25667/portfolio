"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggle = () => {
    const html = document.documentElement;
    const toDark = !html.classList.contains("dark");
    html.classList.toggle("dark", toDark);
    try { localStorage.setItem("theme", toDark ? "dark" : "light"); } catch {}
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border px-3 py-1 text-sm hover:shadow-sm bg-panel"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      🌓 Toggle theme
    </button>
  );
}
