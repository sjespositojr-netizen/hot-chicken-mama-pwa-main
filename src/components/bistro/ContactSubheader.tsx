"use client";
import { useState } from "react";
import { MapPin, Phone, Check } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

export function ContactSubheader() {
  const [copied, setCopied] = useState(false);
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    RESTAURANT.address,
  )}`;

  const handleAddressClick = (e: React.MouseEvent) => {
    // Copy to clipboard as a fallback affordance; still allow default navigation.
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(RESTAURANT.address).catch(() => {});
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
    // Let the link open Maps natively.
    void e;
  };

  return (
    <div className="mx-auto mt-5 grid max-w-xl grid-cols-2 gap-3 px-5">
      <a
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleAddressClick}
        className="group relative flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-card/60 px-4 py-3 text-left transition active:scale-[0.98]"
      >
        <MapPin size={20} className="shrink-0 text-primary" />
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Visit</p>
          <p className="truncate text-sm font-medium text-foreground">{RESTAURANT.address}</p>
        </div>
        {copied && (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-primary px-2 py-1 text-[11px] font-semibold text-primary-foreground shadow-lg">
            <Check size={12} className="mr-1 inline" />
            Copied to Clipboard!
          </span>
        )}
      </a>
      <a
        href={`tel:${RESTAURANT.phoneTel}`}
        className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-card/60 px-4 py-3 transition active:scale-[0.98]"
      >
        <Phone size={20} className="shrink-0 text-primary" />
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Call</p>
          <p className="truncate text-sm font-medium text-foreground">{RESTAURANT.phoneDisplay}</p>
        </div>
      </a>
    </div>
  );
}
