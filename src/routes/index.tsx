import { createFileRoute } from "@tanstack/react-router";
import { TopOrderBar } from "@/components/bistro/TopOrderBar";
import { LogoCard } from "@/components/bistro/LogoCard";
import { BrandHeader } from "@/components/bistro/BrandHeader";
import { ContactSubheader } from "@/components/bistro/ContactSubheader";
import { Hero } from "@/components/bistro/Hero";
import { MenuCarousel } from "@/components/bistro/MenuCarousel";
import { FlavorGuide } from "@/components/bistro/FlavorGuide";
import { LoyaltyCard } from "@/components/bistro/LoyaltyCard";
import { CommunityHub } from "@/components/bistro/CommunityHub";
import LocationMap from "@/components/bistro/LocationMap";
import { BottomNav } from "@/components/bistro/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Chicken Mama - Nashville Hot, New York Loud!" },
      {
        name: "description",
        content:
          "Hand-battered Nashville Style fried chicken, Mac and Cheese and Lemonade. Order online and pick up at the drive thru.",
      },
      { property: "og:title", content: "Hot Chicken mama" },
      {
        property: "og:description",
        content:
          "Hand-battered Nashville Style fried chicken, Mac and Cheese and Lemonade. Order online and pick up at the drive thru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopOrderBar />
      <main className="pt-28 sm:pt-24 pb-28">
        <LogoCard />
        {/* <BrandHeader /> */}
        <ContactSubheader />
        <Hero />
        <MenuCarousel />
        <FlavorGuide />
        <LoyaltyCard />
        <CommunityHub />
        <LocationMap />
      </main>
      <BottomNav />
    </div>
  );
}
