import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen pt-16 md:pt-20 ${className}`}
    >
      {children}
    </motion.main>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 ${className}`}
    >
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
        <span className="text-gradient-amber">{title}</span>
      </h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
