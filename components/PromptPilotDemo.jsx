"use client";

import { useState, useEffect, useRef } from "react";
import { Download, Play, Square, Rocket, Save, PlusCircle, Trash2, Sparkles, Bot } from "lucide-react";

function now() { 
  return (typeof performance !== "undefined" ? performance.now() : Date.now()); 
}

function words(s){ 
  return (s || "").split(/\s+/).filter(Boolean).length; 
}

function toMarkdown(messages){
  const lines = messages.map(m => `**${m.role.toUpperCase()}:** ${m.content}`).join("\n\n");
  return `# PromptPilot — Demo Export\n\n${lines}\n`;
}

export default function PromptPilotDemo() {
  const [provider, setProvider] = useState("openai");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role:"system", content:"PromptPilot demo — streaming mocked API." }]);
  const [pending, setPending] = useState(false);
  const [tokensIn, setTokensIn] = useState(0);
  const [tokensOut, setTokensOut] = useState(0);
  const [latency, setLatency] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hasPlayedGreeting, setHasPlayedGreeting] = useState(false);
  const controllerRef = useRef(null);
  const startRef = useRef(0);

  // Voice greeting function
  const playGreeting = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && !hasPlayedGreeting) {
      const utterance = new SpeechSynthesisUtterance("Hey there! I'm Maaz. Welcome to my PromptPilot demo. Let's build something amazing together!");
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      // Try to use a more natural voice
      speechSynthesis.getVoices(); // Trigger voice loading
      setTimeout(() => {
        const voices = speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => 
          voice.name.includes('Google') || 
          voice.name.includes('Samantha') || 
          voice.name.includes('Daniel') ||
          voice.lang.includes('en')
        );
        if (preferredVoice) utterance.voice = preferredVoice;
        speechSynthesis.speak(utterance);
      }, 100);
      
      setHasPlayedGreeting(true);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const promptLibrary = [
    { 
      id: "business-analysis", 
      name: "📊 Business Analysis", 
      text: "Analyze the business model and market opportunity for [COMPANY/IDEA]. Include competitive landscape, target market size, revenue streams, key metrics to track, and strategic recommendations for growth.",
      category: "Business",
      successRate: 85
    },
    { 
      id: "system-architecture", 
      name: "🏗️ System Architecture", 
      text: "Design a scalable system architecture for [PROJECT] that can handle significant user growth. Include technology stack recommendations, database design, API structure, caching strategy, and deployment considerations.",
      category: "Engineering",
      successRate: 88
    },
    { 
      id: "startup-pitch", 
      name: "🚀 Startup Pitch", 
      text: "Create a compelling pitch deck for [STARTUP IDEA]. Include problem statement, solution overview, market opportunity, business model, traction (if any), team background, funding requirements, and next steps.",
      category: "Pitch",
      successRate: 79
    },
    { 
      id: "code-review", 
      name: "💻 Code Review", 
      text: "Review the following code for best practices, performance optimization, security considerations, maintainability, and scalability. Provide specific recommendations for improvement with examples.",
      category: "Development",
      successRate: 91
    }
  ];

  async function handleSend(e) {
    e?.preventDefault?.();
    const prompt = input.trim();
    if (!prompt || pending) return;

    // Play greeting on first interaction
    playGreeting();

    setMessages(m => [...m, { role: "user", content: prompt }]);
    setInput("");
    setTokensIn(t => t + words(prompt));

    setPending(true);
    startRef.current = now();
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      const res = await fetch("/api/promptpilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, provider }),
        signal
      });
      if (!res.ok || !res.body) throw new Error("Bad response");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      const assistant = { role: "assistant", content: "" };
      setMessages(m => [...m, assistant]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        acc += chunk;
        setMessages(m => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
        setTokensOut(t => t + words(chunk));
      }
      setLatency(Math.max(1, Math.round(now() - startRef.current)));
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "[stream aborted or failed]" }]);
    } finally {
      setPending(false);
    }
  }

  function stopStream() {
    try { 
      controllerRef.current?.abort(); 
    } catch {}
    setPending(false);
  }

  function exportMarkdown() {
    const md = toMarkdown(messages.filter(m => m.role !== "system"));
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; 
    a.download = "promptpilot-demo.md"; 
    a.click();
    URL.revokeObjectURL(url);
  }

  function clearChat() {
    setMessages([{ role: "system", content: "PromptPilot demo — streaming mocked API." }]);
    setTokensIn(0); 
    setTokensOut(0); 
    setLatency(0);
    stopStream();
  }

  if (!mounted) {
    return (
      <section id="promptpilot" className="scroll-mt-24 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-white/10 rounded-lg mb-4 max-w-md mx-auto"></div>
              <div className="h-6 bg-white/5 rounded mb-8 max-w-lg mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="promptpilot" className="scroll-mt-24 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-bold text-blue-300 uppercase tracking-wide">LIVE DEMO PROJECT</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            PromptPilot Demo
          </h2>
          
          <div className="text-lg lg:text-xl font-semibold text-amber-400 mb-6">
            AI Chat Interface - Technical Demonstration
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-300 font-bold uppercase tracking-wide text-sm">Technical Demo Session</span>
              </div>
              <p className="text-lg text-white font-medium mb-4">
                <strong className="text-emerald-400">PromptPilot Project Demo:</strong> This is a live demo session showcasing real-time AI streaming responses, prompt library management, and modern UI/UX patterns.
              </p>
              <p className="text-neutral-300 mb-4">
                Built with Next.js 15, React 19, and streaming APIs to demonstrate frontend development capabilities and modern web architecture.
              </p>
              <div className="flex items-center justify-center p-4 bg-gradient-to-r from-black/60 to-black/80 rounded-xl border border-emerald-400/30 mb-4">
                <a 
                  href="https://github.com/AnsariTech-25667/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-400/30">
                <div className="text-2xl font-bold text-emerald-300 mb-1">Streaming</div>
                <div className="text-sm text-emerald-200">Real-time API</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30">
                <div className="text-2xl font-bold text-blue-300 mb-1">Multi-Provider</div>
                <div className="text-sm text-blue-200">Demo Options</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                <div className="text-2xl font-bold text-purple-300 mb-1">Modern UI</div>
                <div className="text-sm text-purple-200">Professional Design</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-5 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl border border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                        <Bot className="w-5 h-5 text-blue-400" />
                      </div>
                      <select
                        className="bg-gradient-to-r from-black/80 to-gray-900/80 border border-white/40 rounded-lg px-4 py-2 text-sm text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all font-medium backdrop-blur-sm"
                        value={provider}
                        onChange={e => setProvider(e.target.value)}
                      >
                        <option value="openai" className="bg-black text-white">🚀 GPT-4 Turbo (Demo)</option>
                        <option value="deepseek" className="bg-black text-white">⚡ DeepSeek V3 (Demo)</option>
                        <option value="claude" className="bg-black text-white">🧠 Claude 3 Opus (Demo)</option>
                        <option value="gemini" className="bg-black text-white">💎 Gemini Ultra (Demo)</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-full border border-emerald-400/50">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/80"></div>
                      <span className="text-sm font-black text-emerald-200">PROMPTPILOT DEMO SESSION</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {!pending ? (
                      <button 
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25" 
                        onClick={handleSend}
                      >
                        <Play className="w-4 h-4" /> 
                        Send
                      </button>
                    ) : (
                      <button 
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25" 
                        onClick={stopStream}
                      >
                        <Square className="w-4 h-4" /> 
                        Stop
                      </button>
                    )}
                    <button 
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30" 
                      onClick={exportMarkdown}
                    >
                      <Download className="w-4 h-4" /> 
                      Export
                    </button>
                    <button 
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-neutral-300 rounded-lg font-medium transition-all duration-300 hover:scale-105" 
                      onClick={clearChat}
                    >
                      <Trash2 className="w-4 h-4" /> 
                      Clear
                    </button>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 rounded-full border border-emerald-400/30">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-emerald-300 font-bold">Demo Active</span>
                    </div>
                  </div>
                  <div className="relative h-[450px] overflow-auto rounded-xl p-6 bg-gradient-to-br from-black/40 via-black/50 to-black/60 border border-white/20 backdrop-blur-sm">
                    {messages.filter(m => m.role !== "system").length === 0 ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-2xl mx-auto flex items-center justify-center mb-4 border border-emerald-400/30">
                            <Bot className="w-10 h-10 text-emerald-400" />
                          </div>
                          <p className="text-xl font-bold text-white mb-2">PromptPilot Demo Ready</p>
                          <p className="text-sm text-neutral-300 mb-4">Live streaming chat interface - <a href="https://github.com/AnsariTech-25667/portfolio" target="_blank" className="text-emerald-400 hover:text-emerald-300 underline">View Code</a></p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {messages.filter(m => m.role !== "system").map((m, i) => (
                          <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {m.role === 'assistant' && (
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-xl flex items-center justify-center border border-emerald-400/30 shrink-0">
                                <Bot className="w-5 h-5 text-emerald-400" />
                              </div>
                            )}
                            <div className={`max-w-[75%] rounded-2xl p-5 relative group ${
                              m.role === 'user' 
                                ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/40 shadow-lg shadow-blue-500/10' 
                                : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/30 backdrop-blur-sm shadow-lg'
                            }`}>
                              <div className="flex items-center justify-between mb-3">
                                <div className={`text-xs uppercase tracking-wide font-bold ${
                                  m.role === 'user' ? 'text-blue-200' : 'text-emerald-200'
                                }`}>
                                  {m.role === 'user' ? '👤 YOU' : '🤖 PROMPTPILOT AI'}
                                </div>
                                {m.role === 'assistant' && (
                                  <div className="flex items-center gap-2">
                                    <div className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full font-bold border border-emerald-400/30">
                                      Demo
                                    </div>
                                    <div className="text-xs text-neutral-400">
                                      {latency > 0 ? `${latency}ms` : 'calculating...'}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="text-white whitespace-pre-wrap leading-relaxed font-medium">{m.content}</div>
                              {m.role === 'assistant' && pending && i === messages.filter(m => m.role !== "system").length - 1 && (
                                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                                  <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
                                  </div>
                                  <span className="text-xs font-bold text-emerald-300">AI is thinking...</span>
                                </div>
                              )}
                            </div>
                            {m.role === 'user' && (
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl flex items-center justify-center border border-blue-400/30 shrink-0">
                                <span className="text-blue-400 font-bold text-sm">You</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <form onSubmit={handleSend} className="flex gap-3 mb-6">
                  <div className="flex-1 relative">
                    <input
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder:text-neutral-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
                      placeholder="Type your prompt here..."
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      disabled={pending}
                    />
                    {input && mounted && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
                        {words(input)} words
                      </div>
                    )}
                  </div>
                  <button 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2" 
                    type="submit" 
                    disabled={pending || !input.trim()}
                  >
                    <Rocket className="w-4 h-4" /> 
                    {pending ? 'Processing...' : 'Run'}
                  </button>
                </form>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-black/60 to-black/80 border border-emerald-400/50 rounded-xl p-4">
                    <div className="text-xs text-emerald-200 uppercase tracking-wide font-bold mb-2">Input Tokens</div>
                    <div className="text-2xl font-bold text-white mb-1">{tokensIn.toLocaleString()}</div>
                    <div className="text-xs text-emerald-400">session total</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-black/60 to-black/80 border border-blue-400/50 rounded-xl p-4">
                    <div className="text-xs text-blue-200 uppercase tracking-wide font-bold mb-2">Output Tokens</div>
                    <div className="text-2xl font-bold text-white mb-1">{tokensOut.toLocaleString()}</div>
                    <div className="text-xs text-blue-400">streaming demo</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-black/60 to-black/80 border border-purple-400/50 rounded-xl p-4">
                    <div className="text-xs text-purple-200 uppercase tracking-wide font-bold mb-2">Response Time</div>
                    <div className="text-2xl font-bold text-white mb-1">{latency}ms</div>
                    <div className="text-xs text-purple-400">last response</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-black/60 to-black/80 border border-orange-400/50 rounded-xl p-4">
                    <div className="text-xs text-orange-200 uppercase tracking-wide font-bold mb-2">Messages</div>
                    <div className="text-2xl font-bold text-white mb-1">{messages.filter(m => m.role !== "system").length}</div>
                    <div className="text-xs text-orange-400">total messages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl">
                  <Save className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Prompt Library</h3>
                  <p className="text-sm text-neutral-300">Curated templates for common use cases</p>
                </div>
              </div>

              <div className="space-y-4">
                {promptLibrary.map((item) => (
                  <div key={item.id} className="group">
                    <button
                      type="button"
                      className="w-full text-left p-4 bg-gradient-to-br from-black/50 to-black/70 hover:from-black/70 hover:to-black/80 border border-white/20 hover:border-emerald-400/40 rounded-xl transition-all duration-300"
                      onClick={() => setInput((v) => (v ? v + "\n\n" + item.text : item.text))}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white group-hover:text-emerald-300 transition-colors">{item.name}</span>
                        <PlusCircle className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <p className="text-sm text-neutral-300 mb-2">{item.text.substring(0, 80)}...</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-emerald-300">{item.successRate}% success rate</span>
                        <span className="text-blue-300 px-2 py-1 bg-blue-500/20 rounded-full">{item.category}</span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
