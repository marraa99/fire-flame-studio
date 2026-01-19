import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Radio, ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise-overlay">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Vertical text decoration */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-vertical font-mono text-xs tracking-widest text-muted-foreground/40 uppercase">
          Departament Intervenții Speciale • România • Est. 2024
        </span>
      </div>

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            {/* Data Readout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="data-readout inline-block mb-8 pb-2"
            >
              SECTOR_0x7F :: PLATFORMA TACTICĂ v3.2.1
            </motion.div>

            {/* Main Headline - Brutalist Typography */}
            <div className="relative mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-wide"
              >
                <span className="block text-foreground">URGENȚA</span>
                <span className="block text-thermal thermal-glow">ÎN PALMA</span>
                <span className="block text-foreground">TA.</span>
              </motion.h1>
              
              {/* Glitch decoration */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -left-4 top-1/2 w-2 h-24 bg-primary origin-top"
              />
            </div>

            {/* Description with bracket corners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bracket-corners p-6 mb-10 max-w-xl"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Platformă de coordonare tactică pentru echipele de pompieri și descarcerare. 
                <span className="text-foreground font-medium"> Zero latență. Maximă eficiență.</span>
              </p>
            </motion.div>

            {/* CTA Buttons - Asymmetric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14">
                <span className="relative z-10 flex items-center gap-3 font-mono uppercase tracking-wider text-sm">
                  <Download className="w-4 h-4" />
                  Descarcă APK
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-border hover:border-primary hover:bg-transparent px-8 h-14"
              >
                <span className="flex items-center gap-3 font-mono uppercase tracking-wider text-sm">
                  <Radio className="w-4 h-4 text-success" />
                  Dashboard Live
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="brutal-card p-0 overflow-hidden">
              {/* Panel Header */}
              <div className="bg-primary/10 border-b border-primary/30 px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  Status Național
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-success">LIVE</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-6 space-y-6">
                <StatItem 
                  label="Echipaje Active" 
                  value="247" 
                  suffix="/ 312" 
                  trend="+12%" 
                  trendUp 
                />
                <StatItem 
                  label="Intervenții Azi" 
                  value="89" 
                  suffix="misiuni" 
                />
                <StatItem 
                  label="Timp Mediu Răspuns" 
                  value="4:32" 
                  suffix="min" 
                  trend="-18%" 
                  trendUp 
                />
                
                {/* Alert Banner */}
                <div className="status-alert-badge w-full justify-center mt-4">
                  <Zap className="w-3 h-3" />
                  3 ALERTE ACTIVE
                </div>
              </div>

              {/* Hazard Strip */}
              <div className="h-3 hazard-stripes" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

const StatItem = ({ 
  label, 
  value, 
  suffix, 
  trend, 
  trendUp 
}: { 
  label: string; 
  value: string; 
  suffix?: string; 
  trend?: string; 
  trendUp?: boolean;
}) => (
  <div className="flex items-end justify-between border-b border-border pb-4">
    <div>
      <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-4xl">{value}</span>
        {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
      </div>
    </div>
    {trend && (
      <span className={`font-mono text-xs ${trendUp ? 'text-success' : 'text-destructive'}`}>
        {trend}
      </span>
    )}
  </div>
);

export default HeroSection;