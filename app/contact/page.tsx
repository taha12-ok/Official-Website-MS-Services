"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Bot, Clock, Building2, ArrowRight, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ContactPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your M.S Services assistant. I can help you with information about our construction services, IT solutions, janitorial services, transportation, supplies, and solar installations. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('construction') || message.includes('build')) {
      return "We offer comprehensive construction services including building construction, renovation works, electrical & plumbing, and water plant installations. We've completed 50+ projects with a 100% safety record. Would you like a detailed proposal?";
    }
    
    if (message.includes('it') || message.includes('technology') || message.includes('computer')) {
      return "Our IT solutions include video walls, projectors, laptops, desktops, networking systems, and interactive learning tools. We've served 25+ institutions and installed 500+ devices. Ready to modernize your infrastructure?";
    }
    
    if (message.includes('clean') || message.includes('janitor')) {
      return "Professional janitorial services covering facility cleaning, waste management, environmental services, and hygiene programs. We maintain 30+ facilities with 24/7 support. Need a cleaning quote?";
    }
    
    if (message.includes('transport') || message.includes('vehicle') || message.includes('fleet')) {
      return "We manage 100+ vehicles with 99% uptime through fleet management, preventive maintenance, refurbishment, and performance monitoring. Let's discuss your transportation needs!";
    }
    
    if (message.includes('supply') || message.includes('stationery') || message.includes('office')) {
      return "We provide 1000+ items including stationery, educational materials, and office supplies with 24-hour delivery. What specific supplies do you need?";
    }
    
    if (message.includes('solar') || message.includes('energy')) {
      return "Solar solutions: on-grid, hybrid, and off-grid systems using Tier-1 components. We've installed 5MW+ capacity, helping clients save 40% on energy costs. Interested in solar?";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return "You can reach us at:\n📞 +92 311 8305310\n📧 msservicesandtrading@gmail.com\n🏢 Office: G-48, Falaknaz Tower, Karachi\nWould you like me to connect you directly?";
    }
    
    if (message.includes('project') || message.includes('work')) {
      return "We've completed 21+ projects including Pakistan Navy HQ, Naval Academy, PMSA facilities, and educational institutions. All projects delivered on-time with 100% budget compliance. Which sector interests you?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about M.S Services & Trading Co. We offer construction, IT solutions, janitorial services, transportation, supplies, and solar installations. What would you like to know?";
    }
    
    return "I understand you're interested in " + userMessage + ". At M.S Services, we provide comprehensive infrastructure solutions. Could you specify if you need construction, IT, cleaning, transportation, supplies, or solar services? I'd be happy to provide detailed information!";
  };

  const handleChatSubmit = () => {
    if (!chatMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatMessage,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(chatMessage);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Please fill all required fields');
      return;
    }
    
    // Show success toast
    setShowToast(true);
    setFormSubmitted(true);
    
    // Prepare WhatsApp message
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923118305310';
    const message = `*New Inquiry from ${formData.name}*\n\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n🏗️ Service: ${formData.service}\n\n💬 Message:\n${formData.message}\n\nWe'll get back to you within 24 hours!`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  // FIXED: Simplified variants without custom easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // FIXED: Remove custom easing entirely to avoid TypeScript errors
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background Paths */}
      <div className="fixed inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Success Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          className="fixed top-4 sm:top-8 left-4 right-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50 max-w-sm sm:max-w-md mx-auto"
        >
          <div className="bg-emerald-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl border border-emerald-400 backdrop-blur-xl flex items-center gap-2 sm:gap-3">
            <Check className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm sm:text-base">Message Sent Successfully!</div>
              <div className="text-xs sm:text-sm opacity-90 truncate">Redirecting to WhatsApp...</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 backdrop-blur-xl mb-6 sm:mb-8"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400" />
            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
              Let's Connect
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 tracking-tighter px-2"
          >
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Ready to transform your operations? Let's discuss how our integrated solutions can drive your success with precision and professionalism
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div 
                variants={itemVariants}
                className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-neutral-900 dark:text-white">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-500 text-sm sm:text-base"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-500 text-sm sm:text-base"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-neutral-900 dark:text-white placeholder-neutral-500 text-sm sm:text-base"
                      placeholder="+92 300 1234567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all text-neutral-900 dark:text-white text-sm sm:text-base"
                      required
                    >
                      <option value="" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Select a service</option>
                      <option value="Construction Services" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Construction Services</option>
                      <option value="IT Equipment & Educational Solutions" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">IT Equipment & Educational Solutions</option>
                      <option value="Janitorial Services" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Janitorial Services</option>
                      <option value="Transportation Services" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Transportation Services</option>
                      <option value="General Items & Supplies" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">General Items & Supplies</option>
                      <option value="Solar System Installation" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Solar System Installation</option>
                      <option value="Multiple Services" className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Your Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none transition-all resize-none text-neutral-900 dark:text-white placeholder-neutral-500 text-sm sm:text-base"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full px-4 sm:px-8 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm sm:text-base md:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    {formSubmitted ? (
                      <>
                        <Check size={20} className="sm:w-6 sm:h-6" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send via WhatsApp</span>
                        <ArrowRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Cards */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "msservicesandtrading@gmail.com",
                    link: "mailto:msservicesandtrading@gmail.com",
                    color: "from-neutral-600 to-neutral-800"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    info: "+92 311 8305310",
                    link: "tel:+923118305310",
                    color: "from-neutral-600 to-neutral-800"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    info: "Office No G-48, Falaknaz Tower, Main Shahrah-e-Faisal, Opp. Airport, Karachi",
                    link: "#",
                    color: "from-neutral-600 to-neutral-800"
                  }
                ].map((contact, idx) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={contact.link}
                      whileHover={{ scale: 1.01 }}
                      className="group block p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base sm:text-lg mb-1 text-neutral-900 dark:text-white">{contact.title}</h3>
                          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed break-words">{contact.info}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                variants={itemVariants}
                className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-neutral-700 dark:text-neutral-300" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-neutral-900 dark:text-white">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM", active: true },
                    { day: "Saturday", time: "9:00 AM - 2:00 PM", active: true },
                    { day: "Sunday", time: "Closed", active: false }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl hover:bg-white/10 dark:hover:bg-black/10 transition-all">
                      <span className="font-semibold text-xs sm:text-sm text-neutral-700 dark:text-neutral-200">{schedule.day}</span>
                      <span className={`text-xs sm:text-sm ${schedule.active ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'}`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                variants={itemVariants}
                className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800"
              >
                <h3 className="text-lg sm:text-xl font-black mb-4 sm:mb-6 text-center text-neutral-900 dark:text-white">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: "< 24h", label: "Response Time" },
                    { value: "100%", label: "Satisfaction" },
                    { value: "21+", label: "Projects" },
                    { value: "24/7", label: "Support" }
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Chatbot */}
      <div className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ${chatOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-300 dark:border-neutral-800 w-[calc(100vw-2rem)] sm:w-80 h-[500px] sm:h-[600px] flex flex-col overflow-hidden max-w-sm">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-lg text-white">M.S Services AI</h3>
                <p className="text-xs opacity-90 text-white">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 sm:p-2 hover:bg-white/20 rounded-lg transition-all text-white"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 sm:space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-xl sm:rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-neutral-600 to-neutral-800 text-white rounded-br-none'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-bl-none border border-neutral-300 dark:border-neutral-700'
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1 sm:mt-2">
                    {message.timestamp.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit', 
                      hour12: true 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-neutral-100 dark:bg-neutral-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-bl-none border border-neutral-300 dark:border-neutral-700">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 sm:p-6 border-t border-neutral-300 dark:border-neutral-800">
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                placeholder="Ask about our services..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none text-neutral-900 dark:text-white placeholder-neutral-500 text-xs sm:text-sm"
              />
              <motion.button
                onClick={handleChatSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <Send size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setChatOpen(!chatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-full shadow-2xl flex items-center justify-center hover:shadow-neutral-600/50 transition-all duration-300 ${chatOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
      </motion.button>
    </div>
  );
}
