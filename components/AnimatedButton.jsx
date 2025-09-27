'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedButton({ children, className = '', variant = 'primary', ...props }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 4px 14px rgba(59, 130, 246, 0.25)'
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { 
      scale: 4, 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const baseClasses = variant === 'primary' 
    ? 'enhanced-button focus-ring'
    : 'btn focus-ring';

  const staticStyles = prefersReducedMotion ? {
    transition: 'all 0.2s ease',
    ':hover': {
      transform: 'none',
      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)'
    },
    ':focus': {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px'
    }
  } : {};

  if (prefersReducedMotion) {
    return (
      <button 
        className={`${baseClasses} ${className}`}
        style={staticStyles}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={`${baseClasses} relative overflow-hidden ${className}`}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      whileFocus="hover"
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        variants={rippleVariants}
        initial="initial"
        whileTap="animate"
      />
    </motion.button>
  );
}