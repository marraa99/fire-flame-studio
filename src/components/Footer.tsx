import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
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
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Platformă de coordonare pentru serviciile de urgență din România. 
              Dezvoltat în colaborare cu ISU.
            </p>
            <div className="data-readout inline-block pb-2">
              BUILD_2024.12.15 :: PRODUCTION
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Platforma
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Dashboard</FooterLink>
                <FooterLink href="#">Documentație</FooterLink>
                <FooterLink href="#">API</FooterLink>
                <FooterLink href="#">Status</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Resurse
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Training</FooterLink>
                <FooterLink href="#">Protocoale</FooterLink>
                <FooterLink href="#">Suport</FooterLink>
                <FooterLink href="#">FAQ</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Termeni</FooterLink>
                <FooterLink href="#">Confidențialitate</FooterLink>
                <FooterLink href="#">Securitate</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            © 2026 RESCUE PLATFORM. Toate drepturile rezervate.
          </span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-muted-foreground">Toate sistemele operaționale</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hazard Strip */}
      <div className="h-2 hazard-stripes" />
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <motion.a
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
      whileHover={{ x: 4 }}
    >
      {children}
      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  </li>
);

export default Footer;