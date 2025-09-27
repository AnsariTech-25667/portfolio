'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

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

    // Initialize particles with enhanced properties
    const initParticles = () => {
      const particleCount = Math.min(168, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 6400));
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          originalX: 0,
          originalY: 0,
          vx: (Math.random() - 0.5) * 0.96,
          vy: (Math.random() - 0.5) * 0.96,
          size: Math.random() * 3.9 + 0.65,
          opacity: Math.random() * 0.6 + 0.36,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.024 + 0.012,
          color: {
            r: Math.random() > 0.5 ? 99 : 147, // Mix of indigo and purple
            g: Math.random() > 0.5 ? 102 : 51,
            b: Math.random() > 0.5 ? 241 : 234
          }
        });
      }
      
      // Set original positions
      particlesRef.current.forEach(particle => {
        particle.originalX = particle.x;
        particle.originalY = particle.y;
      });
    };

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * (canvas.offsetWidth / rect.width),
        y: (e.clientY - rect.top) * (canvas.offsetHeight / rect.height)
      };
    };

    // Enhanced animation loop
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction force
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.05;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }
        
        // Update position with damping
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99; // Damping
        particle.vy *= 0.99;
        
        // Gentle boundary forces instead of hard bounces
        const margin = 50;
        if (particle.x < margin) particle.vx += 0.01;
        if (particle.x > canvas.offsetWidth - margin) particle.vx -= 0.01;
        if (particle.y < margin) particle.vy += 0.01;
        if (particle.y > canvas.offsetHeight - margin) particle.vy -= 0.01;
        
        // Pulsing effect
        particle.pulse += particle.pulseSpeed;
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2;
        const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
        
        // Draw particle with enhanced visuals
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 2
        );
        gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${pulseOpacity})`);
        gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Enhanced connection system
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxConnectionDistance = 140;
          
          if (distance < maxConnectionDistance) {
            const opacity = (1 - distance / maxConnectionDistance) * 0.3;
            
            // Create gradient for connection lines
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`);
            lineGradient.addColorStop(1, `rgba(${otherParticle.color.r}, ${otherParticle.color.g}, ${otherParticle.color.b}, ${opacity})`);
            
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
    setIsLoaded(true);

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    canvas.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full -z-10 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-84' : 'opacity-0'
      }`}
    />
  );
}