// 'use client';
// import React, { useState } from 'react';
// import { FaUserPlus, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
// import Image from 'next/image';
// import { FaPhoneVolume } from "react-icons/fa";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-black/30 backdrop-blur-lg border-b border-orange-400/30 px-6 py-.5 shadow-2xl z-50 fixed top-0 left-0 w-full transition-all duration-300">
//       <div className="flex items-center justify-between">
//         {/* Logo / Brand */}
//         <Image
//           src="/logo1.jpeg"
//           alt="Logo"
//           width={100}
//           height={20}
//           className="h-12 w-auto sm:h-16 animate-glow bg-zinc-950 invert-100"
//         />
        

//         {/* Hamburger icon for mobile */}
//         <div
//           className="md:hidden text-orange-400 text-2xl cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Desktop menu */}
//         <ul className="hidden md:flex items-center space-x-6">
//           <li>
//             <a
//               href="#register"
//               className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300"
//             >
//               <FaUserPlus /> Register
//             </a>
//           </li>
//           <li>
//             <a
//               href="tel:+8951258207"
//               className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300"
//             >
//               <FaPhoneVolume /> Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 space-y-4 bg-black/60 backdrop-blur-lg rounded-lg p-4">
//           <a
//             href="#register"
//             className="block text-center px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 transition duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             <FaUserPlus className="inline mr-2" /> Register
//           </a>
//           <a
//             href="tel:+8951258207"
//             className="block text-center px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 transition duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             <FaPhone className="inline mr-2" /> Contact Us
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;




'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaPhoneVolume, FaTimes, FaUniversity, FaUserPlus } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-orange-400/30 px-3 sm:px-6 py-2 shadow-2xl z-50 fixed top-0 left-0 w-full transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 z-10">
          <Image
            src="/logo1.jpeg"
            alt="Logo"
            width={120}
            height={60}
            className="h-10 w-auto sm:h-14 md:h-16 lg:h-20 object-contain animate-glow"
            priority
          />
        </div>

        {/* Middle section - Visible on all screens */}
        <div className="flex-1 mx-2 sm:mx-4 min-w-0 overflow-hidden">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Icon - Responsive sizing */}
            <div className="bg-yellow-500 p-1 sm:p-2 md:p-3 rounded-full shadow-lg flex-shrink-0">
              <FaUniversity className="text-black text-xs sm:text-sm md:text-base lg:text-lg" />
            </div>

            {/* Text - Responsive sizing */}
            <div className="text-center sm:text-left min-w-0">
              <h1 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl whitespace-nowrap">
                INNOVATION & ENTREPRENEURSHIP
              </h1>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-medium whitespace-nowrap">
                UNIVERSITY
              </p>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex-shrink-0 text-orange-400 text-xl cursor-pointer z-10 ml-2">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex space-x-2 sm:space-x-3 lg:space-x-4">
          <a
            href="#register"
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            <FaUserPlus className="text-xs sm:text-sm" /> 
            <span>Register</span>
          </a>
          <a
            href="tel:+8951258207"
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            <FaPhoneVolume className="text-xs sm:text-sm" /> 
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg px-4 py-3 space-y-3 border-t border-orange-400/30">
          <a
            href="#register"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-orange-500/20 border border-orange-400 text-orange-300 hover:text-white transition duration-300 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <FaUserPlus /> Register Now
          </a>
          <a
            href="tel:+8951258207"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-orange-500/20 border border-orange-400 text-orange-300 hover:text-white transition duration-300 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <FaPhoneVolume /> Call Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;