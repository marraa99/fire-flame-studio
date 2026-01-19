import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Emergency Ticker */}
      <div className="bg-primary/10 border-b border-primary/30 overflow-hidden">
        <div className="flex">
          <div className="flex animate-marquee">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 px-8 py-2 text-xs font-mono uppercase tracking-widest text-primary whitespace-nowrap">
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" />
                  SISTEM ACTIV
                </span>
                <span>•</span>
                <span>COORDONARE NAȚIONALĂ</span>
                <span>•</span>
                <span>PROTOCOL DELTA-7</span>
                <span>•</span>
                <span>NIVEL SECURITATE: MAXIM</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="px-6 py-4 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          {/* Logo Mark */}
          <div className="relative flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="font-display text-2xl text-primary-foreground">R</span>
            </div>
            <div>
              <span className="font-display text-xl tracking-wider">RESCUE</span>
              <span className="block text-[10px] font-mono text-muted-foreground tracking-widest">
                TACTICAL PLATFORM
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Timp Sistem
            </span>
            <span className="font-mono text-sm tabular-nums animate-flicker">
              {new Date().toLocaleTimeString('ro-RO', { hour12: false })}
            </span>
          </div>
          
          <div className="h-8 w-px bg-border" />
          
          <div className="status-live">
            OPERAȚIONAL
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;