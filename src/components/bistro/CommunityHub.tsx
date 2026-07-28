import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

export function CommunityHub() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
      
      {/* Outer container keeps overflow-hidden to crop anything that spills out */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-card/40 px-2 pt-2 shadow-lg">
        
        {/* Inner wrapper with negative bottom margin to hide the badge */}
        <div className="-mb-14"> 
          <div 
            className="elfsight-app-5363f10a-1ddd-4761-8e8f-5157a70e6e9d" 
            data-elfsight-app-lazy 
          />
        </div>

      </div>
    </section>
  );
}