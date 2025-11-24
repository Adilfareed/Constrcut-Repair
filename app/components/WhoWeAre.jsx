"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiCheckCircle, FiUsers, FiStar } from "react-icons/fi";

const stats = [
  { label: "Services", value: 30, icon: <FiAward className="text-blue-900 w-10 h-10 mx-auto mb-2" /> },
  { label: "Projects Completed", value: 500, icon: <FiCheckCircle className="text-blue-900 w-10 h-10 mx-auto mb-2" /> },
  { label: "Skilled Technicians", value: 100, icon: <FiUsers className="text-blue-900 w-10 h-10 mx-auto mb-2" /> },
  { label: "Client Satisfaction", value: 98, icon: <FiStar className="text-blue-900 w-10 h-10 mx-auto mb-2" /> },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [value]);

  return <span className="text-orange-500 font-bold text-5xl">{count}+</span>;
};

const WhoWeAre = () => {
  return (
    <section className="py-20 px-5 text-center bg-white overflow-hidden">
      <motion.div
        initial={{ x: "10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-[40px] text-blue-950 font-bold">Who We Are</h3>
        <h2 className="text-3xl font-bold text-gray-900 my-3">
          Leaders in Quality Construction
        </h2>

        <p className="text-gray-500 mb-10">
          Construct & Repair was founded on the principles of integrity, quality, and client satisfaction.
          We have a proven track record of delivering complex projects on time and within budget,
          earning the trust of clients across the region.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {stat.icon}
              <Counter value={stat.value} />
              <p className="mt-2 text-gray-700 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-900 text-white py-2 px-6 rounded-lg"
        >
          More About Us
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
