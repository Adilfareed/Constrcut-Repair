"use client";

import { motion } from "framer-motion";
import { FaHome, FaTools, FaBuilding } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    title: "Home Renovation",
    description:
      "Complete home maintenance and renovation. From minor repairs to major upgrades.",
    icon: <FaHome size={32} />,
  },
  {
    title: "Construction & Building",
    description:
      "Expert construction services for new residential and commercial projects.",
    icon: <FaTools size={32} />,
  },
  {
    title: "Commercial Services",
    description:
      "Specialized construction and renovation solutions for offices, retail, and industrial spaces.",
    icon: <FaBuilding size={32} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeIn" },
  }),
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-yellow-500 flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600">{service.description}</p>

              {/* Updated Arrow Button */}
              <div className="flex justify-center mt-6">
                <button className="w-12 h-12 flex items-center justify-center bg-[#001F4D] rounded-full text-white hover:opacity-90 transition-all duration-300">
                  <BsArrowRight size={22} strokeWidth={1} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
