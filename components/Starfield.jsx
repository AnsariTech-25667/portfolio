"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const stateRef = useRef({
    w: 0,
    h: 0,
    parallaxX: 0,
    parallaxY: 0,
    hidden: false,
    reduced: false,
    back: [],
    front: [],
    lastShoot: 0,
    shooting: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext("2d");

    const st = stateRef.current;
    st.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      st.w = canvas.clientWidth;
      st.h = canvas.clientHeight;
      canvas.width = Math.floor(st.w * dpr);
      canvas.height = Math.floor(st.h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const backCount = Math.floor((st.w * st.h) / 3000);   // ~400-500 desktop
      const frontCount = Math.floor(backCount * 0.25);      // ~100-150 desktop
      st.back = new Array(backCount).fill(0).map(() => ({
        x: Math.random() * st.w,
        y: Math.random() * st.h,
        r: 0.6 + Math.random() * 1.0,
        o: 0.25 + Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        tint: Math.random(),
      }));
      st.front = new Array(frontCount).fill(0).map(() => ({
        x: Math.random() * st.w,
        y: Math.random() * st.h,
        r: 1.0 + Math.random() * 1.4,
        o: 0.35 + Math.random() * 0.55,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        tint: Math.random(),
      }));
    };

    const drawStar = (s) => {
      const { x, y, r, o, tint } = s;
      // Subtle color variety
      let c = "#ffffff";
      if (tint < 0.25) c = "#9bbcff";
      else if (tint < 0.5) c = "#b388ff";
      else if (tint < 0.75) c = "#6ee7ff";
      ctx.globalAlpha = o;
      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.arc(x + st.parallaxX, y + st.parallaxY, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const wrap = (p) => {
      if (p.x < -10) p.x = st.w + 10;
      if (p.x > st.w + 10) p.x = -10;
      if (p.y < -10) p.y = st.h + 10;
      if (p.y > st.h + 10) p.y = -10;
    };

    const maybeShoot = (t) => {
      if (st.shooting || st.reduced) return;
      if (t - st.lastShoot < 15000 + Math.random() * 12000) return;
      st.lastShoot = t;
      const dir = Math.random() < 0.5 ? "br" : "bl"; // bottom-right or bottom-left
      st.shooting = {
        x: dir === "br" ? -50 : st.w + 50,
        y: 20 + Math.random() * (st.h * 0.4),
        vx: dir === "br" ? 8 + Math.random() * 4 : -(8 + Math.random() * 4),
        vy: 7 + Math.random() * 3,
        life: 0,
        max: 60,
      };
    };

    const drawShoot = () => {
      const s = st.shooting;
      if (!s) return;
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,.9)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.x + st.parallaxX, s.y + st.parallaxY);
      ctx.lineTo(s.x - s.vx * 2 + st.parallaxX, s.y - s.vy * 2 + st.parallaxY);
      ctx.stroke();
      ctx.restore();
      s.x += s.vx;
      s.y += s.vy;
      s.life++;
      if (s.life > s.max) st.shooting = null;
    };

    const step = (t) => {
      if (st.hidden) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      ctx.clearRect(0, 0, st.w, st.h);
      // Back stars
      for (const p of st.back) {
        if (!st.reduced) {
          p.x += p.vx * 0.6;
          p.y += p.vy * 0.6;
          wrap(p);
        }
        drawStar(p);
      }
      // Front stars
      for (const p of st.front) {
        if (!st.reduced) {
          p.x += p.vx * 0.5;
          p.y += p.vy * 0.5;
          wrap(p);
        }
        drawStar(p);
      }
      if (!st.reduced) {
        maybeShoot(t);
        drawShoot();
      }
      rafRef.current = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      const px = (e.clientX / st.w - 0.5) * 12;
      const py = (e.clientY / st.h - 0.5) * 12;
      st.parallaxX = px;
      st.parallaxY = py;
    };

    const onVisibility = () => {
      st.hidden = document.hidden;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("visibilitychange", onVisibility);

    // One-time static render if reduced-motion
    if (st.reduced) {
      ctx.fillStyle = "#05070d";
      ctx.fillRect(0, 0, st.w, st.h);
      for (const p of [...st.back, ...st.front]) drawStar(p);
    } else {
      rafRef.current = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 block w-full h-full bg-[#05070d] [image-rendering:pixelated]"
    />
  );
}