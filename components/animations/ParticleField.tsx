"use client";

import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef(0);
  const dimsRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const c = canvas.getContext("2d");
      if (!c) return;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      c.scale(dpr, dpr);
      dimsRef.current = { w, h };
    }

    resize();
    window.addEventListener("resize", resize);

    function createParticle(): Particle {
      const maxLife = 120 + Math.random() * 180;
      return {
        x: Math.random() * dimsRef.current.w,
        y: Math.random() * dimsRef.current.h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.15,
        size: 1.5 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.6,
        life: 0,
        maxLife,
      };
    }

    function getParticleCount(): number {
      const w = dimsRef.current.w;
      return Math.min(80, Math.floor((w * 0.08)));
    }

    function initParticles() {
      const count = getParticleCount();
      particlesRef.current = Array.from({ length: count }, createParticle);
    }

    initParticles();

    let mouseX = -1000;
    let mouseY = -1000;

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    function animate() {
      if (!ctx || !canvas) return;
      const { w, h } = dimsRef.current;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const targetCount = getParticleCount();

      while (particles.length < targetCount) {
        particles.push(createParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        if (p.life > p.maxLife) {
          particles[i] = createParticle();
          continue;
        }

        const lifeRatio = p.life / p.maxLife;
        const fadeAlpha =
          lifeRatio < 0.1
            ? lifeRatio / 0.1
            : lifeRatio > 0.9
              ? (1 - lifeRatio) / 0.1
              : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha * fadeAlpha})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
