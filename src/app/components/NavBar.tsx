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
import { FaBars, FaPhoneVolume, FaTimes, FaUserPlus } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-orange-400/30 px-3 py-2 shadow-2xl z-50 fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between">
        {/* Logo - Left side */}
        <div className="w-16 flex-shrink-0">
          <Image
            src="/IEU_Final_Logos__2_-removebg-preview.png"
            alt="Logo"
            width={64}
            height={64}
            priority
          />
        </div>

        {/* Centered Text */}
        <div className="flex-1 flex justify-center">
          <div className="text-center">
            <h1 className="text-zinc-300 font-bold text-xs sm:text-base md:text-3xl whitespace-nowrap">
              {/* INNOVATION & ENTREPRENEURSHIP UNI */}
              Innovation & Entrepreneurship Uni
            </h1>
            {/* <p className="text-white text-xs sm:text-base md:text-lg font-medium whitespace-nowrap">
              UNI
            </p> */}
          </div>
        </div>

        {/* Right side - Menu button or CTAs */}
        <div className="w-16 flex-shrink-0 flex justify-end">
          {/* Mobile menu button */}
          <div className="md:hidden text-orange-400 text-xl cursor-pointer">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex space-x-2">
            <a
              href="#register"
              className="flex items-center gap-1 px-3 py-1 rounded-md border border-white text-white hover:text-white hover:bg-orange-500/10 text-sm"
            >
              <FaUserPlus /> <span>Register</span>
            </a>
            <a
              href="https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A"
              className="flex items-center gap-1 px-3 py-1 rounded-md border border-white text-white  hover:text-white hover:bg-orange-500/10 text-sm"
            >
              <FaPhoneVolume /> <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg px-4 py-3 space-y-3 border-t border-orange-400/30">
          <a
            href="#register"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-orange-500/20 border border-orange-400 text-orange-300 hover:text-white text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <FaUserPlus /> Register Now
          </a>
          <a
            href="tel:+918951258207"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-orange-500/20 border border-orange-400 text-orange-300 hover:text-white text-sm"
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