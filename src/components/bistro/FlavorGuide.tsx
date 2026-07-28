import { SpiceLevelExplorer } from "./SpiceLevelExplorer";
import { Drumstick } from "lucide-react";

export function FlavorGuide() {
  return (
    <section id="guide" className="pt-4">
      <SpiceLevelExplorer />

      <div className="mx-auto mt-8 max-w-xl px-5">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-card p-6">
          <div className="flex items-center gap-2 text-primary">
            <Drumstick size={20} />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              House Craft
            </span>
          </div>
          <h3 className="mt-3 text-xl font-bold text-foreground">
            A Style to Call Our Own
          </h3>
          <p className="mt-1 text-sm font-semibold text-accent">
            Nashville Hot, New York Loud ‼️
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Drawing our inspiration from the innovators, Hot Chicken Mama takes what makes Nasville-Style Chicken special and turns it up to <b>"Loud!"</b><br /><br />With 5 distinct heat levels, and our unique, chef-driven Sandwich, Snack Wrap and Hot Dog styles, we've got just the something for everyone. <br /><br />Nashville Roots, New York Hot Chicken: That's Hot Chicken Mama 🐓<br />
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { emoji: "🍗", label: "Buttermilk-marinated, hand-breaded crispy perfection" },
              { emoji: "🌶️", label: "House-made savory spice rubs" },
              { emoji: "🔥", label: "Choose your heat!" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground"
              >
                <span aria-hidden="true">{b.emoji}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
