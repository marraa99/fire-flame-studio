import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-6 py-12 border-t border-border"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-4 h-4 text-primary" />
          <span className="font-bold text-sm">RESCUE APP</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Departament Intervenții Speciale. Toate drepturile rezervate.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
