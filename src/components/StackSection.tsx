import type { ReactNode } from "react";

interface StackSectionProps {
  children: ReactNode;
  /** Stacking order — later sections need a higher index to paint over the tail of earlier ones. */
  z: number;
  className?: string;
  /** Round the top corners and pull up slightly over the previous section for the "peel" look. */
  rounded?: boolean;
  /**
   * Pin this section at the top of the viewport while the NEXT section
   * scrolls up and over it — the "swipe reveals the next card" effect.
   * Only safe for short/bounded-height sections: a sticky section's own
   * content beyond one viewport never scrolls into view (it freezes), so
   * tall multi-part sections must stay false (the default).
   */
  sticky?: boolean;
}

export const StackSection = ({ children, z, className = "", rounded = true, sticky = false }: StackSectionProps) => (
  <div
    className={`relative ${sticky ? "sticky top-0" : ""} ${
      rounded ? "-mt-8 rounded-t-[2rem] overflow-hidden md:-mt-12 md:rounded-t-[3rem]" : ""
    } ${className}`}
    style={{ zIndex: z }}
  >
    {children}
  </div>
);
