"use client"
import React, { useState, useRef } from 'react';
import { Building2, Laptop, Droplets, Car, Package, Sun, CheckCircle, Award, Shield, ArrowRight, Users, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Define services and stats arrays used in this file (keeps names and structure expected by the UI)
const services = [
  {
    icon: Building2,
    title: "Construction & Engineering",
    desc: "Turnkey construction services delivering projects on time and on budget with rigorous quality control."
  },
  {
    icon: Laptop,
    title: "Technology Integration",
    desc: "End-to-end IT and systems integration to modernize facilities and streamline operations."
  },
  {
    icon: Droplets,
    title: "MEP & Plumbing",
    desc: "Mechanical, electrical, and plumbing expertise to ensure safe, efficient building systems."
  },
  {
    icon: Car,
    title: "Fleet & Logistics",
    desc: "Logistics planning and fleet management to support large-scale project delivery."
  },
  {
    icon: Package,
    title: "Procurement & Supply Chain",
    desc: "Strategic procurement and reliable supply-chain services to keep projects moving."
  },
  {
    icon: Sun,
    title: "Sustainability Consulting",
    desc: "Sustainable design and consulting to reduce environmental impact and improve efficiency."
  }
];

const stats = [
  {
    icon: Users,
    value: "1,200+",
    label: "Clients Served"
  },
  {
    icon: Award,
    value: "95%",
    label: "Client Satisfaction"
  },
  {
    icon: CheckCircle,
    value: "5,000+",
    label: "Projects Completed"
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support & Maintenance"
  }
];

// CORRECTED FloatingPaths component with animated lines
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
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
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

export default function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true); // Start muted by default
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  const title = "MS Services Excellence";
  const words = title.split(" ");

  // Mouse move handler for 3D rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!laptopRef.current) return;
    
    const rect = laptopRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees rotation
    const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees rotation
    
    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleVideoControl = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVolumeControl = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background Paths - CORRECTED */}
      <div className="fixed inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Title with letter-by-letter animation */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tighter px-2">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-2 sm:mr-3 md:mr-4 last:mr-0 mb-2 sm:mb-0"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Complete construction, technology integration, and professional services for institutions and enterprises
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-xl sm:rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1rem] sm:rounded-[1.15rem] px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
              asChild
            >
              <Link href="/services">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Explore Our Services
                </span>
                <span className="ml-2 sm:ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 sm:group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Laptop Video Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
              Our Story in Motion
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2 sm:px-0">
              Experience our work through an immersive showcase
            </p>
          </motion.div>

          {/* 3D Laptop Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div
              ref={laptopRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              className="relative perspective-1000 cursor-grab active:cursor-grabbing"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Laptop Frame - Responsive sizing */}
              <div className="relative w-[280px] h-[175px] xs:w-[320px] xs:h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[312px] lg:w-[600px] lg:h-[375px] xl:w-[800px] xl:h-[500px]">
                {/* Laptop Screen */}
                <div className="absolute inset-0 bg-neutral-900 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] rounded-b-none border-[6px] sm:border-[8px] md:border-[10px] lg:border-[12px] border-neutral-800 shadow-2xl overflow-hidden">
                  {/* Video Screen */}
                  <div className="absolute inset-[1px] sm:inset-[2px] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] lg:rounded-[10px] rounded-b-none overflow-hidden bg-neutral-950">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/video-poster.jpg"
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />
                    
                    {/* Video Controls Container */}
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex gap-2 sm:gap-3">
                      {/* Play/Pause Control */}
                      <button
                        onClick={handleVideoControl}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                        title={isVideoPlaying ? "Pause" : "Play"}
                      >
                        {isVideoPlaying ? (
                          <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                        ) : (
                          <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                        )}
                      </button>

                      {/* Volume Control */}
                      <button
                        onClick={handleVolumeControl}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                        ) : (
                          <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Camera Notch */}
                  <div className="absolute top-1 sm:top-2 md:top-3 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-1 sm:h-2 md:h-3 bg-neutral-800 rounded-full"></div>
                </div>
                
                {/* Laptop Bottom */}
                <div className="absolute top-full left-0 right-0 h-2 sm:h-3 md:h-4 lg:h-6 xl:h-8 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-b-[8px] sm:rounded-b-[12px] md:rounded-b-[16px] lg:rounded-b-[20px] shadow-2xl">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-neutral-700 rounded-full"></div>
                </div>
                
                {/* Laptop Base */}
                <div className="absolute top-[calc(100%+4px)] sm:top-[calc(100%+6px)] md:top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-2 sm:h-3 md:h-4 bg-neutral-800 rounded-full shadow-2xl">
                  <div className="absolute -top-1 sm:-top-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-48 h-1 sm:h-2 bg-neutral-700 rounded-t-full"></div>
                </div>
                
                {/* Laptop Stand */}
                <div className="absolute top-[calc(100%+6px)] sm:top-[calc(100%+8px)] md:top-[calc(100%+10px)] lg:top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-52 lg:w-64 h-2 sm:h-3 md:h-4 lg:h-6 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-b-lg sm:rounded-b-xl shadow-2xl"></div>
                
                {/* Reflection Glare */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-sm pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Below Laptop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto px-4"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-neutral-900 dark:text-white">Building the Future</h3>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8">
              From groundbreaking to ribbon-cutting, we deliver excellence at every stage of your project. 
              Our comprehensive approach ensures seamless integration across all service domains.
            </p>
            <Button
              variant="ghost"
              className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-700 hover:bg-white/10 dark:hover:bg-black/20 text-neutral-900 dark:text-white hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/projects">
                View Our Projects
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="text-center group p-4 sm:p-6"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-2 sm:mb-3">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-2 sm:px-0"
            >
              Comprehensive solutions tailored to meet your infrastructure and technology needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-neutral-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                    {service.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
            Ready to Build Excellence?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
            Let's discuss how we can bring your vision to life with our comprehensive services
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-xl sm:rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1rem] sm:rounded-[1.15rem] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
              asChild
            >
              <Link href="/contact">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Start Your Project
                </span>
                <span className="ml-2 sm:ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 sm:group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Add custom styles for perspective */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}