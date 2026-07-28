import { Sparkles, Banknote } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

export function LoyaltyCard() {
  return (
    <section className="mx-auto mt-10 max-w-xl px-5">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-6">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
            <Sparkles size={12} />
            Earn & Redeem Points
          </span>
          <h3 className="mt-4 flex items-center gap-2 text-xl font-bold text-foreground">
            <Banknote size={22} className="text-primary" />
            BuckBuckBucks 💸
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Join the Buckbuckbucks 💸 Rewards program and earn points on every Sando, Hot dog, and Strawberry Lemonade. Sign up now, or lookup your rewards to see how many you've already earned!
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <a
              href={RESTAURANT.loyaltyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_rgba(227,28,35,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,28,35,0.8)] active:scale-[0.98]"
            >
              Join Rewards
            </a>
            <a
              href={RESTAURANT.rewardsLookupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#FF8A2B] px-6 py-3 text-sm font-semibold text-[#111827] shadow-[0_0_20px_rgba(255,138,43,0.45)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,138,43,0.8)] active:scale-[0.98]"
            >
              Lookup Rewards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
