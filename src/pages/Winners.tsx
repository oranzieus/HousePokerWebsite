import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { PageLayout, Section, PageHeader } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar } from "lucide-react";

interface Winner {
  id: string;
  playerName: string;
  eventName: string;
  prizeAmount: string;
  winDate: string;
  imageUrl?: string;
}

// Mock data - will be replaced with Supabase data
const mockWinners: Winner[] = [
  {
    id: "1",
    playerName: "Mike Torres",
    eventName: "December Main Event",
    prizeAmount: "$15,000",
    winDate: "2025-12-07",
  },
  {
    id: "2",
    playerName: "Sarah Chen",
    eventName: "Black Friday Special",
    prizeAmount: "$8,500",
    winDate: "2025-11-29",
  },
  {
    id: "3",
    playerName: "David Kowalski",
    eventName: "Thanksgiving Turbo",
    prizeAmount: "$5,200",
    winDate: "2025-11-28",
  },
  {
    id: "4",
    playerName: "Jennifer Williams",
    eventName: "November Championship",
    prizeAmount: "$12,000",
    winDate: "2025-11-15",
  },
  {
    id: "5",
    playerName: "Robert Kim",
    eventName: "Halloween Bounty",
    prizeAmount: "$6,800",
    winDate: "2025-10-31",
  },
  {
    id: "6",
    playerName: "Carlos Martinez",
    eventName: "October Classic",
    prizeAmount: "$9,500",
    winDate: "2025-10-20",
  },
];

function WinnerCard({ winner, index }: { winner: Winner; index: number }) {
  const formattedDate = new Date(winner.winDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card variant="glass" className="overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:glow-amber">
        {/* Placeholder for winner photo */}
        <div className="aspect-[4/3] bg-gradient-to-br from-muted to-background flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
          <Trophy className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary/40 transition-colors" />
          {/* Prize amount overlay */}
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1.5 rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
              {winner.prizeAmount}
            </span>
          </div>
        </div>
        
        <CardContent className="p-5 space-y-3">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
              {winner.playerName}
            </h3>
            <p className="text-sm text-muted-foreground">{winner.eventName}</p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const Winners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageLayout>
        <Section>
          <PageHeader
            title="Hall of Fame"
            subtitle="Celebrating our champions. Every victory tells a story."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockWinners.map((winner, index) => (
              <WinnerCard key={winner.id} winner={winner} index={index} />
            ))}
          </div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
              <Trophy className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-primary">$250,000+</p>
                <p className="text-sm text-muted-foreground">Total prizes awarded this year</p>
              </div>
            </div>
          </motion.div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Winners;
