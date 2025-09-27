'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PhotoFrame({ src, alt, width, height, className = '', ...props }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const frameVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const staticStyles = prefersReducedMotion ? {
    transition: 'all 0.3s ease',
    ':hover': {
      boxShadow: '0 15px 30px rgba(59, 130, 246, 0.25)'
    },
    ':focus': {
      outline: '3px solid #3b82f6',
      outlineOffset: '3px'
    }
  } : {};

  if (prefersReducedMotion) {
    return (
      <div 
        className={`relative overflow-hidden rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 focus-ring ${className}`}
        style={staticStyles}
        {...props}
      >
        <div className="overflow-hidden rounded-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover aspect-square"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 cursor-pointer focus-ring ${className}`}
      variants={frameVariants}
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      {...props}
    >
      <div className="overflow-hidden rounded-full">
        <motion.div variants={imageVariants}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover aspect-square"
            priority
          />
        </motion.div>
      </div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}