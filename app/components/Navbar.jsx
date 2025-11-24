"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm  " style={{
        background:
          "linear-gradient(90deg, rgba(225,244,255,1) 0%, rgba(204,230,255,1) 50%, rgba(255,255,255,1) 100%)",
      }}>
      <div className="container mx-auto flex justify-between items-center px-2">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center  cursor-pointer">
            <Image src='/assets/logo4.png' alt="Logo" width={120} height={200} />
          
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-bold space-x-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/" className="hover:text-black transition">Services</Link>
          <Link href="/" className="hover:text-black transition">Projects</Link>
          <Link href="/" className="hover:text-black transition">About Us</Link>
          <Link href="/" className="hover:text-black transition">Contact</Link>

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
        <div className="md:hidden bg-white shadow-lg py-3 font-bold space-y-3 text-center text-gray-700 ">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">Home</Link>
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">Services</Link>
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">Projects</Link>
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">About Us</Link>
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-black">Contact</Link>

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
