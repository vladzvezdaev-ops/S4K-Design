"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  amount?: number;
  margin?: string;
}

export const FadeIn: FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  once = true,
  amount = 0.1,
  margin = "0px 0px -50px 0px",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        opacity: {
          duration: duration * 1,
          ease: "linear",
        },
      }}
    >
      {children}
    </motion.div>
  );
};
