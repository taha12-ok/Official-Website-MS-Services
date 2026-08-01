"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Minimize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  id: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! 👋 I'm the M.S Services Enterprise AI Assistant. Ask me about our flagship AI Automation solutions — AI chatbots, quote generation, CRM, WhatsApp, email, and workflow automation — or any of our construction, IT, solar, and other services. How can I help your business today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enhanced AI response function with better matching
  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase().trim();

    // AI Automation — flagship service (precise matching to avoid catching
    // substrings like "maintenance", "training", "repair", "email").
    if (/\bai\b/.test(msg) || msg.includes('automation') || msg.includes('automate') || msg.includes('chatbot') || msg.includes('voice agent') || msg.includes('ai agent') || msg.includes('workflow') || msg.includes('crm')) {
      return `🤖 **AI Automation** - Intelligent Automation for Modern Enterprises!

**Our AI Capabilities:**
✓ AI Customer Support & Chatbots
✓ AI Voice Agents
✓ AI Lead Qualification & Appointment Booking
✓ AI CRM, Sales & WhatsApp Automation
✓ AI Email & Workflow Automation
✓ AI Business Process Automation
✓ AI Knowledge Base & Document Processing
✓ AI Analytics & Integrations

**Business Impact:**
• 24/7 Automated Operations
• 80% Faster Responses
• 15+ AI Capabilities
• Scale without adding headcount
• Seamless integration with your existing tools

We design, build, and integrate AI agents and automated workflows — delivered with the reliability M.S Services has provided since 2005.

Would you like to book a free AI Automation consultation? Just tap "Book AI Consultation" or ask me anything about it!`;
    }

    // Exact service matching first
    if (msg.includes('janitor') || msg.includes('clean') || msg.includes('cleaning') || msg.includes('hygiene') || msg.includes('sanitization') || msg.includes('janitorial')) {
      return `🧹 **Janitorial Services** - Maintaining Excellence in Every Space!

**Our Comprehensive Cleaning Services:**
✓ Daily Facility Cleaning Services
✓ Deep Cleaning & Sanitization
✓ Waste Management & Disposal
✓ Environmental Health Services
✓ Hygiene Maintenance Programs
✓ Specialized Equipment & Supplies

**Service Excellence:**
• 30+ Facilities Maintained
• 24/7 Support Available
• 99% Client Satisfaction
• Eco-friendly Cleaning Products
• Trained & Certified Cleaning Staff
• Quality Control Inspections

We ensure spotless, hygienic environments for businesses, institutions, and facilities. Our professional team uses eco-friendly products and follows strict quality standards.

Interested in a cleaning quote or need specific janitorial services?`;
    }
    
    if (msg.includes('construction') || msg.includes('build') || msg.includes('civil') || msg.includes('renovation') || msg.includes('building')) {
      return `🏗️ **Construction Services** - Building Tomorrow's Infrastructure Today!

**Our Construction Expertise:**
✓ Building Construction & Civil Works
✓ Renovation & Modernization
✓ Electrical & Plumbing Systems
✓ Water Plant Installation & Filtration
✓ Professional Project Management
✓ Quality Assurance & Safety Compliance

**Track Record:**
• 50+ Projects Completed
• 100% Safety Record
• 15+ Years Experience
• PEC Registered Professional Teams

**Major Projects:** Pakistan Navy HQ, Naval Academy, PMSA facilities, and educational institutions.

We deliver turnkey solutions from design to completion with ISO-aligned quality management.`;
    }
    
    if (msg.includes('it') || msg.includes('technology') || msg.includes('computer') || msg.includes('laptop') || msg.includes('projector') || msg.includes('video wall')) {
      return `💻 **IT Equipment & Educational Solutions** - Empowering Education Through Technology!

**Our IT Services:**
✓ Video Walls & Large Format Displays
✓ Interactive Projectors & Smartboards
✓ Computers, Laptops & Workstations
✓ Network Infrastructure & Cabling
✓ Audio-Visual System Integration
✓ Interactive Learning Management Tools

**Achievements:**
• 25+ Institutions Served
• 500+ Devices Installed
• 24/7 Technical Support
• Latest Technology from Trusted Brands

We transform classrooms and offices into smart, efficient learning and working environments!`;
    }

    if (msg.includes('solar') || msg.includes('energy') || msg.includes('renewable')) {
      return `☀️ **Solar System Installation** - Powering a Sustainable Future!

**Solar Solutions:**
✓ On-Grid Solar Systems
✓ Hybrid Solar Solutions
✓ Off-Grid Power Systems
✓ Tier-1 Solar Modules
✓ Professional Installation
✓ Monitoring & Maintenance

**Benefits:**
• 5MW+ Capacity Installed
• 40% Average Energy Savings
• 25-year System Warranty
• Government Incentives Available
• Reduce Electricity Bills Significantly`;
    }

    if (msg.includes('transport') || msg.includes('vehicle') || msg.includes('fleet')) {
      return `🚗 **Transportation Services** - Moving Your Fleet Forward!

**Fleet Solutions:**
✓ Fleet Management & Optimization
✓ Preventive Maintenance Scheduling
✓ Vehicle Refurbishment & Restoration
✓ Performance Monitoring Systems
✓ Route Planning & Logistics

**Results:**
• 100+ Vehicles Managed
• 99% Fleet Uptime
• 40% Operational Cost Reduction
• Real-time Tracking & Reporting`;
    }

    // Company information
    if (msg.includes('owner') || msg.includes('ceo') || msg.includes('founder') || msg.includes('muhammad') || msg.includes('shabbir')) {
      return `**Muhammad Shabbir** - CEO & Founder

**Leadership Profile:**
• Founder of M.S Services & Trading Co. (2005)
• 20+ Years in Infrastructure Development
• Visionary Leader in Construction & Technology
• Expertise in Sustainable Solutions

Under his leadership, we've completed 21+ major projects including Pakistan Navy HQ, Naval Academy, and PMSA facilities.`;
    }

    if (msg.includes('history') || msg.includes('founded') || msg.includes('established')) {
      return `**Our Journey Since 2005**

🏢 **2005**: Company Founded with integrated infrastructure vision
📈 **2010**: Major expansion into IT solutions and renewable energy
🏆 **2015**: Completed 50+ major government and educational projects
🌟 **2020**: Recognized as industry leader in multi-disciplinary services
🌱 **2025**: Leading in green building and solar energy solutions

From a small team to 50+ professionals serving clients across Pakistan!`;
    }

    if (msg.includes('service') || msg.includes('what do you offer') || msg.includes('offerings')) {
      return `🔧 **Our Services:**

⭐ **AI Automation** (New Flagship) — AI agents, chatbots, voice agents & business automation

1. 🏗️ Construction Services
2. 💻 IT Equipment & Educational Solutions
3. 🧹 Janitorial Services
4. 🚗 Transportation Services
5. 📦 General Items & Supplies
6. ☀️ Solar System Installation
7. 🛟 Life Raft & Safety Equipment
8. ✈️ Aviation Parts & Equipment
9. 🌊 Marine Electronics & Mechanical
10. 🔧 Mechanical Services
11. ⚡ Electrical & Electronics
12. 🔌 Generator Systems & Parts

**Why Choose Us?**
• 20+ Years Experience
• 50+ Professional Team
• 100% Client Satisfaction
• ISO-aligned Quality Processes
• Now powered by Enterprise AI Automation

Which service would you like detailed information about?`;
    }

    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address')) {
      return `📞 **Contact M.S Services**

**Get in Touch:**
📞 Phone: +92 311 8305310
📧 Email: msservicesandtrading@gmail.com
🏢 Office: G-48, Falaknaz Tower, Main Shahrah-e-Faisal, Opp. Airport, Karachi

**Business Hours:**
Monday-Friday: 9:00 AM - 6:00 PM
Saturday: 9:00 AM - 2:00 PM
Sunday: Closed

Response Time: < 24 hours guaranteed!`;
    }

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return `Hello! 👋 I'm your M.S Services AI assistant. 

I can help you with information about:
• Our 12 service categories
• Company history since 2005
• Project experience and case studies
• Service details and pricing
• Contact information

What would you like to know about our construction, IT solutions, janitorial services, or any other offering?`;
    }

    // Default response for better guidance
    return `I understand you're asking about "${userMessage}". 

At M.S Services & Trading Co., we offer 12 comprehensive services including:

• Construction & Building
• IT Solutions & Technology  
• Janitorial & Cleaning Services
• Transportation & Fleet Management
• Solar Energy Systems
• And 7 other specialized services

Could you specify which service you're interested in, or ask about:
- Specific service details
- Company information
- Project experience
- Contact details

I'm here to provide detailed information!`;
  };

  const handleSubmit = (overrideText?: string) => {
    const text = (overrideText ?? message).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800); // Reduced typing time for better UX
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Suggested prompts shown as quick-start chips (enterprise UX).
  const suggestedPrompts = [
    'AI Chatbot',
    'AI Quote Generator',
    'CRM Automation',
    'WhatsApp Automation',
    'Email Automation',
    'Workflow Automation',
    'Our services',
    'Get a quote',
  ];
  // Show chips only at the start of a conversation (before the user has sent anything).
  const showSuggestions = messages.filter((m) => m.isUser).length === 0;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed ${isMinimized ? 'bottom-20 right-2 sm:bottom-24 sm:right-4' : 'bottom-2 right-2 sm:bottom-4 sm:right-4'} z-50 w-[calc(100vw-1rem)] sm:w-96 transition-all duration-300`}
          >
            <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200/50 dark:border-white/10 overflow-hidden flex flex-col" style={{ height: isMinimized ? '50px' : '500px', maxHeight: isMinimized ? '50px' : 'calc(100vh - 2rem)' }}>
              {/* Header */}
              <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-100 dark:to-white p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 dark:bg-neutral-900/20 rounded-full flex items-center justify-center">
                    <Bot size={16} className="sm:w-5 sm:h-5 text-white dark:text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white dark:text-neutral-900 text-xs sm:text-sm">M.S Enterprise AI Assistant</h3>
                    <p className="text-xs text-white/90 dark:text-neutral-700">Online • AI Automation & Services</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
                    className="p-1 sm:p-2 hover:bg-white/20 dark:hover:bg-neutral-900/20 rounded-lg transition-all text-white dark:text-neutral-900 focus-ring"
                  >
                    <Minimize2 size={14} className="sm:w-4 sm:h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                    className="p-1 sm:p-2 hover:bg-white/20 dark:hover:bg-neutral-900/20 rounded-lg transition-all text-white dark:text-neutral-900 focus-ring"
                  >
                    <X size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-neutral-50/50 dark:bg-neutral-950/50">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[90%] p-3 rounded-2xl text-xs sm:text-sm ${
                            msg.isUser
                              ? 'bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-100 dark:to-white text-white dark:text-neutral-900 rounded-br-none shadow-lg'
                              : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-bl-none border border-neutral-200 dark:border-neutral-700 shadow-md'
                          }`}
                        >
                          <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                          <p className={`text-xs opacity-70 mt-2 ${msg.isUser ? 'text-white dark:text-neutral-900' : 'text-neutral-600 dark:text-neutral-400'}`}>
                            {msg.timestamp.toLocaleTimeString('en-US', { 
                              hour: '2-digit', 
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-neutral-800 p-3 rounded-2xl rounded-bl-none border border-neutral-200 dark:border-neutral-700 shadow-md">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showSuggestions && (
                      <div className="pt-1">
                        <p className="text-[10px] sm:text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Suggested</p>
                        <div className="flex flex-wrap gap-2">
                          {suggestedPrompts.map((prompt) => (
                            <button
                              key={prompt}
                              onClick={() => handleSubmit(prompt)}
                              className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-emerald-500/50 hover:text-neutral-900 dark:hover:text-white transition-colors focus-ring"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Quick Actions */}
                  <div className="px-3 sm:px-4 pt-3 flex flex-wrap gap-2">
                    <a
                      href="https://wa.me/923118305310?text=I%27d%20like%20to%20book%20an%20AI%20Automation%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors focus-ring"
                    >
                      <Sparkles className="w-3 h-3" />
                      Book AI Consultation
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity focus-ring"
                    >
                      Get a Quote
                    </a>
                  </div>

                  {/* Input */}
                  <div className="p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about AI chatbots, CRM, WhatsApp automation..."
                        aria-label="Ask about our services"
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white focus:outline-none text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-xs sm:text-sm"
                      />
                      <motion.button
                        onClick={() => handleSubmit()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Send message"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-100 dark:to-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0 focus-ring"
                      >
                        <Send size={16} className="sm:w-5 sm:h-5 text-white dark:text-neutral-900" />
                      </motion.button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open chat assistant"
          className="fixed bottom-4 right-4 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-100 dark:to-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-neutral-500/50 dark:hover:shadow-white/50 transition-all duration-300 focus-ring"
        >
          <MessageCircle size={20} className="sm:w-6 sm:h-6 text-white dark:text-neutral-900" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white dark:border-neutral-900" />
        </motion.button>
      )}
    </>
  );
}