import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { PageLayout, Section, PageHeader } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Spade, Heart, Diamond, Club } from "lucide-react";

interface GalleryImage {
  id: string;
  imageUrl?: string;
  caption?: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

// Mock data - will be replaced with Supabase data
const mockGallery: GalleryImage[] = [
  { id: "1", caption: "Friday Night Action", aspectRatio: "landscape" },
  { id: "2", caption: "Tournament Final Table", aspectRatio: "portrait" },
  { id: "3", caption: "The Lounge", aspectRatio: "square" },
  { id: "4", caption: "High Stakes Corner", aspectRatio: "landscape" },
  { id: "5", caption: "Chip Stack Aesthetics", aspectRatio: "portrait" },
  { id: "6", caption: "Weekend Warriors", aspectRatio: "square" },
  { id: "7", caption: "All-In Moment", aspectRatio: "landscape" },
  { id: "8", caption: "VIP Room", aspectRatio: "portrait" },
];

const suitIcons = [Spade, Heart, Diamond, Club];

function GalleryCard({ image, index }: { image: GalleryImage; index: number }) {
  const SuitIcon = suitIcons[index % 4];
  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  }[image.aspectRatio];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="break-inside-avoid mb-4"
    >
      <Card variant="glass" className="overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-300">
        <div className={`${aspectClass} bg-gradient-to-br from-muted to-background relative overflow-hidden`}>
          {/* Placeholder with suit icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <SuitIcon className={`w-12 h-12 ${
              index % 4 === 1 || index % 4 === 2 
                ? "text-destructive/20" 
                : "text-muted-foreground/20"
            } group-hover:scale-110 transition-transform duration-300`} />
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Caption */}
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-display text-sm uppercase tracking-wide text-foreground">
                {image.caption}
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageLayout>
        <Section>
          <PageHeader
            title="The Atmosphere"
            subtitle="A glimpse into the House experience. Where every hand tells a story."
          />

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {mockGallery.map((image, index) => (
              <GalleryCard key={image.id} image={image} index={index} />
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <p className="font-display text-2xl md:text-3xl text-muted-foreground italic">
              "The cards don't know who's a legend and who's just starting out. 
              That's the beauty of it."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — House Philosophy
            </footer>
          </motion.blockquote>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Gallery;
