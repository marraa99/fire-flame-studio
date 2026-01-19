import { motion } from "framer-motion";

const stats = [
  { value: "15,847", label: "INTERVENȚII 2024" },
  { value: "312", label: "ECHIPAJE CONECTATE" },
  { value: "99.97%", label: "UPTIME" },
  { value: "<4min", label: "TIMP RĂSPUNS" },
  { value: "42", label: "JUDEȚE ACOPERITE" },
  { value: "24/7", label: "MONITORIZARE" },
];

const StatsMarquee = () => {
  return (
    <section className="py-8 border-y border-border bg-card/50 overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex">
              {stats.map((stat, index) => (
                <div 
                  key={`${setIndex}-${index}`} 
                  className="flex items-center gap-12 px-12 border-r border-border"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl lg:text-5xl">{stat.value}</span>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsMarquee;