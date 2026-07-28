"use client";

import { useMemo, useState } from "react";
import { Flame } from "lucide-react";

type SpiceLevel = {
  level: number;
  label: string;
  icons: string;
  title: string;
  shu: string;
  pepper: string;
  description: string;
};

// Editable data object. Update pepper names, descriptions, and labels here.
export const SPICE_LEVELS: SpiceLevel[] = [
  {
    level: 0,
    label: "Easy",
    icons: "🐣",
    title: "Easy / No Heat",
    shu: "0 – 100 SHU",
    pepper: "Sweet Paprika & Chili Powder",
    description: "Classic Nashville flavor, no spice.",
  },
  {
    level: 1,
    label: "Medium",
    icons: "🌶️",
    title: "Medium",
    shu: "30,000 – 50,000 SHU",
    pepper: "Cayenne",
    description: "A subtle kick that builds slowly. Just enough to let you know it's there.",
  },
  {
    level: 2,
    label: "Hot",
    icons: "🌶️🔥",
    title: "Hot",
    shu: "100,000 – 200,000 SHU",
    pepper: "Habanero",
    description: "A lively, noticeable heat. Where the fun begins.",
  },
  {
    level: 3,
    label: "Loud",
    icons: "🌶️🔥‼️",
    title: "Loud!",
    shu: "1,000,000 – 1,200,000 SHU",
    pepper: "Ghost Pepper",
    description: "Serious heat with fruity undertones. Look alive!",
  },
  {
    level: 4,
    label: "XL",
    icons: "🌶️🔥‼️💀",
    title: "XL / Extra Loud!!",
    shu: "1,400,000 – 2,200,000 SHU",
    pepper: "Carolina Reaper",
    description: "Intense, day-ruining spice meant only for those who dare. Sign the waiver!",
  },
];

// Anchor colors for the heat gradient.
const HEAT_COLORS = [
  { level: 0, hex: "#10B981" }, // green
  { level: 1, hex: "#F6C400" }, // yellow
  { level: 2, hex: "#F59E0B" }, // orange
  { level: 3, hex: "#EF4444" }, // red
  { level: 4, hex: "#4D0000" }, // deep red
];

function hexToRgb(hex: string) {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex(r: number, g: number, b: number) {
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(Math.round(r))}${toHex(Math.round(g))}${toHex(Math.round(b))}`;
}

function interpolateColor(level: number) {
  const anchors = HEAT_COLORS;
  for (let i = 0; i < anchors.length - 1; i++) {
    const start = anchors[i];
    const end = anchors[i + 1];
    if (level >= start.level && level <= end.level) {
      const range = end.level - start.level;
      const progress = range === 0 ? 0 : (level - start.level) / range;
      const startRgb = hexToRgb(start.hex);
      const endRgb = hexToRgb(end.hex);
      return rgbToHex(
        startRgb.r + (endRgb.r - startRgb.r) * progress,
        startRgb.g + (endRgb.g - startRgb.g) * progress,
        startRgb.b + (endRgb.b - startRgb.b) * progress,
      );
    }
  }
  return anchors[anchors.length - 1].hex;
}

export function SpiceLevelExplorer() {
  const [level, setLevel] = useState(2);
  const active = SPICE_LEVELS[level];
  const accentColor = useMemo(() => interpolateColor(level), [level]);

  return (
    <section className="mx-auto mt-10 max-w-xl px-5">
      <div className="flex items-center gap-2">
        <Flame size={20} className="text-primary" />
        <h2 className="text-xl font-marker font-bold text-foreground">Spice Level Explorer</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Slide to find your perfect heat.
      </p>

      <div
        className="mt-4 overflow-hidden rounded-3xl border p-5 transition-colors duration-300"
        style={{
          borderColor: `${accentColor}40`,
          background: `linear-gradient(145deg, ${accentColor}15 0%, var(--card) 60%)`,
        }}
      >
        {/* Icon badge */}
        <div className="flex justify-center">
          <span
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-3xl transition-colors duration-300"
            style={{
              backgroundColor: `${accentColor}20`,
              boxShadow: `0 0 24px ${accentColor}30`,
            }}
            aria-hidden="true"
          >
            {active.icons}
          </span>
        </div>

        {/* Title & details */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold text-foreground">{active.title}</h3>
          <p className="mt-1 text-2xl font-black tracking-tight" style={{ color: accentColor }}>
            {active.shu}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            Featured Pepper
          </p>
          <p className="text-sm font-semibold text-foreground">{active.pepper}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {active.description}
          </p>
        </div>

        {/* Slider */}
        <div className="mt-6">
          <input
            type="range"
            min={0}
            max={4}
            step={1}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            aria-label="Spice level"
            aria-valuenow={level}
            aria-valuemax={4}
            aria-valuemin={0}
            className="spice-slider w-full"
            style={{ "--spice-accent": accentColor } as React.CSSProperties}
          />
          <div className="relative mt-2 h-6 w-full text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {SPICE_LEVELS.map((item) => (
              <span
                key={item.level}
                className="absolute top-0 left-0 -translate-x-1/2 transition-colors duration-300"
                style={{
                  left: `${item.level * 25}%`,
                  color: item.level === level ? accentColor : undefined,
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scoped slider styles */}
      <style>{`
        .spice-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            #10B981 0%,
            #F6C400 25%,
            #F59E0B 50%,
            #EF4444 75%,
            #2B0000 100%
          );
          outline: none;
          cursor: pointer;
        }
        .spice-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--spice-accent);
          border: 3px solid var(--card);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
          transition: transform 0.1s ease;
        }
        .spice-slider::-webkit-slider-thumb:active {
          transform: scale(1.15);
        }
        .spice-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--spice-accent);
          border: 3px solid var(--card);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
          transition: transform 0.1s ease;
        }
        .spice-slider::-moz-range-thumb:active {
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}
