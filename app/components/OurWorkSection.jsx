"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Next.js image optimization
import { FaLightbulb, FaTasks, FaUsers, FaTruck } from "react-icons/fa";
import chillertruck from "../../../public/assets/chillertruck.png";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 50; // Interval duration
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <motion.span>{count.toLocaleString()}</motion.span>;
};

const OurWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="bg-gray-100 py-12 px-6 md:px-20 text-center">
      <h3 className="text-blue-600 uppercase text-sm font-semibold">Our Work</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
        We Create A Honest, Hassle-Free And <br />
        Quality Moving Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <Image
            src={chillertruck}
            alt="Moving Truck"
            className="w-full rounded-lg shadow-lg"
            priority
          />
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Satisfied Clients */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="bg-white p-6 border border-blue-400 rounded-lg shadow-md"
          >
            <FaLightbulb className="text-orange-500 text-3xl mb-2 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800">
              <Counter target={1200} />
            </h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </motion.div>

          {/* Jobs Done */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white p-6 border border-blue-400 rounded-lg shadow-md"
          >
            <FaTasks className="text-orange-500 text-3xl mb-2 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800">
              <Counter target={9600} />
            </h3>
            <p className="text-gray-600">Jobs Done</p>
          </motion.div>

          {/* Experienced Team */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white p-6 border border-blue-400 rounded-lg shadow-md"
          >
            <FaUsers className="text-orange-500 text-3xl mb-2 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800">
              <Counter target={60} />
            </h3>
            <p className="text-gray-600 ">Experienced Team</p>
          </motion.div>

          {/* Vehicles */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white p-6 border border-blue-400 rounded-lg shadow-md"
          >
            <FaTruck className="text-orange-500 text-3xl mb-2 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800">
              <Counter target={60} />+
            </h3>
            <p className="text-gray-600">Vehicles</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
