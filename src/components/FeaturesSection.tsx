import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <FeatureCard
            status="ok"
            statusText="Sistem OK"
            title="Hartă Tactică"
            description="Localizarea precisă a hidranților și a echipajelor în timp real prin GPS-ul dispozitivului."
            delay={0}
          />
          
          <FeatureCard
            status="alert"
            statusText="Alertă Activă"
            title="Ultima Alertă"
            description="Sector 3 - Incendiu Grădiniță"
            detail="Echipaj mobilizat: B-01-POM"
            delay={0.1}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-6"
        >
          <FeatureCard
            status="info"
            statusText="Info"
            title="Resurse Medicale"
            description="Acces rapid la protocoale SMURD și baze de date pentru substanțe periculoase."
            delay={0.2}
          />
          
          <FeatureCard
            status="ok"
            statusText="Activ"
            title="Comunicații"
            description="Canal radio digital criptat pentru coordonare în timp real între echipaje."
            delay={0.3}
          />
          
          <FeatureCard
            status="info"
            statusText="Beta"
            title="Rapoarte AI"
            description="Generare automată de rapoarte de intervenție folosind inteligență artificială."
            delay={0.4}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
