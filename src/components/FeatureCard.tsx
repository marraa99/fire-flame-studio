import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  status: "ok" | "alert" | "info";
  statusText: string;
  title: string;
  description: string;
  detail?: string;
  icon?: ReactNode;
  delay?: number;
}

const statusStyles = {
  ok: "status-ok",
  alert: "status-alert",
  info: "status-info",
};

const FeatureCard = ({
  status,
  statusText,
  title,
  description,
  detail,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl p-6 cursor-pointer group"
    >
      <div className="mb-4">
        <span className={`status-badge ${statusStyles[status]}`}>
          {statusText}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
        {description}
      </p>
      
      {detail && (
        <p className="text-sm font-mono text-muted-foreground/70">
          {detail}
        </p>
      )}
    </motion.div>
  );
};

export default FeatureCard;
