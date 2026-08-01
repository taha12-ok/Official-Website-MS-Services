import { LucideIcon, LifeBuoy, Plane, Cpu, Wrench, Sun, Zap, Package, Building2, Car, Droplets, Laptop, Bot } from 'lucide-react';

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  detailedDescription: string;
  features: string[];
  stats: ServiceStat[];
  benefits: string[];
  gallery: string[];
  processSteps: ProcessStep[];
  ctaText: string;
  /** Marks a flagship service so the UI can highlight it. Optional. */
  featured?: boolean;
  /** Optional FAQ list, rendered on the detail page when present. */
  faqs?: ServiceFaq[];
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    icon: Bot,
    title: "AI Automation",
    tagline: "Intelligent Automation for Modern Enterprises",
    desc: "Enterprise AI automation solutions — from AI customer support, voice and chat agents to CRM, sales, WhatsApp, email, and full business process automation that scales your operations without adding headcount.",
    detailedDescription: "M.S Services & Trading Co. now delivers enterprise-grade AI Automation that brings intelligent, always-on operations to your business. We design, build, and integrate AI agents and automated workflows that handle customer conversations, qualify leads, book appointments, process documents, and connect your existing tools — around the clock. Built with the same reliability and standards we've delivered since 2005, our AI solutions reduce manual workload, accelerate response times, and let your team focus on high-value work.",
    features: [
      "AI Customer Support",
      "AI Voice Agents",
      "AI Chatbots",
      "AI Lead Qualification",
      "AI Appointment Booking",
      "AI CRM Automation",
      "AI Sales Automation",
      "AI WhatsApp Automation",
      "AI Email Automation",
      "AI Workflow Automation",
      "AI Business Process Automation",
      "AI Knowledge Base",
      "AI Document Processing",
      "AI Analytics",
      "AI Integrations",
    ],
    stats: [
      { value: "24/7", label: "Automated Operations" },
      { value: "80%", label: "Faster Responses" },
      { value: "15+", label: "AI Capabilities" },
    ],
    benefits: [
      "Reduce repetitive manual workload",
      "Instant, 24/7 customer responses",
      "Scale operations without adding headcount",
      "Seamless integration with existing tools",
    ],
    gallery: [
      // Placeholder imagery — reuses existing IT/technology visuals until
      // dedicated AI Automation assets (/ai1.png … /ai8.png) are provided.
      "/it1.png",
      "/it2.png",
      "/it3.png",
      "/it4.png",
      "/it5.png",
      "/it6.png",
      "/it7.png",
      "/it8.png",
    ],
    processSteps: [
      { title: "Discovery & Assessment", description: "We map your workflows and identify the highest-impact automation opportunities." },
      { title: "Solution Design", description: "Designing AI agents and automated workflows tailored to your business processes." },
      { title: "Integration", description: "Connecting AI to your existing CRM, WhatsApp, email, and business systems." },
      { title: "Training & Tuning", description: "Training the AI on your knowledge base and refining responses for accuracy." },
      { title: "Deployment", description: "Launching automation into live operations with monitoring and safeguards." },
      { title: "Optimization & Support", description: "Continuous monitoring, analytics, and ongoing improvement of your AI systems." },
    ],
    ctaText: "Contact us today to discuss your AI Automation project or book a free AI consultation.",
    featured: true,
    faqs: [
      {
        question: "What is AI Automation and how can it help my business?",
        answer: "AI Automation uses artificial intelligence to handle repetitive tasks and customer interactions automatically — such as answering queries, qualifying leads, booking appointments, and processing documents. It reduces manual workload, delivers instant 24/7 responses, and lets your team focus on higher-value work.",
      },
      {
        question: "Can you integrate AI with my existing CRM?",
        answer: "Yes. We connect AI automation to your CRM so records, leads, and follow-ups stay updated automatically — reducing manual data entry and keeping your sales pipeline accurate.",
      },
      {
        question: "Can you integrate with our ERP or internal systems?",
        answer: "In most cases, yes. Where your ERP or internal systems support integration, we connect AI workflows to them securely. During discovery we confirm exactly which systems can be integrated and how.",
      },
      {
        question: "Do you offer WhatsApp automation?",
        answer: "Yes. Using the WhatsApp Business API, we can automate customer conversations, answer common questions, qualify leads, and send updates — all within WhatsApp.",
      },
      {
        question: "Can you automate our email responses and follow-ups?",
        answer: "Yes. We build email automation that handles replies, routes messages to the right team, and sends timely follow-ups, so no enquiry is missed.",
      },
      {
        question: "How do AI chatbots work on our website?",
        answer: "Our AI chatbots answer customer questions instantly using your business information and knowledge base. They run 24/7, handle common queries automatically, and can hand off to your team when needed.",
      },
      {
        question: "What is the AI Quote Generator?",
        answer: "The AI Quote Generator drafts quotes directly from customer requests based on your pricing rules and offerings — reducing turnaround time and keeping pricing consistent.",
      },
      {
        question: "Can you build a custom AI solution for our specific process?",
        answer: "Yes. Beyond ready-made automations, we design custom AI workflows around your specific processes. We start with a discovery session to map your requirements and recommend the right approach.",
      },
      {
        question: "Is my business data secure?",
        answer: "Data security is central to every deployment. We follow strict access controls and integrate with your systems using secure, permission-based connections, keeping your information protected.",
      },
      {
        question: "What kind of support do you provide after deployment?",
        answer: "We provide continuous support — monitoring performance, refining responses, and improving your AI systems over time — so your automation keeps working reliably as your business grows.",
      },
    ],
  },
  {
    id: 'life-raft',
    icon: LifeBuoy,
    title: "Life Raft & Safety Equipment",
    tagline: "Ensuring Safety in Critical Situations",
    desc: "Complete life raft systems, marine safety equipment, emergency gear, and comprehensive safety solutions for maritime and industrial applications",
    detailedDescription: "Safety is paramount in maritime and industrial operations. We provide internationally certified life rafts, emergency evacuation systems, and comprehensive safety equipment that meets SOLAS and IMO regulations. Our solutions ensure your crew and personnel are protected in emergency situations with reliable, tested equipment.",
    features: [
      "Marine Life Raft Systems",
      "Emergency Evacuation Equipment",
      "Safety & Survival Gear",
      "Inspection & Maintenance Services",
      "Training & Certification",
      "Regulatory Compliance Solutions",
    ],
    stats: [
      { value: "500+", label: "Units Supplied" },
      { value: "100%", label: "Safety Certified" },
      { value: "24/7", label: "Emergency Support" },
    ],
    benefits: [
      "International safety standards compliance",
      "Regular inspection and maintenance",
      "Emergency response training",
      "Complete documentation and certification",
    ],
    gallery: ["/raft1.png", "/raft2.png", "/raft3.png", "/raft4.png", "/raft5.png", "/raft6.png", "/raft7.png", "/raft8.png"],
    processSteps: [
      { title: "Safety Assessment", description: "Evaluating your safety equipment needs and compliance." },
      { title: "Equipment Selection", description: "Recommending appropriate certified safety equipment." },
      { title: "Supply & Installation", description: "Providing and installing safety systems." },
      { title: "Staff Training", description: "Comprehensive safety training for your personnel." },
      { title: "Regular Inspections", description: "Scheduled maintenance and certification." },
      { title: "Emergency Support", description: "24/7 emergency response and support services." },
    ],
    ctaText: "Contact us today to discuss your life raft and safety equipment needs.",
  },
  {
    id: 'aviation-parts',
    icon: Plane,
    title: "Aviation Parts & Equipment",
    tagline: "Precision Parts for Aerospace Excellence",
    desc: "Aircraft components, aviation spare parts, maintenance equipment, and specialized aerospace solutions with certified quality assurance",
    detailedDescription: "We supply certified aviation-grade components and equipment for aircraft maintenance, repair, and overhaul operations. Our extensive inventory includes genuine OEM parts, approved alternatives, and specialized aerospace tooling. Every component meets stringent FAA and EASA standards with complete traceability and certification.",
    features: [
      "Aircraft Spare Parts Supply",
      "Aviation Component Maintenance",
      "Ground Support Equipment",
      "Aerospace Tooling & Instruments",
      "Quality Assurance & Certification",
      "Technical Support Services",
    ],
    stats: [
      { value: "1000+", label: "Parts Available" },
      { value: "FAA", label: "Certified Quality" },
      { value: "48h", label: "Delivery Guarantee" },
    ],
    benefits: [
      "Certified aviation-grade components",
      "Rapid delivery and logistics",
      "Technical expertise and support",
      "Compliance with aviation regulations",
    ],
    gallery: ["/aviation1.png", "/aviation2.png", "/aviation3.png", "/aviation4.png", "/aviation5.png", "/aviation6.png", "/aviation7.png", "/aviation8.png"],
    processSteps: [
      { title: "Parts Identification", description: "Identifying exact parts with detailed specifications." },
      { title: "Sourcing & Verification", description: "Sourcing certified parts with proper documentation." },
      { title: "Quality Inspection", description: "Rigorous quality checks and certification." },
      { title: "Logistics Coordination", description: "Efficient shipping and delivery management." },
      { title: "Documentation", description: "Complete certification and traceability documents." },
      { title: "Technical Support", description: "Ongoing technical assistance and warranty." },
    ],
    ctaText: "Contact us today to discuss your aviation parts and equipment needs.",
  },
  {
    id: 'marine-electronics-mechanical',
    icon: Cpu,
    title: "Marine Electronics & Mechanical Parts",
    tagline: "Advanced Solutions for Maritime Operations",
    desc: "Specialized marine electronics, navigation systems, mechanical components, and integrated solutions for maritime vessels and offshore operations",
    detailedDescription: "We provide comprehensive marine electronics and mechanical solutions for vessels of all sizes. From navigation and communication systems to engine controls and propulsion parts, we supply IMO-compliant equipment with complete technical support. Our expertise covers commercial vessels, naval ships, and offshore platforms.",
    features: [
      "Marine Navigation Systems",
      "Ship Communication Equipment",
      "Engine Control Systems",
      "Marine Electrical Components",
      "Propulsion System Parts",
      "Offshore Platform Equipment",
    ],
    stats: [
      { value: "200+", label: "Vessels Equipped" },
      { value: "100%", label: "Marine Certified" },
      { value: "ISO", label: "Quality Standards" },
    ],
    benefits: [
      "IMO compliance guaranteed",
      "Rugged marine-grade components",
      "Global shipping support",
      "Comprehensive technical documentation",
    ],
    gallery: ["/marine1.png", "/marine2.png", "/marine3.png", "/marine4.png", "/marine5.png", "/marine6.png", "/marine7.png", "/marine8.png"],
    processSteps: [
      { title: "Marine Requirements", description: "Understanding vessel specifications and needs." },
      { title: "Equipment Specification", description: "Selecting IMO-compliant marine equipment." },
      { title: "Procurement", description: "Sourcing certified marine components." },
      { title: "Installation Support", description: "Technical assistance for installation." },
      { title: "Documentation", description: "Complete certification and compliance docs." },
      { title: "After-Sales Support", description: "Ongoing technical support and spare parts." },
    ],
    ctaText: "Contact us today to discuss your marine electronics and mechanical parts needs.",
  },
  {
    id: 'mechanical-services',
    icon: Wrench,
    title: "Mechanical Services",
    tagline: "Precision Engineering for Industrial Excellence",
    desc: "Comprehensive mechanical solutions including machinery installation, maintenance, repair services, and industrial equipment support",
    detailedDescription: "Our mechanical services keep your industrial operations running at peak efficiency. We provide expert installation, maintenance, and repair of mechanical systems including pumps, compressors, conveyors, and industrial machinery. Our certified technicians use precision tools and proven methodologies to minimize downtime and maximize equipment lifespan.",
    features: [
      "Industrial Machinery Installation",
      "Preventive Maintenance Programs",
      "Mechanical Repair & Overhaul",
      "Equipment Calibration & Testing",
      "Pump & Compressor Services",
      "Conveyor Systems Maintenance",
    ],
    stats: [
      { value: "150+", label: "Machines Serviced" },
      { value: "98%", label: "Uptime Guarantee" },
      { value: "24/7", label: "Emergency Support" },
    ],
    benefits: [
      "Reduced equipment downtime",
      "Extended machinery lifespan",
      "Cost-effective maintenance plans",
      "Expert technical support",
    ],
    gallery: ["/mechanical1.png", "/mechanical2.png", "/mechanical3.png", "/mechanical4.png", "/mechanical5.png", "/mechanical6.png", "/mechanical7.png", "/mechanical8.png"],
    processSteps: [
      { title: "Equipment Assessment", description: "Evaluating machinery condition and needs." },
      { title: "Maintenance Planning", description: "Creating customized maintenance schedules." },
      { title: "Spare Parts Management", description: "Stocking critical spare parts." },
      { title: "Regular Servicing", description: "Scheduled maintenance and lubrication." },
      { title: "Performance Monitoring", description: "Tracking equipment performance metrics." },
      { title: "Emergency Repairs", description: "Rapid response to breakdowns." },
    ],
    ctaText: "Contact us today to discuss your mechanical services needs.",
  },
  {
    id: 'solar',
    icon: Sun,
    title: "Solar System Installation",
    tagline: "Powering a Sustainable Future",
    desc: "Complete solar solutions including on-grid, hybrid, and off-grid systems with Tier-1 modules and professional installation",
    detailedDescription: "Embrace clean, renewable energy with our comprehensive solar solutions. We design and install customized solar power systems that reduce your electricity costs while contributing to environmental sustainability. Our expertise covers residential, commercial, and industrial installations with Tier-1 solar panels and premium components backed by extensive warranties.",
    features: [
      "On-Grid Solar Systems",
      "Hybrid Solar Solutions",
      "Off-Grid Power Systems",
      "Tier-1 Solar Modules",
      "Professional Installation",
      "Monitoring & Maintenance Services",
    ],
    stats: [
      { value: "5MW+", label: "Capacity Installed" },
      { value: "40%", label: "Average Savings" },
      { value: "25yr", label: "System Warranty" },
    ],
    benefits: [
      "Reduce electricity bills significantly",
      "Environmentally friendly energy",
      "Government incentives available",
      "Complete warranty coverage",
    ],
    gallery: ["/solar1.png", "/solar2.png", "/solar3.png", "/solar4.png", "/solar5.png", "/solar6.png", "/solar7.png", "/solar8.png"],
    processSteps: [
      { title: "Site Assessment", description: "Evaluating your property's solar potential and energy needs." },
      { title: "System Design", description: "Creating customized solar system design and specifications." },
      { title: "Proposal & Financing", description: "Detailed proposal with financing and incentive options." },
      { title: "Installation", description: "Professional installation by certified technicians." },
      { title: "Commissioning", description: "System testing and grid connection procedures." },
      { title: "Monitoring & Maintenance", description: "Ongoing monitoring and maintenance services." },
    ],
    ctaText: "Contact us today to discuss your solar installation project.",
  },
  {
    id: 'electrical-electronics',
    icon: Zap,
    title: "Electrical & Electronics",
    tagline: "Powering Modern Infrastructure",
    desc: "Complete electrical systems, electronic components, automation solutions, and smart technology integration for residential and commercial applications",
    detailedDescription: "We provide comprehensive electrical and electronics solutions for modern buildings and infrastructure. From power distribution systems to smart automation, our expert team designs, installs, and maintains electrical systems that are safe, efficient, and future-ready. We specialize in energy-efficient solutions that reduce costs while improving performance.",
    features: [
      "Electrical System Installation",
      "Electronic Components Supply",
      "Automation & Control Systems",
      "Smart Home & Building Solutions",
      "Power Distribution Systems",
      "Maintenance & Repair Services",
    ],
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: "99.9%", label: "System Reliability" },
      { value: "24/7", label: "Technical Support" },
    ],
    benefits: [
      "Energy-efficient solutions",
      "Latest technology integration",
      "Professional installation teams",
      "Comprehensive after-sales support",
    ],
    gallery: ["/electrical1.png", "/electrical2.png", "/electrical3.png", "/electrical4.png", "/electrical5.png", "/electrical6.png", "/electrical7.png", "/electrical8.png"],
    processSteps: [
      { title: "Electrical Assessment", description: "Evaluating power needs and existing infrastructure." },
      { title: "System Design", description: "Creating detailed electrical system plans." },
      { title: "Component Procurement", description: "Sourcing quality electrical components." },
      { title: "Installation", description: "Professional installation by licensed electricians." },
      { title: "Testing & Commissioning", description: "Comprehensive testing and safety verification." },
      { title: "Maintenance", description: "Regular maintenance and support services." },
    ],
    ctaText: "Contact us today to discuss your electrical and electronics project.",
  },
  {
    id: 'supplies',
    icon: Package,
    title: "General Items & Supplies",
    tagline: "Your Complete Supply Solution",
    desc: "Comprehensive stationery and printing services, educational materials, office supplies, and specialized procurement solutions",
    detailedDescription: "We provide a complete range of general supplies for educational institutions, government offices, and corporate clients. From daily stationery to bulk educational materials, our procurement solutions ensure you have everything you need, when you need it. Our efficient supply chain management guarantees timely delivery and competitive pricing.",
    features: [
      "Stationery & Office Supplies",
      "Professional Printing Services",
      "Educational Materials & Resources",
      "Specialized Procurement Services",
      "Bulk Supply Management",
      "Custom Branding Solutions",
    ],
    stats: [
      { value: "1000+", label: "Items Available" },
      { value: "24h", label: "Delivery Time" },
      { value: "50+", label: "Regular Clients" },
    ],
    benefits: [
      "One-stop shop for all supplies",
      "Competitive bulk pricing",
      "Fast and reliable delivery",
      "Quality guaranteed products",
    ],
    gallery: ["/supplies1.png", "/supplies2.png", "/supplies3.png", "/supplies4.png", "/supplies5.png", "/supplies6.png", "/supplies7.png", "/supplies8.png"],
    processSteps: [
      { title: "Requirement Analysis", description: "Understanding your supply needs and preferences." },
      { title: "Product Sourcing", description: "Identifying the best products at competitive prices." },
      { title: "Quote Preparation", description: "Providing detailed quotations and options." },
      { title: "Order Processing", description: "Efficient order management and tracking." },
      { title: "Quality Check", description: "Ensuring all products meet quality standards." },
      { title: "Delivery & Support", description: "Timely delivery with after-sales support." },
    ],
    ctaText: "Contact us today to discuss your supply and procurement needs.",
  },
  {
    id: 'generator-parts',
    icon: Package,
    title: "Generator Systems & Parts",
    tagline: "Reliable Power When You Need It",
    desc: "Complete generator systems, spare parts, maintenance services, and power solutions for industrial, commercial, and residential applications",
    detailedDescription: "Never experience downtime with our comprehensive generator solutions. We supply, install, and maintain diesel and gas generators from leading manufacturers. Our preventive maintenance programs ensure your backup power systems are always ready when you need them most. We serve hospitals, data centers, industries, and critical facilities.",
    features: [
      "Generator System Installation",
      "Spare Parts & Components",
      "Preventive Maintenance Services",
      "Emergency Repair & Support",
      "Power Load Management",
      "Fuel System Solutions",
    ],
    stats: [
      { value: "300+", label: "Systems Installed" },
      { value: "99.5%", label: "Uptime Guarantee" },
      { value: "1h", label: "Emergency Response" },
    ],
    benefits: [
      "Uninterrupted power supply",
      "Genuine parts and components",
      "Regular maintenance programs",
      "Rapid emergency response",
    ],
    gallery: ["/generator1.png", "/generator2.png", "/generator3.png", "/generator4.png", "/generator5.png", "/generator6.png", "/generator7.png", "/generator8.png"],
    processSteps: [
      { title: "Power Analysis", description: "Assessing your power requirements and load." },
      { title: "Generator Selection", description: "Recommending appropriate generator capacity." },
      { title: "Installation", description: "Professional installation and commissioning." },
      { title: "Training", description: "Operating training for your staff." },
      { title: "Maintenance Schedule", description: "Setting up preventive maintenance program." },
      { title: "Emergency Support", description: "24/7 emergency repair services." },
    ],
    ctaText: "Contact us today to discuss your generator systems and parts needs.",
  },
  {
    id: 'it-solutions',
    icon: Laptop,
    title: "IT Equipment & Educational Solutions",
    tagline: "Empowering Education Through Technology",
    desc: "Advanced video walls, projectors, laptops, desktops, networking & AV systems, and interactive learning tools for modern education",
    detailedDescription: "We transform educational environments with cutting-edge technology solutions. Our comprehensive offerings include interactive displays, smart classroom equipment, and complete IT infrastructure that enhances learning experiences and operational efficiency. From video walls to network infrastructure, we provide end-to-end technology solutions tailored to educational institutions.",
    features: [
      "Video Walls & Large Format Displays",
      "Interactive Projectors & Smartboards",
      "Computers, Laptops & Workstations",
      "Network Infrastructure & Cabling",
      "Audio-Visual System Integration",
      "Interactive Learning Management Tools",
    ],
    stats: [
      { value: "25+", label: "Institutions Served" },
      { value: "500+", label: "Devices Installed" },
      { value: "24/7", label: "Technical Support" },
    ],
    benefits: [
      "Latest technology from trusted brands",
      "Complete installation and configuration",
      "Training and ongoing support",
      "Scalable solutions for growth",
    ],
    gallery: ["/it1.png", "/it2.png", "/it3.png", "/it4.png", "/it5.png", "/it6.png", "/it7.png", "/it8.png"],
    processSteps: [
      { title: "Needs Assessment", description: "Understanding your educational goals and technical requirements." },
      { title: "Solution Design", description: "Creating customized IT infrastructure plans tailored to your needs." },
      { title: "Equipment Procurement", description: "Sourcing the best technology from trusted global brands." },
      { title: "Installation & Integration", description: "Professional setup and seamless integration with existing systems." },
      { title: "Training & Documentation", description: "Comprehensive training for staff and complete technical documentation." },
      { title: "Support & Maintenance", description: "24/7 technical support and regular maintenance services." },
    ],
    ctaText: "Contact us today to discuss your IT equipment and educational solutions.",
  },
  {
    id: 'construction',
    icon: Building2,
    title: "Construction Services",
    tagline: "Building Tomorrow's Infrastructure Today",
    desc: "Complete building construction, renovation, electrical & plumbing works, water plant installations, and professional project management",
    detailedDescription: "With over 15 years of excellence in construction, M.S Services & Trading Co. delivers comprehensive building solutions that combine innovative design, quality materials, and expert craftsmanship. Our team of PEC-registered professionals has successfully completed 50+ projects across Pakistan, specializing in government facilities, educational institutions, and commercial developments.",
    features: [
      "Building Construction & Civil Works",
      "Renovation & Modernization",
      "Electrical & Plumbing Systems",
      "Water Plant Installation & Filtration",
      "Professional Project Management",
      "Quality Assurance & Safety Compliance",
    ],
    stats: [
      { value: "50+", label: "Projects Completed" },
      { value: "100%", label: "Safety Record" },
      { value: "15+", label: "Years Experience" },
    ],
    benefits: [
      "Turnkey solutions from design to delivery",
      "PEC registered professional teams",
      "ISO-aligned quality management",
      "On-time, on-budget execution",
    ],
    gallery: ["/construction1.png", "/construction2.png", "/construction3.png", "/construction4.png", "/construction5.png", "/construction6.png", "/construction7.png", "/construction8.png"],
    processSteps: [
      { title: "Initial Consultation & Site Assessment", description: "We begin with a comprehensive consultation to understand your vision, requirements, and budget. Our team conducts thorough site assessments." },
      { title: "Design & Planning", description: "Our architects and engineers develop detailed plans. We handle all permits and regulatory compliance." },
      { title: "Pre-Construction Preparation", description: "Site preparation, material procurement, and team mobilization with quality control protocols." },
      { title: "Construction Execution", description: "Systematic construction with regular monitoring, quality checks, and stakeholder updates." },
      { title: "Quality Assurance & Testing", description: "Comprehensive testing and final verification to ensure compliance." },
      { title: "Handover & Support", description: "Complete project handover with documentation and ongoing support." },
    ],
    ctaText: "Contact us today to discuss your construction project.",
  },
  {
    id: 'transportation',
    icon: Car,
    title: "Transportation Services",
    tagline: "Moving Your Fleet Forward",
    desc: "Complete fleet management, preventive maintenance programs, vehicle refurbishment & restoration, and performance monitoring",
    detailedDescription: "Our transportation services optimize your vehicle operations through comprehensive fleet management solutions. We handle everything from routine maintenance to complete vehicle refurbishment, ensuring maximum uptime and cost efficiency. Our data-driven approach and experienced technicians keep your fleet running smoothly.",
    features: [
      "Fleet Management & Optimization",
      "Preventive Maintenance Scheduling",
      "Vehicle Refurbishment & Restoration",
      "Performance Monitoring Systems",
      "Route Planning & Logistics",
      "Driver Training & Safety Programs",
    ],
    stats: [
      { value: "100+", label: "Vehicles Managed" },
      { value: "99%", label: "Fleet Uptime" },
      { value: "40%", label: "Cost Reduction" },
    ],
    benefits: [
      "Reduce operational costs",
      "Maximize vehicle lifespan",
      "Real-time tracking and reporting",
      "Compliance with safety standards",
    ],
    gallery: ["/transport1.png", "/transport2.png", "/transport3.png", "/transport4.png", "/transport5.png", "/transport6.png", "/transport7.png", "/transport8.png"],
    processSteps: [
      { title: "Fleet Analysis", description: "Comprehensive assessment of your current fleet operations." },
      { title: "Strategy Development", description: "Creating customized fleet management strategies." },
      { title: "System Implementation", description: "Deploying tracking and maintenance systems." },
      { title: "Regular Maintenance", description: "Scheduled preventive maintenance services." },
      { title: "Performance Tracking", description: "Real-time monitoring and reporting." },
      { title: "Optimization", description: "Continuous improvement of fleet efficiency." },
    ],
    ctaText: "Contact us today to discuss your transportation services needs.",
  },
  {
    id: 'janitorial',
    icon: Droplets,
    title: "Janitorial Services",
    tagline: "Maintaining Excellence in Every Space",
    desc: "Professional facility cleaning, comprehensive waste management, environmental services, and hygiene maintenance programs",
    detailedDescription: "Our janitorial services maintain the highest standards of cleanliness and hygiene across all types of facilities. With trained staff, eco-friendly products, and systematic approaches, we ensure spotless, healthy environments for your operations. We serve educational institutions, corporate offices, healthcare facilities, and government buildings.",
    features: [
      "Daily Facility Cleaning Services",
      "Deep Cleaning & Sanitization",
      "Waste Management & Disposal",
      "Environmental Health Services",
      "Hygiene Maintenance Programs",
      "Specialized Equipment & Supplies",
    ],
    stats: [
      { value: "30+", label: "Facilities Maintained" },
      { value: "24/7", label: "Support Available" },
      { value: "99%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Trained and certified cleaning staff",
      "Eco-friendly cleaning products",
      "Flexible scheduling options",
      "Quality control inspections",
    ],
    gallery: ["/janitorial1.png", "/janitorial2.png", "/janitorial3.png", "/janitorial4.png", "/janitorial5.png", "/janitorial6.png", "/janitorial7.png", "/janitorial8.png"],
    processSteps: [
      { title: "Facility Assessment", description: "Detailed evaluation of cleaning needs and facility requirements." },
      { title: "Custom Plan Development", description: "Creating tailored cleaning schedules and protocols." },
      { title: "Team Deployment", description: "Assigning trained cleaning professionals to your facility." },
      { title: "Regular Service Delivery", description: "Consistent cleaning services as per agreed schedule." },
      { title: "Quality Monitoring", description: "Regular inspections and quality control checks." },
      { title: "Feedback & Improvement", description: "Continuous improvement based on your feedback." },
    ],
    ctaText: "Contact us today to discuss your janitorial services needs.",
  },
];

export const navServices = services.map((s) => ({
  name: s.title,
  href: `/services/${s.id}`,
}));

/** The flagship service (AI Automation), for highlighting in UI. */
export const featuredService: Service | undefined = services.find((s) => s.featured);

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
