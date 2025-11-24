"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src='/assets/logo4.png' alt="Logo" width={100} height={2000} />
          
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/services" className="hover:text-black transition">Services</Link>
          <Link href="/projects" className="hover:text-black transition">Projects</Link>
          <Link href="/about" className="hover:text-black transition">About Us</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>

          <Link href="/quote">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
              Request a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 space-y-4 text-center text-gray-700 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-black">Services</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:text-black">Projects</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-black">About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-black">Contact</Link>

          <Link href="/quote">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full w-[80%] mx-auto transition"
            >
              Request a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
