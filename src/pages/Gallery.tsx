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
  { id: "1", caption: "Friday Night Action", aspectRatio: "landscape", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/587812391_18120334588546193_3013206498253742333_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc4MzMyMTU0NTQxNDM2MjQyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=-K1mJciihGUQ7kNvwFBfPAv&_nc_oc=Admr7RSEMJk_Bpey-Q-IOGeK0dGaWsnlRde6xVAk5D0Wty49CS-L4Cf01SfxtWWemPM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=LE42Llwvks7R4e9wgj6Y6w&oh=00_Afl0KFwNa3G0RT3-z3_kwmw6jzFYSvr913AUDAkNda8xdA&oe=693DED4B" },
  { id: "2", caption: "Tournament Final Table", aspectRatio: "portrait", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/581920513_18118455466546193_4322752087324758352_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc2Nzg5NDU2ODc2ODIwMzc1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg1NzEuc2RyLkMzIn0%3D&_nc_ohc=x-Od93PIYFIQ7kNvwEl_X6v&_nc_oc=AdkRuLn0IG7VUhwTdTwnh-cs0uPd7rnXs_1H9OpR-GOx8hEisKolWom8aYSyKEnTvtY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=gLRnksqqRZdRO6IEUu_nLA&oh=00_AfnmVFz3meglwi5c0Ulw0MDFAdtMUb6Lr47F2ifcEeCiiw&oe=693DF157" },
  { id: "3", caption: "The Lounge", aspectRatio: "square", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/581442690_18118199422546193_2533903541058929401_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc2NTcyMDM0ODY4MDQ5NjUwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTIzNS5zZHIuQzMifQ%3D%3D&_nc_ohc=gJhpYZiTAkMQ7kNvwFpvcVH&_nc_oc=AdlCw0IyZ7UG0gKjQYDzDp2XXkv6SyCWWFiNY2eB24QCNss_uLuzZL2MxQnuBt2usJk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=enjHFe4VgrgblG9DBE43HQ&oh=00_AflgBocdnBRBEamFIfTwzyvNXxya3ZIJDSJl1HZkKV9Izw&oe=693DF90E" },
  { id: "4", caption: "High Stakes Corner", aspectRatio: "landscape", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/557439463_18112849519546193_2507815780873884748_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzczMzgzMDY4MjA1MDA2ODMzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=FLFpbXOVES0Q7kNvwG0qdMe&_nc_oc=Adl6l3kC1wU4PIgi0CTcuOElAkzDKD_HDZbpPeXUfjky4FQNfdEFc6uJuL1TSEKGAlI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Frii1qmylOqr8Z_MlF2qqQ&oh=00_AfnI_I15v4Ta5tpQ5djV972S6lJHmzM15cPaihebIbujjw&oe=693DE3D4" },
  { id: "5", caption: "Chip Stack Aesthetics", aspectRatio: "portrait", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/565490688_18114561550546193_5311570048754881072_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzc0Mjc2NjA0MDIzNDA4OTU2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTU5LnNkci5DMyJ9&_nc_ohc=rMBZ7LdUViAQ7kNvwEqsq5Y&_nc_oc=Adl3tp66Fj0JaCaZS2OAh3L5uVehTe7e640j4hhHuek4CznpQZdJF7P7smIvhvK0nk0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Lc7OK-hwlu6fr9TzXFi4BQ&oh=00_Afmd4ljX5_j_qCisbig7ipPWxnxbqxXUvO9WDyZPSnnJ9g&oe=693DED28" },
  { id: "6", caption: "Weekend Warriors", aspectRatio: "square", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/563819757_18114532735546193_5170682561596922371_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzc0MjUzMTAwMzE2NTI4MTk1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTAzMi5zZHIuQzMifQ%3D%3D&_nc_ohc=e3lLFxvTCyoQ7kNvwEl323F&_nc_oc=Adm86eJAHDk3VdOakpX3Q4hxpMT5bSh9U99_HAgSgRYhyrylL2g8-OG7YZILPfSwmJA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=jFyh_Zqk6AcSDqWwWLwNvQ&oh=00_Afl4LFzC7M1BSXILlmJOpNrLrJDoYAczAtg9KEyxgREuNQ&oe=693DFC00" },
  { id: "7", caption: "All-In Moment", aspectRatio: "landscape", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/561634628_18113908195546193_4071351289853363314_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzczOTI3NTIwMjEzMjc1ODY0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMDB4NjY3LnNkci5DMyJ9&_nc_ohc=i7vh7kuhbfcQ7kNvwGPyTyf&_nc_oc=AdnIvyS0A1RxpbckhOlx12-Jh8L3P0rZ4WIsElpNKn8HC5WnliiHgwYHo4q_JWzCIiU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Rz6iXVAmGC6jbJIapayaDA&oh=00_AfmaB_YTJzA32wxsAeX3WmWGe6SC_EmE0eWqE1SIEkpwxA&oe=693DD4F7" },
  { id: "8", caption: "VIP Room", aspectRatio: "portrait", imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-15/542131134_18109752403546193_1013542956473083464_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=MzcxNTg2MTYwNjIyNDE3MTI1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=QPu16iex39YQ7kNvwEVYT8O&_nc_oc=AdlOR4yncyqxT2PgnC31VbS4OJVARlvlzSb37kpQFZaJPNP197SORiOJVj0ZEpOWzNE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=AMnAQbcVIwiDqlBHIUtDPA&oh=00_Afm8nLiA685xP4rfzxYfdBKq9Zdu8MYxrVnLCGpXH046Mw&oe=693DE5F8" },
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
          {/* Image or Placeholder */}
          {image.imageUrl ? (
            <img 
              src={image.imageUrl} 
              alt={image.caption || "Gallery image"} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-icon');
                if (placeholder) {
                  (placeholder as HTMLElement).style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div className={`absolute inset-0 flex items-center justify-center placeholder-icon ${image.imageUrl ? 'hidden' : ''}`}>
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
