'use client';
import { me } from '@/data/profile';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Award, Target, Lightbulb, Users, GraduationCap } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

export default function About() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MotionDiv = reduceMotion ? 'div' : motion.div;

  const skills = [
    'Full-Stack Development: JavaScript/TypeScript, MERN, Next.js, React, Node.js',
    'Cloud & DevOps: AWS, Docker, Vercel, CI/CD, REST & GraphQL APIs',
    'Databases: PostgreSQL, MongoDB, Prisma, Neon, SQL',
    'AI/ML & Data Analytics: OpenAI/Gemini, Python, Power BI, Tableau',
    'Scalable Architecture, Microservices, Agile/Scrum, Test-Driven Development'
  ];

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Proficient in modern web technologies, cloud platforms, and AI/ML frameworks"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research & Innovation",
      description: "Published researcher with focus on robotics, AI applications, and emerging technologies"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Impact",
      description: "Delivered scalable solutions that improved efficiency and user experience"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Analytical mindset with ability to break down complex challenges into actionable solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Always exploring new technologies and methodologies to stay ahead of the curve"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Spirit",
      description: "Strong team player with excellent communication and leadership skills"
    }
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 relative bg-transparent">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white text-center mb-12">About Me</h2>
        </MotionDiv>

        <div className="max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedCard className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Full-Stack Web Developer | Software Engineer | AI/ML & Data Analytics
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a full-stack developer with a solid track record of building and shipping production-ready web apps. My work centers on the MERN stack (MongoDB, Express.js, React, Node.js) and modern tools such as Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL. I deploy to Vercel and AWS, use CI/CD pipelines, and design for scalability from day one. Several of my projects—PromptPilot, NovaDraft, SyncSlate, and FinSight-AI—showcase this range: AI-powered chat platforms, content-creation suites, scheduling systems, and finance apps that blend polished UX with real-time data and cloud-native architecture. I also work at the intersection of AI/ML and data analytics, integrating OpenAI/Gemini APIs and leveraging SQL, Power BI, Tableau, and Google Data Analytics to turn raw data into actionable insights. During my Software Engineer Internship at Softmaque Consulting, I built key features for an enterprise-grade Defect Tracking and Workflow Management System using ASP.NET, SQL Server, jQuery, and AJAX. I implemented role-based UI, dynamic notifications, and Excel ingestion that improved QA speed and accuracy across the company.
                </p>
                <p>
                  I love designing high-impact SaaS products that save people time and make data useful—clean code, strong architecture, and real business value in every release.
                </p>
              </div>
            </AnimatedCard>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedCard className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Core Skills & Focus Areas</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </MotionDiv>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {highlights.map((highlight, index) => (
              <AnimatedCard key={index} delay={0.6 + index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 text-purple-400 mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <AnimatedCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Education</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Vishwakarma Institute Of Technology — Bachelor of Technology (BTech)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      Electronics and Telecommunications Engineering
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Graduated (Jan 2022 – May 2025)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Data Analysis', 'Full-Stack Development', 'Python', 'JavaScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tag, index) => (
                      <span key={index} className="skill-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </MotionDiv>
        </div>
        </div>
      </div>
    </section>
  );
}