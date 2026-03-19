"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export const TransitionOverlay = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isAnimating && pathname === href) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, href, isAnimating]);

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsAnimating(true);

    setTimeout(() => {
      router.push(href);
    }, 800);
  };

  return (
    <>
      <span onClick={handleStart} style={{ cursor: "pointer" }}>
        {children}
      </span>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "all",
            }}
          >
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 1200,
                  y: (Math.random() - 0.5) * 800,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "#ff00cc" : "#00ffcc",
                  boxShadow: "0 0 10px currentColor",
                }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontFamily: "Space Grotesk",
                  fontSize: "18px",
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                }}
              >
                Loading Experience
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
