import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Radio } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Ember overlay effect */}
      <div className="ember-overlay" />
      
      {/* Floating ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${15 + i * 15}%`,
              bottom: "-10px",
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-2">
            Urgența în
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-gradient-fire mb-8">
            Palma Ta.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Platformă de coordonare tactică pentru echipele de pompieri și descarcerare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="glow-effect min-w-[200px]">
            <Download className="mr-2 h-5 w-5" />
            Descarcă APK
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px]">
            <Radio className="mr-2 h-5 w-5" />
            Vezi Live Dashboard
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
