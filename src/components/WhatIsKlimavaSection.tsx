import { motion } from "framer-motion";
import { Navigation, ShoppingBag01, ArrowReload02, Leaf } from "react-coolicons";

const examples = [
  { icon: Navigation, label: "Åka kollektivt" },
  { icon: ShoppingBag01, label: "Handla second hand" },
  { icon: ArrowReload02, label: "Återvinna" },
  { icon: Leaf, label: "Köpa hållbara produkter" },
];

export const WhatIsKlimavaSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Vad är <span className="gradient-text">Klimava?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Klimava är en app som belönar dig för att göra klimatsmarta val i vardagen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground font-medium mb-6 text-center">
            Exempel på vad du kan få poäng för:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {examples.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-muted/50 rounded-2xl p-4 border border-border/40"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center mt-8 text-lg leading-relaxed">
            Samla poäng och byt dem mot rabatter och erbjudanden direkt i appen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
