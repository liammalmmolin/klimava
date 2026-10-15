import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

/** Reveals a quote/headline word by word as it scrolls into view. */
export const SplitReveal = ({ text, className = "", wordClassName = "" }: SplitRevealProps) => {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: i * 0.025 }}
          className={`inline-block ${wordClassName}`}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
};
