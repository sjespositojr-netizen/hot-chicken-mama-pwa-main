import { FEATURED } from "@/data/menu";

// Subtle dark espresso wood-grain texture built from layered CSS gradients.
const WOOD_TEXTURE =
  "repeating-linear-gradient(90deg, rgba(72,42,24,0.85) 0px, rgba(56,32,18,0.85) 3px, rgba(80,48,28,0.85) 6px, rgba(46,26,14,0.85) 9px), radial-gradient(ellipse at 30% 40%, rgba(120,70,35,0.35), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(30,16,8,0.6), transparent 55%)";

export function MenuCarousel() {
  return (
    <section id="menu" className="mt-10">
      <div className="mx-auto max-w-xl px-5">
        <h2 className="text-xl font-bold text-foreground">Featured Menu</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Swipe through our staples & specials.
        </p>
      </div>
      <div
        className="mt-4 flex gap-4 overflow-x-auto px-[7vw] pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {FEATURED.map((item) => (
          <article
            key={item.name}
            className="relative shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/40"
            style={{
              width: "86vw",
              maxWidth: "520px",
              scrollSnapAlign: "center",
              backgroundImage: WOOD_TEXTURE,
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="h-80 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                width={300}
                height={320}
                loading="lazy"
                className="block h-full w-full object-cover"
              />
            </div>
            {/* Charcoal overlay to keep text crisp over the wood grain */}
            <div
              className="p-5"
              style={{ backgroundColor: "rgba(17, 24, 39, 0.85)" }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {item.tag}
              </span>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h4 className="truncate text-base font-bold text-white">{item.name}</h4>
                <span className="text-base font-black text-primary">{item.price}</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                {item.description}
              </p>
              <a
                href={item.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-deeplink="toast"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(227,28,35,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,28,35,0.8)] active:scale-[0.98]"
              >
                Order Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
