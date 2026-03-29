"use client";
import { VladyslavSections } from "@/widgets/VladyslavsPage";
import { motion } from "framer-motion";

export default function VladPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <VladyslavSections />
    </motion.main>
  );
}
