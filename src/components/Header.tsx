import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-glow blur-md" />
            <Flame className="relative w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">RESCUE APP</span>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="hidden sm:block text-sm text-muted-foreground font-mono">
            Sistem Securizat v1.2
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Online</span>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
