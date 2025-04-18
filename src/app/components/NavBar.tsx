
'use client';
import React, { useState } from 'react';
import { FaUserPlus, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-orange-400/30 px-6 py-5 shadow-2xl z-50 fixed top-0 left-0 w-full transition-all duration-300 ">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl sm:text-3xl font-extrabold tracking-widest text-orange-400 font-mono animate-glow">
          🤖 IEU
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="md:hidden text-orange-400 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a
              href="#register"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300"
            >
              <FaUserPlus /> Register
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300"
            >
              <FaPhone /> Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a
            href="#register"
            className="block text-center px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <FaUserPlus className="inline mr-2" /> Register
          </a>
          <a
            href="#contact"
            className="block text-center px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <FaPhone className="inline mr-2" /> Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

