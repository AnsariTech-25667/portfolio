'use client';
import { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { me } from '@/data/profile';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const achievements = [
    { label: 'Projects', value: me.projects.length },
    { label: 'Certifications', value: me.certifications.length },
    { label: 'Publications', value: me.publications.length },
    { label: 'Experience', value: me.experience?.length || 0 }
  ];

  const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView && !reduceMotion) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 50);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 50);
        
        return () => clearInterval(timer);
      } else {
        setCount(target);
      }
    }, [isInView, target]);

    return (
      <div className="card text-center">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {count}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
          {label}
        </div>
      </div>
    );
  };

  return (
    <section id="achievements" className="scroll-mt-24 py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {achievements.map((achievement, index) => (
            <Counter 
              key={index}
              target={achievement.value}
              label={achievement.label}
            />
          ))}
        </div>
        
        <div className="card max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-lg">Vishwakarma Institute of Technology</h4>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">Bachelor of Technology (BTech), Electronics and Telecommunications Engineering</p>
            <p className="text-sm text-neutral-500">Jan 2022 – May 2025</p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            Graduated BTech (E&TC) — strong foundation in systems, signal processing, and software. Focused on data, web, and embedded interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}