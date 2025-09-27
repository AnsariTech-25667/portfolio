'use client';
import { useEffect, useRef } from 'react';

export default function ParticlesCanvas({ density = 1, speed = 1.2 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let isVisible = true;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(200 * density, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 5000));
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * (2 * speed),
          vy: (Math.random() - 0.5) * (2 * speed),
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.4,
          hue: Math.random() * 60 + 200, // Blue to purple range
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;
        
        // Update pulse
        particle.pulse += particle.pulseSpeed;
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.3;
        const pulseSize = particle.size + Math.sin(particle.pulse) * 1;
        
        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 2
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${pulseOpacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 60%, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections to nearby particles
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${opacity})`);
            lineGradient.addColorStop(1, `hsla(${otherParticle.hue}, 80%, 70%, ${opacity})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Visibility change handler
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    // Setup
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}