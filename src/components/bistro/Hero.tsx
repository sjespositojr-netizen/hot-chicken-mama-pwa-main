import { RESTAURANT } from "@/data/menu";

export function Hero() {
  return (
    <section id="home" className="mx-auto mt-6 max-w-xl px-5">
      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <img
          src="/photos/lineup-1.jpg"
          alt="Hot Chicken Mama menu lineup with sandwiches and drinks"
          width={800}
          height={400}
          className="h-[250px] w-full object-cover"
          style={{ filter: "brightness(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h2 className="text-2xl font-bold leading-tight text-foreground">The Squawk of the Town!
</h2>
          <p className="mt-1 text-sm text-muted-foreground"><a 
  href="https://www.hotchickenmama.com/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="underline text-amber-500 font-semibold hover:text-amber-400"
>{RESTAURANT.tagline}</a></p>
        </div>
      </div>
    </section>
  );
}
