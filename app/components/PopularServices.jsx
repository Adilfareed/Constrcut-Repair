"use client";

import { motion } from "framer-motion";
// Importing necessary icons from the highly compatible 'lucide-react' library
import { 
  Home,           // New Home Construction
  Building,       // Commercial Projects
  Bath,           // Bathroom Renovation
  HardHat,        // Structural Repair
  PaintBucket,    // Interior Finishing (using PaintBucket for FaPaintBrush equivalent)
  Trees,          // Exterior & Landscaping
  Wrench,         // Electrical & Plumbing (Wrench/Tools)
  Ruler,          // Design & Blueprinting
  Tractor,        // Used for Roofing (general construction equipment)
  Hammer,         // Used for Kitchen Remodeling
  ArrowRight
} from "lucide-react"; 


// Define the 10 core construction and renovation services
const SERVICES = [
  {
    title: "New Home Construction",
    description: "End-to-end management of custom residential builds, from foundation to final finishing.",
    icon: Home,
    color: "text-blue-600",
  },
  {
    title: "Commercial Projects",
    description: "Building and renovation services for offices, retail spaces, and industrial facilities.",
    icon: Building,
    color: "text-red-600",
  },
  {
    title: "Kitchen Remodeling",
    description: "Modern kitchen designs, custom cabinetry, countertop installation, and layout optimization.",
    icon: Hammer, // Using Hammer for a reliable renovation visual
    color: "text-green-600",
  },
  {
    title: "Bathroom Renovation",
    description: "Complete bathroom overhauls, including tiling, plumbing, and fixture upgrades for a fresh look.",
    icon: Bath,
    color: "text-purple-600",
  },
  {
    title: "Structural Repair & Retrofitting",
    description: "Strengthening and repairing existing structures to meet modern safety and integrity standards.",
    icon: HardHat,
    color: "text-yellow-600",
  },
  {
    title: "Interior Finishing",
    description: "Professional painting, drywall installation, flooring, and detailed trim work for refined interiors.",
    icon: PaintBucket,
    color: "text-pink-600",
  },
  {
    title: "Exterior & Landscaping",
    description: "Outdoor area design, including patios, decks, hardscaping, and exterior facade improvements.",
    icon: Trees,
    color: "text-teal-600",
  },
  {
    title: "Electrical & Plumbing",
    description: "Installation and repair of complex electrical wiring, HVAC systems, and modern plumbing solutions.",
    icon: Wrench,
    color: "text-indigo-600",
  },
  {
    title: "Roofing & Waterproofing",
    description: "Installation of durable roofing systems and specialized waterproofing for long-term protection.",
    icon: Tractor, // Using Tractor as a general construction/heavy equipment icon
    color: "text-orange-600",
  },
  {
    title: "Design & Blueprinting",
    description: "Architectural consultation, 3D renderings, and complete blueprint creation and approval services.",
    icon: Ruler,
    color: "text-cyan-600",
  },
];

const PopularServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for service cards
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-orange-600 uppercase tracking-widest">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Popular Construction Services
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide reliable and high-quality services for every phase of your project, ensuring durable results and total client satisfaction.
          </p>
        </div>

        {/* Services Grid (10 Items) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon; 

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-gray-50  rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                {/* Lucide icons are used here */}
                <div className={`p-4 mx-auto w-fit rounded-full bg-orange-100 mb-4 transition-all duration-300 group-hover:scale-110 ${service.color}`}>
                    <Icon className="w-10 h-10" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-[1.02]">
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularServices;