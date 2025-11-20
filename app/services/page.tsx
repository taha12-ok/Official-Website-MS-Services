"use client"
import React, { useState } from 'react';
import { Building2, Laptop, Droplets, Car, Package, Sun, CheckCircle, ArrowRight, Zap, Shield, Award, TrendingUp, LifeBuoy, Plane, Wrench, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'life-raft',
    icon: LifeBuoy,
    title: "Life Raft & Safety Equipment",
    tagline: "Ensuring Safety in Critical Situations",
    desc: "Complete life raft systems, marine safety equipment, emergency gear, and comprehensive safety solutions for maritime and industrial applications",
    image: "/raft1.png",
    features: [
      "Marine Life Raft Systems",
      "Emergency Evacuation Equipment",
      "Safety & Survival Gear",
      "Inspection & Maintenance Services",
      "Training & Certification",
      "Regulatory Compliance Solutions"
    ],
    stats: [
      { value: "500+", label: "Units Supplied" },
      { value: "100%", label: "Safety Certified" },
      { value: "24/7", label: "Emergency Support" }
    ],
    benefits: [
      "International safety standards compliance",
      "Regular inspection and maintenance",
      "Emergency response training",
      "Complete documentation and certification"
    ]
  },
  {
    id: 'aviation-parts',
    icon: Plane,
    title: "Aviation Parts & Equipment",
    tagline: "Precision Parts for Aerospace Excellence",
    desc: "Aircraft components, aviation spare parts, maintenance equipment, and specialized aerospace solutions with certified quality assurance",
    image: "/aviation1.png",
    features: [
      "Aircraft Spare Parts Supply",
      "Aviation Component Maintenance",
      "Ground Support Equipment",
      "Aerospace Tooling & Instruments",
      "Quality Assurance & Certification",
      "Technical Support Services"
    ],
    stats: [
      { value: "1000+", label: "Parts Available" },
      { value: "FAA", label: "Certified Quality" },
      { value: "48h", label: "Delivery Guarantee" }
    ],
    benefits: [
      "Certified aviation-grade components",
      "Rapid delivery and logistics",
      "Technical expertise and support",
      "Compliance with aviation regulations"
    ]
  },
  {
    id: 'marine-electronics-mechanical',
    icon: Cpu,
    title: "Marine Electronics & Mechanical Parts",
    tagline: "Advanced Solutions for Maritime Operations",
    desc: "Specialized marine electronics, navigation systems, mechanical components, and integrated solutions for maritime vessels and offshore operations",
    image: "/marine1.png",
    features: [
      "Marine Navigation Systems",
      "Ship Communication Equipment",
      "Engine Control Systems",
      "Marine Electrical Components",
      "Propulsion System Parts",
      "Offshore Platform Equipment"
    ],
    stats: [
      { value: "200+", label: "Vessels Equipped" },
      { value: "100%", label: "Marine Certified" },
      { value: "ISO", label: "Quality Standards" }
    ],
    benefits: [
      "IMO compliance guaranteed",
      "Rugged marine-grade components",
      "Global shipping support",
      "Comprehensive technical documentation"
    ]
  },
  {
    id: 'mechanical-services',
    icon: Wrench,
    title: "Mechanical Services",
    tagline: "Precision Engineering for Industrial Excellence",
    desc: "Comprehensive mechanical solutions including machinery installation, maintenance, repair services, and industrial equipment support",
    image: "/mechanical1.png",
    features: [
      "Industrial Machinery Installation",
      "Preventive Maintenance Programs",
      "Mechanical Repair & Overhaul",
      "Equipment Calibration & Testing",
      "Pump & Compressor Services",
      "Conveyor Systems Maintenance"
    ],
    stats: [
      { value: "150+", label: "Machines Serviced" },
      { value: "98%", label: "Uptime Guarantee" },
      { value: "24/7", label: "Emergency Support" }
    ],
    benefits: [
      "Reduced equipment downtime",
      "Extended machinery lifespan",
      "Cost-effective maintenance plans",
      "Expert technical support"
    ]
  },
  {
    id: 'solar',
    icon: Sun,
    title: "Solar System Installation",
    tagline: "Powering a Sustainable Future",
    desc: "Complete solar solutions including on-grid, hybrid, and off-grid systems with Tier-1 modules and professional installation",
    image: "/solar1.png",
    features: [
      "On-Grid Solar Systems",
      "Hybrid Solar Solutions",
      "Off-Grid Power Systems",
      "Tier-1 Solar Modules",
      "Professional Installation",
      "Monitoring & Maintenance Services"
    ],
    stats: [
      { value: "5MW+", label: "Capacity Installed" },
      { value: "40%", label: "Average Savings" },
      { value: "25yr", label: "System Warranty" }
    ],
    benefits: [
      "Reduce electricity bills significantly",
      "Environmentally friendly energy",
      "Government incentives available",
      "Complete warranty coverage"
    ]
  },
  {
    id: 'electrical-electronics',
    icon: Zap,
    title: "Electrical & Electronics",
    tagline: "Powering Modern Infrastructure",
    desc: "Complete electrical systems, electronic components, automation solutions, and smart technology integration for residential and commercial applications",
    image: "/electrical1.png",
    features: [
      "Electrical System Installation",
      "Electronic Components Supply",
      "Automation & Control Systems",
      "Smart Home & Building Solutions",
      "Power Distribution Systems",
      "Maintenance & Repair Services"
    ],
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: "99.9%", label: "System Reliability" },
      { value: "24/7", label: "Technical Support" }
    ],
    benefits: [
      "Energy-efficient solutions",
      "Latest technology integration",
      "Professional installation teams",
      "Comprehensive after-sales support"
    ]
  },
  {
    id: 'supplies',
    icon: Package,
    title: "General Items & Supplies",
    tagline: "Your Complete Supply Solution",
    desc: "Comprehensive stationery and printing services, educational materials, office supplies, and specialized procurement solutions",
    image: "/supplies1.png",
    features: [
      "Stationery & Office Supplies",
      "Professional Printing Services",
      "Educational Materials & Resources",
      "Specialized Procurement Services",
      "Bulk Supply Management",
      "Custom Branding Solutions"
    ],
    stats: [
      { value: "1000+", label: "Items Available" },
      { value: "24h", label: "Delivery Time" },
      { value: "50+", label: "Regular Clients" }
    ],
    benefits: [
      "One-stop shop for all supplies",
      "Competitive bulk pricing",
      "Fast and reliable delivery",
      "Quality guaranteed products"
    ]
  },
  {
    id: 'generator-parts',
    icon: Package,
    title: "Generator Systems & Parts",
    tagline: "Reliable Power When You Need It",
    desc: "Complete generator systems, spare parts, maintenance services, and power solutions for industrial, commercial, and residential applications",
    image: "/generator1.png",
    features: [
      "Generator System Installation",
      "Spare Parts & Components",
      "Preventive Maintenance Services",
      "Emergency Repair & Support",
      "Power Load Management",
      "Fuel System Solutions"
    ],
    stats: [
      { value: "300+", label: "Systems Installed" },
      { value: "99.5%", label: "Uptime Guarantee" },
      { value: "1h", label: "Emergency Response" }
    ],
    benefits: [
      "Uninterrupted power supply",
      "Genuine parts and components",
      "Regular maintenance programs",
      "Rapid emergency response"
    ]
  },
  {
    id: 'it-solutions',
    icon: Laptop,
    title: "IT Equipment & Educational Solutions",
    tagline: "Empowering Education Through Technology",
    desc: "Advanced video walls, projectors, laptops, desktops, networking & AV systems, and interactive learning tools for modern education",
    image: "/it1.png",
    features: [
      "Video Walls & Large Format Displays",
      "Interactive Projectors & Smartboards",
      "Computers, Laptops & Workstations",
      "Network Infrastructure & Cabling",
      "Audio-Visual System Integration",
      "Interactive Learning Management Tools"
    ],
    stats: [
      { value: "25+", label: "Institutions Served" },
      { value: "500+", label: "Devices Installed" },
      { value: "24/7", label: "Technical Support" }
    ],
    benefits: [
      "Latest technology from trusted brands",
      "Complete installation and configuration",
      "Training and ongoing support",
      "Scalable solutions for growth"
    ]
  },
  {
    id: 'construction',
    icon: Building2,
    title: "Construction Services",
    tagline: "Building Tomorrow's Infrastructure Today",
    desc: "Complete building construction, renovation, electrical & plumbing works, water plant installations, and professional project management",
    image: "/construction1.png",
    features: [
      "Building Construction & Civil Works",
      "Renovation & Modernization",
      "Electrical & Plumbing Systems",
      "Water Plant Installation & Filtration",
      "Professional Project Management",
      "Quality Assurance & Safety Compliance"
    ],
    stats: [
      { value: "50+", label: "Projects Completed" },
      { value: "100%", label: "Safety Record" },
      { value: "15+", label: "Years Experience" }
    ],
    benefits: [
      "Turnkey solutions from design to delivery",
      "PEC registered professional teams",
      "ISO-aligned quality management",
      "On-time, on-budget execution"
    ]
  },
  {
    id: 'transportation',
    icon: Car,
    title: "Transportation Services",
    tagline: "Moving Your Fleet Forward",
    desc: "Complete fleet management, preventive maintenance programs, vehicle refurbishment & restoration, and performance monitoring",
    image: "/transport1.png",
    features: [
      "Fleet Management & Optimization",
      "Preventive Maintenance Scheduling",
      "Vehicle Refurbishment & Restoration",
      "Performance Monitoring Systems",
      "Route Planning & Logistics",
      "Driver Training & Safety Programs"
    ],
    stats: [
      { value: "100+", label: "Vehicles Managed" },
      { value: "99%", label: "Fleet Uptime" },
      { value: "40%", label: "Cost Reduction" }
    ],
    benefits: [
      "Reduce operational costs",
      "Maximize vehicle lifespan",
      "Real-time tracking and reporting",
      "Compliance with safety standards"
    ]
  },
  {
    id: 'janitorial',
    icon: Droplets,
    title: "Janitorial Services",
    tagline: "Maintaining Excellence in Every Space",
    desc: "Professional facility cleaning, comprehensive waste management, environmental services, and hygiene maintenance programs",
    image: "/janitorial1.png",
    features: [
      "Daily Facility Cleaning Services",
      "Deep Cleaning & Sanitization",
      "Waste Management & Disposal",
      "Environmental Health Services",
      "Hygiene Maintenance Programs",
      "Specialized Equipment & Supplies"
    ],
    stats: [
      { value: "30+", label: "Facilities Maintained" },
      { value: "24/7", label: "Support Available" },
      { value: "99%", label: "Client Satisfaction" }
    ],
    benefits: [
      "Trained and certified cleaning staff",
      "Eco-friendly cleaning products",
      "Flexible scheduling options",
      "Quality control inspections"
    ]
  }
];

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
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 pt-24 sm:pt-32 pb-12 sm:pb-20">
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
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400" />
            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
              Comprehensive Solutions
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 tracking-tighter px-4"
          >
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            From construction to renewable energy, aviation to marine systems - we deliver integrated solutions that drive your success across multiple industries
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12 sm:py-20 px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content Side */}
                    <div className={`space-y-4 sm:space-y-6 lg:space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                      {/* Icon & Title */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="inline-flex w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon size={40} className="text-white" />
                        </motion.div>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 text-neutral-900 dark:text-white">
                          {service.title}
                        </h2>
                        
                        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-3 sm:mb-4 lg:mb-6">
                          {service.tagline}
                        </p>
                        
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {service.desc}
                        </p>
                      </motion.div>

                      {/* Features */}
                      <div className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
                            whileHover={{ x: 10 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neutral-700 dark:text-neutral-300 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm lg:text-base text-neutral-700 dark:text-neutral-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {service.stats.map((stat, i) => (
                          <motion.div 
                            key={i}
                            className="p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 text-center hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Benefits */}
                      <motion.div 
                        className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-neutral-900 dark:text-white">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neutral-700 dark:text-neutral-300" />
                          Key Benefits
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <motion.div 
                              key={i} 
                              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-400"
                              whileHover={{ x: 5 }}
                            >
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300 flex-shrink-0" />
                              {benefit}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            href={`/services/${service.id}`}
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                          >
                            <span className="relative z-10">
                              View Details
                            </span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-neutral-200 dark:to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={false}
                            />
                          </a>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-2 border-neutral-900 dark:border-white font-bold rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                          >
                            <span className="relative z-10">
                              Get a Quote
                            </span>
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                          </button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Visual Side - Image */}
                    <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <motion.div 
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Main Image Card */}
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 aspect-[4/3] sm:min-h-[400px]">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Icon Overlay on Hover */}
                          <motion.div 
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            initial={false}
                          >
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white drop-shadow-2xl" />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div 
                          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-bold text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-lg"
                          animate={{ 
                            y: [0, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {hoveredService === service.id ? '🔥 Hot Service' : '⭐ Popular'}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-neutral-900 dark:text-white px-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Let's discuss how our integrated solutions across construction, IT, mechanical, marine, and energy sectors can drive your success.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <span className="relative z-10">
                  Schedule Consultation
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-neutral-200 dark:to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

