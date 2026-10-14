import { motion } from "framer-motion";

interface SplitRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

/** Reveals a quote/headline word by word as it scrolls into view. */
export const SplitReveal = ({ text, className = "", wordClassName = "" }: SplitRevealProps) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.025 }}
          className={`inline-block ${wordClassName}`}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
};
