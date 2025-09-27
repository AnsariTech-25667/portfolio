'use client';
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AskMaaz() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement AI chatbot integration
    alert('Chatbot feature coming soon! For now, please use the contact form.');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Ask Maaz"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Ask Maaz</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-slate-800/30 rounded-lg p-3 mb-4">
                <p className="text-sm">
                  Hi! I'm working on an AI assistant to answer questions about my work and experience. 
                  For now, please use the contact form or reach out directly!
                </p>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}