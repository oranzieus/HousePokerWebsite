import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { PageLayout, Section, PageHeader } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Euro, Users, RefreshCw, Timer } from "lucide-react";

interface ScheduleItem {
  id: string;
  dayOfWeek: string;
  tournamentName: string;
  buyIn: string;
  startTime: string;
  guaranteed?: string;
  reEntry?: string;
  levelTime: string;
}

// Mock data - will be replaced with Supabase data
const weeklySchedule: ScheduleItem[] = [
  { id: "1", dayOfWeek: "Monday", tournamentName: "Monday Night Madness", buyIn: "€50+€10", startTime: "7:00 PM", guaranteed: "€1,000", reEntry: "Up to Level 10", levelTime: "15 min" },
  { id: "2", dayOfWeek: "Tuesday", tournamentName: "Turbo Tuesday", buyIn: "€30+€5", startTime: "7:30 PM", reEntry: "Up to Level 10", levelTime: "15 min" },
  { id: "3", dayOfWeek: "Wednesday", tournamentName: "Bounty Hunter", buyIn: "€75+€25", startTime: "7:00 PM", guaranteed: "€2,000", reEntry: "Up to Level 10", levelTime: "20 min" },
  { id: "4", dayOfWeek: "Thursday", tournamentName: "Deepstack Thursday", buyIn: "€100+€15", startTime: "6:30 PM", guaranteed: "€3,000", reEntry: "Up to Level 10", levelTime: "20 min" },
  { id: "5", dayOfWeek: "Friday", tournamentName: "Friday Night Freezeout", buyIn: "€150+€20", startTime: "7:00 PM", guaranteed: "€5,000", levelTime: "20 min" },
  { id: "6", dayOfWeek: "Saturday", tournamentName: "Weekend Warrior", buyIn: "€200+€25", startTime: "2:00 PM", guaranteed: "€7,500", reEntry: "Up to Level 10", levelTime: "20 min" },
  { id: "7", dayOfWeek: "Saturday", tournamentName: "Night Owl Special", buyIn: "€75+€10", startTime: "9:00 PM", guaranteed: "€2,500", reEntry: "Up to Level 10", levelTime: "15 min" },
  { id: "8", dayOfWeek: "Sunday", tournamentName: "Sunday Showdown", buyIn: "€250+€30", startTime: "3:00 PM", guaranteed: "€10,000", reEntry: "Up to Level 10", levelTime: "20 min" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function ScheduleCard({ item, index }: { item: ScheduleItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card variant="glass" className="hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                {item.tournamentName}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{item.startTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Euro className="w-4 h-4" />
                  <span>Buy-in: {item.buyIn}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Timer className="w-4 h-4" />
                  <span>{item.levelTime} levels</span>
                </div>
                {item.reEntry && (
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4" />
                    <span>Re-Entry: {item.reEntry}</span>
                  </div>
                )}
              </div>
            </div>
            
            {item.guaranteed && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <Users className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-display text-lg font-bold text-primary">{item.guaranteed}</p>
                  <p className="text-xs text-muted-foreground">Guaranteed</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageLayout>
        <Section>
          <PageHeader
            title="Weekly Schedule"
            subtitle="Find your game. Every day brings a new opportunity to play."
          />

          <div className="space-y-10">
            {days.map((day, dayIndex) => {
              const dayEvents = weeklySchedule.filter((item) => item.dayOfWeek === day);
              if (dayEvents.length === 0) return null;

              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: dayIndex * 0.1 }}
                >
                  <Card variant="default" className="overflow-hidden">
                    <CardHeader className="bg-muted/30 border-b border-border">
                      <CardTitle className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <span className="font-display text-sm font-bold text-secondary">
                            {day.slice(0, 2).toUpperCase()}
                          </span>
                        </span>
                        <span className="text-gradient-amber">{day}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                      {dayEvents.map((item, index) => (
                        <ScheduleCard key={item.id} item={item} index={index} />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Cash Games Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Card variant="emerald" className="p-6">
              <div className="text-center space-y-3">
                <h3 className="font-display text-xl uppercase tracking-wide text-secondary">Cash Games</h3>
                <p className="text-muted-foreground">
                  NLH & PLO cash games run daily from <span className="text-foreground font-semibold">12 PM - 4 AM</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Stakes: €1/2, €2/5, €5/5 PLO • Higher stakes on request
                </p>
              </div>
            </Card>
          </motion.div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Schedule;