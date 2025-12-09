import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            <h1 className="font-display text-8xl md:text-9xl font-bold text-primary">404</h1>
            <p className="font-display text-2xl md:text-3xl uppercase tracking-wide text-muted-foreground">
              Hand Not Found
            </p>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Looks like you've folded into uncharted territory. 
            This page doesn't exist at House.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to the Table
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
