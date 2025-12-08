import { motion } from "framer-motion";
import { Circle, Users, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TournamentData {
  id: string;
  name: string;
  playersLeft: number;
  totalEntries: number;
  currentLevel: string;
  nextBreak: string;
}

interface CashGameData {
  id: string;
  type: string;
  stakes: string;
  playersSeated: number;
  waitingListCount: number;
  status: "Active" | "Starting Soon";
}

// Mock data - will be replaced with Supabase real-time data
const mockTournament: TournamentData = {
  id: "1",
  name: "Friday Night Freezeout",
  playersLeft: 24,
  totalEntries: 68,
  currentLevel: "Level 12 - 800/1600",
  nextBreak: "15 min",
};

const mockCashGames: CashGameData[] = [
  {
    id: "1",
    type: "NLH",
    stakes: "2/5",
    playersSeated: 9,
    waitingListCount: 3,
    status: "Active",
  },
  {
    id: "2",
    type: "PLO",
    stakes: "5/5",
    playersSeated: 7,
    waitingListCount: 0,
    status: "Active",
  },
  {
    id: "3",
    type: "NLH",
    stakes: "1/2",
    playersSeated: 0,
    waitingListCount: 5,
    status: "Starting Soon",
  },
];

function LiveIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Circle className="w-3 h-3 fill-primary text-primary" />
        <div className="absolute inset-0 animate-pulse-ring">
          <Circle className="w-3 h-3 fill-primary/50 text-primary/50" />
        </div>
      </div>
      <span className="font-display text-xs uppercase tracking-widest text-primary font-semibold">
        Live
      </span>
    </div>
  );
}

function TournamentCard({ tournament }: { tournament: TournamentData }) {
  const progress = (tournament.playersLeft / tournament.totalEntries) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card variant="live" className="overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <LiveIndicator />
            <span className="text-xs text-muted-foreground font-medium">Tournament</span>
          </div>
          <CardTitle className="text-xl mt-2">{tournament.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Players Left</p>
              <p className="font-display text-2xl text-primary">{tournament.playersLeft}</p>
              <p className="text-xs text-muted-foreground">of {tournament.totalEntries} entries</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Current Level</p>
              <p className="font-body text-sm font-medium text-foreground">{tournament.currentLevel}</p>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-primary to-amber-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Next break in {tournament.nextBreak}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CashGameCard({ game, index }: { game: CashGameData; index: number }) {
  const isActive = game.status === "Active";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    >
      <Card variant={isActive ? "emerald" : "glass"} className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`px-3 py-1.5 rounded-lg font-display font-bold text-sm ${
              isActive 
                ? "bg-secondary/20 text-secondary" 
                : "bg-muted text-muted-foreground"
            }`}>
              {game.type}
            </div>
            <div>
              <p className="font-display text-lg">${game.stakes}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>{game.playersSeated} seated</span>
                {game.waitingListCount > 0 && (
                  <span className="text-primary">• {game.waitingListCount} waiting</span>
                )}
              </div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isActive 
              ? "bg-secondary/20 text-secondary" 
              : "bg-primary/20 text-primary"
          }`}>
            {game.status}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function LiveGamesWidget() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider">
          What's <span className="text-gradient-amber">Running</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Tournament Section */}
        <div className="space-y-4">
          <TournamentCard tournament={mockTournament} />
          <a href="#schedule" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            Full Schedule
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cash Games Section */}
        <div className="space-y-3">
          {mockCashGames.map((game, index) => (
            <CashGameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
