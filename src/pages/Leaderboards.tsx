import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { PageLayout, Section, PageHeader } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Medal } from "lucide-react";

type LeaderboardCategory = "tournament" | "cash";

interface LeaderboardEntry {
  id: string;
  rank: number;
  playerName: string;
  points: number;
  category: LeaderboardCategory;
}

// Mock data - will be replaced with Supabase data
const mockLeaderboard: LeaderboardEntry[] = [
  { id: "1", rank: 1, playerName: "Mike \"The Shark\" Torres", points: 2450, category: "tournament" },
  { id: "2", rank: 2, playerName: "Sarah Chen", points: 2180, category: "tournament" },
  { id: "3", rank: 3, playerName: "David \"Ice\" Kowalski", points: 1920, category: "tournament" },
  { id: "4", rank: 4, playerName: "Jennifer Williams", points: 1650, category: "tournament" },
  { id: "5", rank: 5, playerName: "Robert Kim", points: 1480, category: "tournament" },
  { id: "6", rank: 6, playerName: "Carlos Martinez", points: 1320, category: "tournament" },
  { id: "7", rank: 7, playerName: "Emily Johnson", points: 1150, category: "tournament" },
  { id: "8", rank: 8, playerName: "Alex Thompson", points: 980, category: "tournament" },
  { id: "1c", rank: 1, playerName: "James \"Big Stack\" Nguyen", points: 3200, category: "cash" },
  { id: "2c", rank: 2, playerName: "Michelle Adams", points: 2850, category: "cash" },
  { id: "3c", rank: 3, playerName: "Chris \"The Rock\" Davis", points: 2400, category: "cash" },
  { id: "4c", rank: 4, playerName: "Lisa Park", points: 2100, category: "cash" },
  { id: "5c", rank: 5, playerName: "Marcus Brown", points: 1850, category: "cash" },
];

function getRankVariant(rank: number): "rank1" | "rank2" | "rank3" | "glass" {
  if (rank === 1) return "rank1";
  if (rank === 2) return "rank2";
  if (rank === 3) return "rank3";
  return "glass";
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-600 shadow-lg shadow-primary/30">
        <Trophy className="w-6 h-6 text-primary-foreground" />
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-lg">
        <Medal className="w-6 h-6 text-zinc-800" />
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg">
        <Medal className="w-6 h-6 text-amber-100" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
      <span className="font-display text-lg font-bold text-muted-foreground">#{rank}</span>
    </div>
  );
}

function PlayerCard({ entry, index }: { entry: LeaderboardEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card variant={getRankVariant(entry.rank)} className="hover:scale-[1.01] transition-transform">
        <CardContent className="p-4 md:p-5">
          <div className="flex items-center gap-4">
            <RankBadge rank={entry.rank} />
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg md:text-xl font-semibold truncate">
                {entry.playerName}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <span>Monthly Points</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                {entry.points.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Points</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function DesktopTable({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:block"
    >
      <Card variant="glass" className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-display text-sm uppercase tracking-wider text-muted-foreground">Rank</th>
              <th className="text-left p-4 font-display text-sm uppercase tracking-wider text-muted-foreground">Player</th>
              <th className="text-right p-4 font-display text-sm uppercase tracking-wider text-muted-foreground">Points</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <motion.tr
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${
                  entry.rank <= 3 ? "bg-muted/20" : ""
                }`}
              >
                <td className="p-4">
                  <RankBadge rank={entry.rank} />
                </td>
                <td className="p-4">
                  <span className={`font-display text-lg ${entry.rank === 1 ? "text-primary" : ""}`}>
                    {entry.playerName}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <span className={`font-display text-2xl font-bold ${entry.rank === 1 ? "text-primary" : ""}`}>
                    {entry.points.toLocaleString()}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </Card>
    </motion.div>
  );
}

const Leaderboards = () => {
  const [activeCategory, setActiveCategory] = useState<LeaderboardCategory>("tournament");

  const filteredEntries = mockLeaderboard
    .filter((entry) => entry.category === activeCategory)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageLayout>
        <Section>
          <PageHeader
            title="Leaderboards"
            subtitle="Monthly point standings. Compete for glory and exclusive rewards."
          />

          {/* Category Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex p-1 rounded-xl glass">
              <Button
                variant={activeCategory === "tournament" ? "hero" : "ghost"}
                size="lg"
                onClick={() => setActiveCategory("tournament")}
                className="font-display"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Tournaments
              </Button>
              <Button
                variant={activeCategory === "cash" ? "hero" : "ghost"}
                size="lg"
                onClick={() => setActiveCategory("cash")}
                className="font-display"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Cash Games
              </Button>
            </div>
          </motion.div>

          {/* Desktop Table View */}
          <DesktopTable entries={filteredEntries} />

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-3">
            {filteredEntries.map((entry, index) => (
              <PlayerCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>

          {/* Month indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-10"
          >
            December 2025 standings • Updated daily
          </motion.p>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Leaderboards;
