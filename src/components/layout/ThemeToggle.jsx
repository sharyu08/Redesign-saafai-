"use client";

import { useEffect, useState } from "react";
import { SunMedium, MoonStar, Palette } from "lucide-react";

const THEMES = [
  { id: "light", label: "Light", icon: SunMedium },
  { id: "dark", label: "Dark", icon: MoonStar },
  { id: "civic", label: "Civic", icon: Palette },
  { id: "gradient", label: "Gradient", icon: Palette },
  { id: "glass", label: "Glass", icon: Palette },
];

const THEME_CLASS_MAP = {
  light: "",
  dark: "theme-dark",
  civic: "theme-civic",
  gradient: "theme-gradient",
  glass: "theme-glass",
};

function applyThemeClass(themeId) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const allClasses = Object.values(THEME_CLASS_MAP).filter(Boolean);

  allClasses.forEach((cls) => root.classList.remove(cls));

  const cls = THEME_CLASS_MAP[themeId] || "";
  if (cls) {
    root.classList.add(cls);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("safai-theme");
    if (stored && THEME_CLASS_MAP[stored] !== undefined) {
      setTheme(stored);
      applyThemeClass(stored);
    }
  }, []);

  const currentIndex = THEMES.findIndex((t) => t.id === theme) ?? 0;
  const Current = THEMES[currentIndex] || THEMES[0];

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const next = THEMES[nextIndex];
    setTheme(next.id);
    applyThemeClass(next.id);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("safai-theme", next.id);
    }
  };

  const Icon = Current.icon;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition"
      title={`Theme: ${Current.label} (click to change)`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
        <Icon className="h-3.5 w-3.5 text-[var(--primary)]" />
      </span>
      <span className="hidden sm:inline">Theme: {Current.label}</span>
    </button>
  );
}


