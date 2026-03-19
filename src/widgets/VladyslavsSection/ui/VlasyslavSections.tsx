"use client";
import { useEffect, useRef } from "react";
import styles from "./VlasyslavSections.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    id: 1,
    title: "Projects",
    content: "Explore my digital universe and latest design works.",
    x: 100,
    y: 200,
  },
  {
    id: 2,
    title: "Skills",
    content: "React, Next.js, Framer Motion, UI/UX Engineering, Sanity, TypeScript, Vercel.",
    x: 400,
    y: 150,
  },
  {
    id: 3,
    title: "Contact",
    content: "Available for interesting high-end collaborations.",
    x: 250,
    y: 500,
  },
];

export const VladyslavSections = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let waves: {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
    }[] = [];

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number = 0;
      vy: number = 0;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
      }

      draw() {
        if (!ctx) return;
        const isMobile = window.innerWidth < 768;
        const radius = isMobile ? 0.7 : 1.3;
        ctx.fillStyle = "rgba(0, 255, 204, 0.45)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        waves.forEach((wave) => {
          const dx = wave.x - this.x;
          const dy = wave.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const waveThickness = 70;

          if (distance < wave.radius && distance > wave.radius - waveThickness) {
            const force = (waveThickness - (wave.radius - distance)) / waveThickness;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force * 14;
            this.vy -= Math.sin(angle) * force * 14;
          }
        });

        this.vx += (this.baseX - this.x) * 0.06;
        this.vy += (this.baseY - this.y) * 0.06;
        this.vx *= 0.85;
        this.vy *= 0.85;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      const spacing = w < 768 ? 20 : 30;
      particles = [];
      for (let y = -spacing; y < h + spacing; y += spacing) {
        for (let x = -spacing; x < w + spacing; x += spacing) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "CANVAS") {
        waves.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: Math.max(canvas.width, canvas.height) * 1.5,
          speed: 18,
        });
        if (waves.length > 5) waves.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waves.forEach((wave, i) => {
        wave.radius += wave.speed;
        if (wave.radius > wave.maxRadius) waves.splice(i, 1);
      });
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <section className={styles.wrapper} ref={constraintsRef}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.centerContainer}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className={styles.title}>WELCOME TO</h1>
          <h2 className={styles.subtitle}>VLADYSLAV’S WORKSPACE</h2>
        </motion.div>
      </div>

      <Link href="/" className={styles.homeBtn}>
        <span>BACK TO MAIN</span>
      </Link>

      {CARDS.map((card) => (
        <motion.div
          key={card.id}
          drag
          dragConstraints={constraintsRef}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          dragElastic={0.2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
          className={styles.card}
          style={{
            left: card.x,
            top: card.y,
            position: "absolute",
          }}
        >
          <div className={styles.cardGlow} />
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </motion.div>
      ))}

      <div className={styles.socialsWrapper}>
        <div className={styles.socialsContainer}>
          <a
            href="https://github.com/vladzvezdaev-ops"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.linkEnergy}>
              <div className={styles.energyCore}></div>
            </span>
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/vladyslav-zvezdaiev-900295388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span className={styles.linkEnergy}>
              <div className={styles.energyCore}></div>
            </span>
            LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};