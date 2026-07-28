import { Instagram } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

export function CommunityHub() {
  return (
    <section id="social" className="mx-auto mt-10 max-w-xl px-5">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-bold text-foreground">From the Coop</h2>
        <a
          href={RESTAURANT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-primary transition active:scale-[0.98]"
        >
          <Instagram size={18} />
        </a>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-dashed border-white/15 bg-card/40 p-4">
        {/* SOCIAL_EMBED_PLACEHOLDER */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02]"
          />
        ))}
        <p className="col-span-3 mt-2 text-center text-xs text-muted-foreground">
          Connect your live feed widget here.
        </p>
      </div>
    </section>
  );
}
