import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  RotateCcw, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import Markdown from 'react-markdown';

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
}

const PRESET_SUGGESTIONS = [
  'What are his main technical skills?',
  'Tell me about his certifications.',
  'How can I contact him?'
];

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome-1',
  role: 'assistant',
  content: `👋 **Hi! I'm Nagendra's AI Recruiter Assistant.**\n\nI can answer questions about his **20+ years of IT engineering**, **Google Certified GenAI leadership**, **cybersecurity credentials**, or provide his direct contact details.\n\n*What would you like to explore?*`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

/**
 * Connects the chat submission to the Gemini API backend endpoint.
 * Falls back gracefully to structured portfolio intelligence if offline.
 */
export async function fetchGeminiResponse(userInput: string, history?: { role: string; content: string }[]): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userInput,
        history: history || [],
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data && typeof data.text === 'string') {
      return data.text;
    }
    throw new Error('Unexpected response format');
  } catch (err) {
    console.warn('Network call to Gemini API failed, activating client fallback:', err);
    
    // Client-side fallback based on portfolio knowledge
    const query = userInput.toLowerCase();
    if (query.includes('skill') || query.includes('technical')) {
      return `**Nagendra's Main Technical Competencies:**\n\n` +
        `* **Cybersecurity & Defense:** Zero-Trust architecture, Fortinet/Cisco firewalls, OWASP Top 10, penetration testing, and vulnerability mitigation.\n` +
        `* **Systems & Networks:** Enterprise Linux (RHEL, Ubuntu), Windows Server / AD, campus network routing for 5,000+ users.\n` +
        `* **Generative AI & Cloud:** Google Cloud Generative AI Leader, prompt design, Google Workspace Enterprise, and Kubernetes.\n` +
        `* **E-Governance Applications:** Campus academic ERP, PHP, Python, PostgreSQL, MySQL, and secure REST APIs.`;
    }
    if (query.includes('cert') || query.includes('credential')) {
      return `**Nagendra's Professional Certifications:**\n\n` +
        `* **Google Cloud Generative AI Leader** (2026, Credly verified)\n` +
        `* **TCS Cybersecurity Analyst** Simulation (2025, Forage verified)\n` +
        `* **Google Cloud Professional Workspace Administrator** (Coursera verified)\n` +
        `* **Google Cloud Foundations: Kubernetes**\n` +
        `* **CNSS 4011 Information Assurance Standard**\n\n` +
        `All certifications in the Certifications section include 1-click external verification links!`;
    }
    if (query.includes('contact') || query.includes('email') || query.includes('reach')) {
      return `**How to Contact Nagendra H G:**\n\n` +
        `* **Email:** [hgnagendra@gmail.com](mailto:hgnagendra@gmail.com)\n` +
        `* **LinkedIn:** [linkedin.com/in/nagendrahg](https://www.linkedin.com/in/nagendrahg)\n` +
        `* **Location:** The National Institute of Engineering (NIE), Mysuru, Karnataka, India.\n\n` +
        `You can also download his digital vCard or message him via the contact section below!`;
    }
    return `Nagendra H G is a **Senior Programmer & Google Certified GenAI Leader** at NIE Mysuru with over 20 years of expertise in IT systems and cybersecurity.\n\nFeel free to ask about his skills, projects, or how to get in touch!`;
  }
}

export const RecruiterChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      // Focus input on open for desktop
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputMessage).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) {
      setInputMessage('');
    }
    setIsLoading(true);

    try {
      // Build brief history context
      const historyContext = messages.slice(-4).map(m => ({
        role: m.role,
        content: m.content
      }));

      const aiReply = await fetchGeminiResponse(messageContent, historyContext);

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error in chat exchange:', err);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: `I encountered a momentary issue processing that request. Please feel free to retry or contact Nagendra directly at **hgnagendra@gmail.com**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div id="ai-recruiter-chat-widget" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Container Popup */}
      {isOpen && (
        <div
          id="ai-recruiter-chat-container"
          role="dialog"
          aria-label="Ask Nagendra's AI Assistant"
          className="w-[calc(100vw-2.5rem)] sm:w-[360px] md:w-[370px] h-[460px] max-h-[calc(100vh-6.5rem)] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-3.5 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-gray-50/90 dark:bg-slate-800/90 border-b border-gray-200/80 dark:border-slate-800 flex items-center justify-between backdrop-blur-xs">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-none">
                  Ask Nagendra&apos;s AI Assistant
                </h3>
                <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>Recruiter Dossier & Insights</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Online</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearChat}
                title="Restart Conversation"
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-200/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-200/50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white shadow-xs rounded-tr-xs'
                      : 'bg-gray-100/90 dark:bg-slate-800 text-gray-800 dark:text-slate-100 border border-gray-200/60 dark:border-slate-700/60 rounded-tl-xs'
                  }`}
                >
                  <div className="markdown-body space-y-1.5 leading-relaxed text-[12px]">
                    <Markdown
                      components={{
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="underline font-semibold hover:opacity-80 inline-flex items-center gap-0.5"
                          >
                            {children}
                            <ExternalLink className="w-2.5 h-2.5 inline" />
                          </a>
                        ),
                        p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 my-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 my-1">{children}</ol>,
                        li: ({ children }) => <li>{children}</li>,
                        strong: ({ children }) => <strong className="font-bold">{children}</strong>
                      }}
                    >
                      {msg.content}
                    </Markdown>
                  </div>
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      msg.role === 'user' ? 'text-blue-100' : 'text-gray-400 dark:text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-200 flex items-center justify-center mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Pulsing "Typing..." Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-xs text-gray-500 dark:text-slate-400">
                <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-200/60 dark:border-slate-700/60 rounded-tl-xs">
                  <span className="text-[11px] font-medium text-gray-500 dark:text-slate-400">typing</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Quick Suggestion Chips */}
          <div className="px-3 pt-2 pb-1 border-t border-gray-100 dark:border-slate-800/80 bg-gray-50/50 dark:bg-slate-900/50">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar scroll-smooth">
              {PRESET_SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  id={`ai-suggestion-chip-${idx}`}
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSendMessage(suggestion)}
                  className="shrink-0 text-[10px] font-medium px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200/80 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                id="ai-recruiter-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, certifications..."
                disabled={isLoading}
                className="flex-1 text-xs px-3.5 py-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-hidden transition-all"
              />
              <button
                id="ai-recruiter-send-btn"
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-all cursor-pointer shrink-0"
                title="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <button
        id="ai-recruiter-fab"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Assistant" : "Open Nagendra's AI Recruiter Assistant"}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-blue-500/30"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Sparkles className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400 border-2 border-white dark:border-slate-900"></span>
              </span>
            )}
          </div>
        )}

        {/* Hover label for desktop */}
        {!isOpen && (
          <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-full bg-gray-900/90 dark:bg-slate-800 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700">
            Ask Nagendra&apos;s AI Assistant
          </span>
        )}
      </button>
    </div>
  );
};
