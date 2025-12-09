import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { PageLayout, Section, PageHeader } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar } from "lucide-react";

interface Winner {
  id: string;
  playerName: string;
  eventName: string;
  winDate: string;
  imageUrl?: string;
}

// Mock data - will be replaced with Supabase data
const mockWinners: Winner[] = [
  {
    id: "1",
    playerName: "Mike Torres",
    eventName: "December Main Event",
    winDate: "2025-12-07",
    imageUrl: "https://www.cardplayer.com/wp-content/uploads/2025/11/Hubbard.jpeg",
  },
  {
    id: "2",
    playerName: "Sarah Chen",
    eventName: "Black Friday Special",
    winDate: "2025-11-29",
    imageUrl: "https://s.pnimg.net/YfQn0bctsnE4Z1v0ZVhFxcatBiwWf4GCsJfv9AdyCNA/pr:article-leading-desktop-2x/aHR0cHM6Ly9wbmlt/Zy5uZXQvdy9hcnRp/Y2xlcy8wLzY3Yi80/NWMwMWRkZTNiLmpw/Zw.webp",
  },
  {
    id: "3",
    playerName: "David Kowalski",
    eventName: "Thanksgiving Turbo",
    winDate: "2025-11-28",
    imageUrl: "https://s.pnimg.net/U4Z680kZIET7PW3jdyTowO8_EQNv84DJYJkl_de1Y3Y/pr:article-leading-desktop-2x/aHR0cHM6Ly9wbmlt/Zy5uZXQvdy9hcnRp/Y2xlcy8wLzY3YS9i/N2YxOTk1YzNmLmpw/Zw.webp",
  },
  {
    id: "4",
    playerName: "Jennifer Williams",
    eventName: "November Championship",
    winDate: "2025-11-15",
    imageUrl: "https://s.pnimg.net/mC8XmYLtFk0G_uXjEhDuEsvlPTSdnYXnlyMh_5m6i8s/pr:article-leading-desktop-2x/aHR0cHM6Ly9wbmlt/Zy5uZXQvdy9hcnRp/Y2xlcy8wLzY1ZC80/OTZiNjNjZjQyLmpw/Zw.webp",
  },
  {
    id: "5",
    playerName: "Robert Kim",
    eventName: "Halloween Bounty",
    winDate: "2025-10-31",
    imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/584918661_18118642816546193_2335337003297742707_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc2OTQ4ODEyOTAxNjA4MjU0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0mYCZF2mzcYQ7kNvwEZmHs3&_nc_oc=AdmLgq8ZzFex-JSdvJ1ByA2uc3SvRmSJrIZvVNZO4n9cxBeKBwuChSHKj2K9e6Nhvio&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=cHfOtxi75GAXnzhI2mYFUg&oh=00_AfkWAb-YmCevXSyuoQow7O0DhrU9tQnO2eRfW1Yh3i8x7Q&oe=693DEBB5",
  },
  {
    id: "6",
    playerName: "Carlos Martinez",
    eventName: "October Classic",
    winDate: "2025-10-20",
    imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/583734819_18118654804546193_8371827879785143205_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzc2OTYyMTUxMzk5ODQ5ODI5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=AWv2uvT5Ce8Q7kNvwFKLUhQ&_nc_oc=Adm2CeVm3whL4B0wScc7RMJb7_OHfpOdpnkJsV-ejx9wMuXYX43cE_uQTZrzDHo9Xgc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Z12TuRHMFgWk9AKzB9SjGA&oh=00_Afk_MYxVGihPAjS_MOzumoesm7sh063tOyAIBiBTm94LFw&oe=693DEA85",
  },
];

function WinnerCard({ winner, index }: { winner: Winner; index: number }) {
  const [imageError, setImageError] = React.useState(false);
  
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
        {/* Winner photo */}
        <div className="aspect-[4/3] bg-gradient-to-br from-muted to-background flex items-center justify-center relative overflow-hidden">
          {winner.imageUrl && !imageError ? (
            <>
              <img 
                src={winner.imageUrl} 
                alt={winner.playerName}
                className="w-full h-full object-cover absolute inset-0"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
              <Trophy className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary/40 transition-colors z-20" />
            </>
          )}
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
                <p className="font-display text-2xl font-bold text-primary">€250,000+</p>
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