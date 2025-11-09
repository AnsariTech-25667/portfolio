'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, Rocket, Code, Star, Zap, Brain, Target, Award, CheckCircle, TrendingUp, Globe, Coffee } from 'lucide-react';

export default function AskMaaz() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize welcome message
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: "👋 Hey there! I'm Maaz's AI Assistant. I can tell you about his epic projects, technical skills, experience, and why he's perfect for your team. What would you like to know?",
          isBot: true,
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isOpen]);

  // Pulse effect for floating button
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const predefinedResponses = {
    'projects': "🚀 Maaz has built 15+ production-ready projects including ResumeForge AI with dual AI providers (GPT-4 + Gemini) and 3D visualizations, HireFlow AI achieving 87% hiring prediction accuracy, enterprise MERN applications with real-time collaboration, and AI-powered platforms processing computer vision tasks with published research in Scopus-indexed journals!",
    'skills': "💻 Maaz is a full-stack MERN expert with 15+ technologies mastered: React, Node.js, MongoDB, Express, Python, AI/ML, AWS, Docker, Kubernetes, PostgreSQL, Redis, GraphQL, TypeScript, Next.js, and more! He's built enterprise-grade solutions that scale.",
    'experience': "🏆 5,000+ lines of production code, enterprise system development, $5M+ revenue generated for clients, 98% project success rate, and 100% client satisfaction. He's worked with CTOs, VPs of Engineering, and Chief Data Scientists across multiple industries.",
    'hire': "💻 MERN Stack Expert: React, Node.js, MongoDB, Express + Next.js 15 & TypeScript ✅ Enterprise Experience: Built production systems at Softmaque Consulting ✅ AI Integration: Combines full-stack development with ML capabilities ✅ Self-Learner: Rapidly masters new technologies and delivers scalable solutions",
    'ai': "🤖 Maaz specializes in AI/ML with real-world applications: recommendation systems, data analytics platforms, intelligent automation, machine learning models, and AI-powered business solutions that drive measurable results.",
    'contact': "📧 Ready to connect? You can reach Maaz through the contact form below, or check out his GitHub, LinkedIn, and other social links in the footer. He responds to every message within 24 hours!",
    'tech': "⚡ Maaz's tech stack includes: Frontend (React, Next.js, TypeScript, Tailwind), Backend (Node.js, Express, Python, Django), Databases (MongoDB, PostgreSQL, Redis), Cloud (AWS, Docker, Kubernetes), and AI/ML tools for cutting-edge solutions.",
    'default': "🎯 Great question! Maaz has extensive experience in full-stack development, AI/ML integration, and building scalable systems with real business impact. He's delivered enterprise solutions at Netraket (Denmark-based startup) and Softmaque Consulting, with published AI research achieving 91.78% precision in computer vision applications. Want to know more about his projects, skills, or experience?"
  };

  const quickActions = [
    { text: "🚀 View Epic Projects", action: "Tell me about Maaz's projects" },
    { text: "💻 Technical Skills", action: "What are Maaz's skills?" },
    { text: "🏆 Why Hire Maaz?", action: "Why is Maaz perfect for your team?" },
    { text: "📧 Get In Touch", action: "How can I contact Maaz?" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const messageText = message.toLowerCase();
      let response = predefinedResponses.default;

      if (messageText.includes('project') || messageText.includes('work') || messageText.includes('build')) {
        response = predefinedResponses.projects;
      } else if (messageText.includes('skill') || messageText.includes('tech') || messageText.includes('stack') || messageText.includes('language')) {
        response = predefinedResponses.skills;
      } else if (messageText.includes('experience') || messageText.includes('background') || messageText.includes('resume')) {
        response = predefinedResponses.experience;
      } else if (messageText.includes('hire') || messageText.includes('startup') || messageText.includes('team') || messageText.includes('join')) {
        response = predefinedResponses.hire;
      } else if (messageText.includes('ai') || messageText.includes('ml') || messageText.includes('machine learning') || messageText.includes('artificial intelligence')) {
        response = predefinedResponses.ai;
      } else if (messageText.includes('contact') || messageText.includes('reach') || messageText.includes('email') || messageText.includes('connect')) {
        response = predefinedResponses.contact;
      }

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (actionText) => {
    setMessage(actionText);
    setTimeout(() => {
      const form = document.querySelector('#chat-form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 100);
  };

  return (
    <>
      {/* Premium Floating Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 2 }}
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Floating Background Orbs */}
        <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl opacity-40 animate-pulse delay-700"></div>
        
        {/* Notification Pulse */}
        <AnimatePresence>
          {showPulse && !isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg border-2 border-white"
            >
              Ask me!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden group"
          aria-label="Ask Maaz's AI Assistant"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          <div className="relative flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
        </motion.button>
      </motion.div>

      {/* Premium Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-4"
          >
            <motion.div
              initial={{ x: 400, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 400, y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white/10 dark:bg-neutral-800/80 backdrop-blur-xl border border-white/20 dark:border-neutral-600/50 rounded-3xl shadow-2xl w-full max-w-lg h-[600px] flex flex-col relative overflow-hidden group"
            >
              {/* Floating Background Orbs */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-60 animate-pulse delay-700"></div>
              
              {/* Premium Header */}
              <div className="relative flex items-center justify-between p-6 border-b border-white/20 dark:border-neutral-600/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-white drop-shadow-lg">Maaz AI Assistant</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-300 font-medium">Online & Ready</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 relative">
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} mb-4`}
                    >
                      <div className={`flex items-start gap-3 max-w-xs ${msg.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`p-2 rounded-xl shadow-lg ${msg.isBot ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 'bg-gradient-to-r from-cyan-500 to-blue-600'}`}>
                          {msg.isBot ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                        </div>
                        <div className={`relative p-4 rounded-2xl shadow-lg backdrop-blur-xl ${msg.isBot ? 'bg-white/10 border border-white/20' : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30'}`}>
                          <p className="text-white text-sm leading-relaxed drop-shadow-sm">{msg.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-3 max-w-xs">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-lg">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions - Always Visible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="px-6 py-2"
              >
                <p className="text-sm text-neutral-300 font-medium mb-3">Quick Actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      onClick={() => handleQuickAction(action.action)}
                      className="p-2 text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105 text-left"
                    >
                      {action.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Premium Input Form */}
              <form id="chat-form" onSubmit={handleSubmit} className="relative p-6 border-t border-white/20 dark:border-neutral-600/50">
                <div className="flex gap-3">
                  <div className="flex-1 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-sm"></div>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about projects, skills, experience..."
                      className="relative w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-neutral-400 outline-none focus:border-purple-400/60 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={!message.trim() || isTyping}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl hover:from-purple-400 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <Send className="w-5 h-5 relative z-10" />
                  </motion.button>
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Brain className="w-3 h-3" />
                    <span>Powered by AI • Instant responses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-neutral-400">Ready to Hire</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}