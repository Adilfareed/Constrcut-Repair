"use client";

import QuoteForm from "./QuoteForm";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-2 justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./banner2.png"
          alt="modern architecture building construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Animated from Left to Right */}
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl sm:mt-2 font-bold leading-tight">
              Renovating Spaces, Constructing Dreams.
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg">
              We deliver professional construction and renovation services with
              top-quality workmanship and unmatched client satisfaction from
              start to finish.
            </p>
          </motion.div>

          {/* Right Content - Animated from Right to Left */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 10, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <QuoteForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
