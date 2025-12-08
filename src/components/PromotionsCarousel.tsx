import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Trophy, Star } from "lucide-react";

interface Promotion {
  id: string;
  title: string;
  description: string;
  icon: "gift" | "trophy" | "star";
  highlight?: boolean;
}

const promotions: Promotion[] = [
  {
    id: "1",
    title: "High Hand Bonus",
    description: "Win $500 for the highest hand every Friday & Saturday night.",
    icon: "trophy",
    highlight: true,
  },
  {
    id: "2",
    title: "New Player Bonus",
    description: "First-time players receive a free seat in our Sunday $50 tournament.",
    icon: "gift",
  },
  {
    id: "3",
    title: "Leaderboard Points",
    description: "Earn 2x points on all cash games during happy hour (4-7pm).",
    icon: "star",
  },
];

const icons = {
  gift: Gift,
  trophy: Trophy,
  star: Star,
};

export function PromotionsCarousel() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between"
        >
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider">
            <span className="text-gradient-amber">Promotions</span> & Events
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-4 md:px-8 min-w-max">
          {promotions.map((promo, index) => {
            const Icon = icons[promo.icon];
            return (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-80 flex-shrink-0"
              >
                <Card
                  variant={promo.highlight ? "live" : "glass"}
                  className="h-full hover:scale-[1.02] transition-transform duration-300"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                      promo.highlight 
                        ? "bg-primary/20 text-primary" 
                        : "bg-secondary/20 text-secondary"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl uppercase tracking-wide">
                        {promo.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {promo.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
