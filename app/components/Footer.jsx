"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-gradient-to-r from-[#dce8ff] via-[#9ebcff] to-[#7ad6ff] text-[#0e2a47] pt-16 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Company</h3>
          <p className="text-[15px] leading-6 mb-6">
            Construct & Repair delivers reliable home and Commercial maintenance, repair, and
            construction services, combining quality work, timely execution,
            and a hassle-free experience for every customer.
          </p>

          <p className="text-sm">
            Copyright © 2025{" "}
            <span className="font-semibold">Construct & Repair</span>.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-[15px]">
            {[
              "Home",
              "Services",
              "Blog",
              "Terms & Conditions",
              "Account Deletion",
            ].map((item, i) => (
              <li
                key={i}
                className="pb-2 border-b border-gray-300 hover:text-black cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <ul className="text-[15px] leading-7">
            <li>(555) 123-4567</li>
            <li className="pt-2">contact@constructandrepair.com</li>
            <li className="pt-2">
           main Shahra-e-faisal Karchi
            </li>
            <li className="pt-2">Monday - Sunday 09:00am - 12:00am</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-3 text-[15px]">
            {[
              "Commercial Construction",
              "Renovation  Services",
              "Electrician Services",
              "Carpentry Services",
              "Residential Construction",
            ].map((item, i) => (
              <li
                key={i}
                className="pb-2 border-b border-gray-300 hover:text-black  font-semibold cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
