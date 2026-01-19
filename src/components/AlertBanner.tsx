import { motion } from "framer-motion";
import { Flame, MapPin, Clock, Users } from "lucide-react";

const AlertBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Skewed background */}
      <div className="absolute inset-0 bg-primary/5 skew-y-1" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="brutal-card overflow-hidden"
        >
          {/* Alert Header */}
          <div className="bg-destructive/20 border-b border-destructive/30 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Flame className="w-5 h-5 text-destructive" />
              </motion.div>
              <span className="font-mono text-sm uppercase tracking-widest text-destructive">
                Alertă Activă
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              PRIORITATE: MAXIMĂ
            </span>
          </div>

          {/* Alert Content */}
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Main Alert Info */}
              <div className="lg:col-span-7">
                <span className="font-mono text-xs text-muted-foreground tracking-widest">
                  COD INTERVENȚIE: ISU-2024-89421
                </span>
                <h3 className="font-display text-4xl lg:text-5xl mt-3 mb-4 text-thermal thermal-glow">
                  INCENDIU GRĂDINIȚĂ
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Sector 3, București
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Raportat: 14:32
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    3 Echipaje Mobilizate
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 border border-border">
                  <span className="block font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    ETA
                  </span>
                  <span className="font-display text-3xl">2:45</span>
                  <span className="text-xs text-muted-foreground ml-1">min</span>
                </div>
                <div className="p-4 border border-border">
                  <span className="block font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Distanța
                  </span>
                  <span className="font-display text-3xl">3.2</span>
                  <span className="text-xs text-muted-foreground ml-1">km</span>
                </div>
                <div className="p-4 border border-border col-span-2">
                  <span className="block font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Echipaj Principal
                  </span>
                  <span className="font-mono text-lg text-primary">B-01-POM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hazard Strip */}
          <div className="h-3 hazard-stripes" />
        </motion.div>
      </div>
    </section>
  );
};

export default AlertBanner;