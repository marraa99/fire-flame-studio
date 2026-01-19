import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Map, Bell, Heart, Radio, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Map,
    code: "MAP_01",
    title: "Hartă Tactică",
    description: "Localizare GPS în timp real. Hidranți, echipaje, zone de risc pe o singură hartă.",
    status: "ACTIV",
    statusType: "success" as const,
  },
  {
    icon: Bell,
    code: "ALT_02",
    title: "Alertă Instant",
    description: "Notificări push cu prioritate maximă. Dispatch automat bazat pe proximitate.",
    status: "3 ACTIVE",
    statusType: "alert" as const,
  },
  {
    icon: Heart,
    code: "MED_03",
    title: "Protocol Medical",
    description: "Acces rapid la ghiduri SMURD. Bază de date substanțe periculoase.",
    status: "SINCRONIZAT",
    statusType: "success" as const,
  },
  {
    icon: Radio,
    code: "COM_04",
    title: "Comunicații",
    description: "Canal radio criptat. Push-to-talk între toate echipajele conectate.",
    status: "CRIPTAT",
    statusType: "info" as const,
  },
  {
    icon: Brain,
    code: "AI_05",
    title: "Inteligență AI",
    description: "Rapoarte auto-generate. Predicție resurse. Optimizare rute.",
    status: "BETA",
    statusType: "info" as const,
  },
  {
    icon: Shield,
    code: "SEC_06",
    title: "Securitate",
    description: "Autentificare biometrică. Audit log complet. Zero breach.",
    status: "BLINDAT",
    statusType: "success" as const,
  },
];

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-between border-b border-border pb-6"
        >
          <div>
            <span className="data-readout inline-block mb-4 pb-2">
              MODUL_CAPABILITIES
            </span>
            <h2 className="font-display text-5xl md:text-7xl">
              FUNCȚIONALITĂȚI
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-muted-foreground">
            6 MODULE ACTIVE
          </span>
        </motion.div>
      </div>

      {/* Features Grid - Asymmetric */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <FeatureBlock key={feature.code} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Scrolling Code Strip */}
      <motion.div 
        style={{ x }}
        className="mt-20 border-y border-border py-4 overflow-hidden"
      >
        <div className="flex gap-16 whitespace-nowrap font-mono text-sm text-muted-foreground/40">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex gap-16">
              <span>0x7F_RESCUE_PLATFORM</span>
              <span>//</span>
              <span>BUILD_2024.12.15</span>
              <span>//</span>
              <span>ROMANIA_TACTICAL_NET</span>
              <span>//</span>
              <span>ENCRYPTION_AES256</span>
              <span>//</span>
              <span>UPTIME_99.97%</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const FeatureBlock = ({ 
  feature, 
  index 
}: { 
  feature: typeof features[0]; 
  index: number;
}) => {
  const Icon = feature.icon;
  
  const statusColors = {
    success: "text-success border-success/30 bg-success/10",
    alert: "text-destructive border-destructive/30 bg-destructive/10",
    info: "text-accent border-accent/30 bg-accent/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ backgroundColor: "hsl(var(--card))" }}
      className="group relative p-8 border border-border cursor-pointer transition-colors duration-300"
    >
      {/* Corner Index */}
      <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/30">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 mb-6 flex items-center justify-center border border-primary/30 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>

      {/* Code */}
      <span className="font-mono text-xs text-muted-foreground tracking-widest">
        {feature.code}
      </span>

      {/* Title */}
      <h3 className="font-display text-2xl mt-2 mb-3 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {feature.description}
      </p>

      {/* Status */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest border ${statusColors[feature.statusType]}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        {feature.status}
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FeaturesSection;