import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LiveGamesWidget } from "@/components/LiveGamesWidget";
import { PromotionsCarousel } from "@/components/PromotionsCarousel";
import { Section } from "@/components/PageLayout";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <Section id="live">
        <LiveGamesWidget />
      </Section>

      <PromotionsCarousel />

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary-foreground">H</span>
              </div>
              <span className="font-display text-xl font-bold tracking-wider">HOUSE</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} House Poker Club. All rights reserved.
              <br />
              <span className="text-xs">Play responsibly. Must be 21+ to participate.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
