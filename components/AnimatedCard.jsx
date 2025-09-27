'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedCard({ children, className = '', delay = 0, ...props }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      scale: 1.06,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const staticStyles = prefersReducedMotion ? {
    transition: 'all 0.2s ease',
    ':focus': {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px'
    }
  } : {};

  if (prefersReducedMotion) {
    return (
      <div 
        className={`enhanced-card focus-ring ${className}`}
        style={staticStyles}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`enhanced-card focus-ring ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="hover"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}