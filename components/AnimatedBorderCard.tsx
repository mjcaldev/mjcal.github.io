"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBorderCard = ({
  children,
  className = "",
}: AnimatedBorderCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={clsx(
        "relative p-12 rounded-lg bg-background/80 hover:bg-background transition-all duration-500 text-center overflow-hidden",
        className
      )}
    >
      {/* Draw this only AFTER it's in view */}
      {hasAnimated && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
          className="absolute inset-0 border-2 border-indigo-400 rounded-lg z-0"
        />
      )}

      {/* Content above border */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};