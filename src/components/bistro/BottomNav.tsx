"use client";
import { useEffect, useState } from "react";
import { Home, UtensilsCrossed, Flame, Users, MapPin } from "lucide-react";

const ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "menu", label: "Menu", icon: UtensilsCrossed },
  { id: "guide", label: "Guide", icon: Flame },
  { id: "social", label: "Social", icon: Users },
  { id: "location", label: "Location", icon: MapPin },
] as const;

export function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handler = () => {
      // 1. Force "location" active when hitting the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection("location");
        return;
      }

      // 2. Normal scroll-spy logic for all other sections
      let current = "home";
      for (const item of ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - 120 <= 0) current = item.id;
      }
      setActiveSection(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-background/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="mx-auto flex max-w-xl items-stretch justify-around px-2 py-2">
        {ITEMS.map((it) => {
          const Icon = it.icon;
          const active = activeSection === it.id;
          return (
            <li key={it.id} className="flex-1">
              <button
                type="button"
                onClick={() => goToSection(it.id)}
                className={`flex w-full flex-col items-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium transition ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
                <span>{it.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}