"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const OrderNowSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white shadow-lg p-6">
      {/* Order Now Button - Left to Right Animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#03bacc] text-white px-10 py-6 rounded-lg flex items-center justify-between w-60 md:w-72 shadow-lg cursor-pointer hover:bg-blue-600 transition-all relative"
      >
    <Link href="/contact">  <span className="text-xl font-bold">BOOK NOW</span> </Link>  
        <span className="text-xl">
          <FaArrowRightLong />
        </span>
      </motion.div>

      {/* Contact Details Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-6 md:mt-0 md:ml-6 w-full max-w-2xl">
        {/* Email Section - Right to Left Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white p-6 shadow-md rounded-lg flex flex-col w-full border border-gray-300"
        >
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <div className="flex items-center space-x-3 mt-3">
            <FaEnvelope className="text-gray-500 text-2xl" />
            <a href="mailto:info@freshcool.com" className="text-blue-500 text-lg hover:underline">
              info@freshcool.com
            </a>
          </div>
        </motion.div>

        {/* Phone Section - Right to Left Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white p-6 shadow-md rounded-lg flex flex-col w-full border border-gray-300"
        >
          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
          <div className="flex items-center space-x-3 mt-3">
            <FaPhone className="text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">+923303949638</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderNowSection;
