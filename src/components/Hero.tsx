import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-poker-room.jpg";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="House Poker Club - Luxury poker room atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Logo/Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary to-amber-600 shadow-2xl shadow-primary/30 mb-4"
            >
              <span className="font-display text-5xl md:text-7xl font-bold text-primary-foreground">
                H
              </span>
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider">
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="text-gradient-amber">House</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Your exclusive poker destination. Premium cash games, weekly tournaments, 
            and an atmosphere crafted for players who appreciate the finer side of the game.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#live">See What's Running</a>
            </Button>
            <Button variant="glass" size="lg" onClick={() => navigate("/schedule")}>
              View Schedule
            </Button>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
