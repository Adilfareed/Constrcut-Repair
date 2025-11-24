"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Project Data
const projects = [
  { title: "Downtown Office Renovation", category: "Commercial", image: "/assets/project2.jpg" },
  { title: "Modern Residential Home", category: "Residential", image: "/assets/project3.jpg" },
  { title: "Luxury Bathroom Remodel", category: "Remodeling", image: "/assets/project4.jpg" },
  { title: "Commercial Retail Fit-Out", category: "Commercial", image: "/assets/project1.jpg" },
  
];

// ==================== PROJECT CARD ====================
function ProjectCard({ title, category, image, index }) {
  const delay = index * 0.12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      // ✅ CHANGE: Setting once: false allows the animation to repeat on every scroll into view
      viewport={{ once: false, amount: 0.3 }} 
      className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 text-left">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm font-medium text-gray-500 mt-1">{category}</p>
      </div>
    </motion.div>
  );
}

// ==================== MAIN COMPONENT ====================
export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // ✅ CHANGE: Setting once: false allows the heading animation to repeat on every scroll
          viewport={{ once: false }} 
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Our <span className="text-blue-950">Featured Projects</span>
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            A showcase of quality, innovation, and satisfaction.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} index={idx} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <button className="px-8 py-3 text-lg bg-blue-900 font-semibold text-white rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}