// // import React from 'react';
// // import { FaUserPlus, FaPhone } from 'react-icons/fa';

// // const NavBar = () => {
// //   return (
// //     <nav className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-8 py-5 flex items-center justify-between shadow-xl">
// //       {/* Brand */}
// //       <div className="text-2xl font-bold tracking-wide text-cyan-400 font-mono animate-pulse">
// //         🤖 ieu
// //       </div>

// //       {/* Buttons */}
// //       <ul className="flex items-center space-x-8">
// //         <li>
// //           <a
// //             href="#register"
// //             className="flex items-center gap-2 text-purple-200 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
// //           >
// //             <FaUserPlus className="text-cyan-400" /> Register
// //           </a>
// //         </li>
// //         <li>
// //           <a
// //             href="#contact"
// //             className="flex items-center gap-2 text-purple-200 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
// //           >
// //             <FaPhone className="text-cyan-400" /> Contact Us
// //           </a>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default NavBar;



// import React from 'react';
// import { FaUserPlus, FaPhone } from 'react-icons/fa';

// const NavBar = () => {
//   return (
//     <nav className="backdrop-blur-md bg-black/30 border-b border-cyan-500/30 text-white px-8 py-5 flex items-center justify-between shadow-xl z-50">
//       {/* Brand */}
//       <div className="text-3xl font-bold tracking-widest text-cyan-400 font-mono neon-glow">
//         🤖 IEU
//       </div>

//       {/* Menu */}
//       <ul className="flex items-center space-x-8">
//         <li>
//           <a
//             href="#register"
//             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-neon transition-all duration-300"
//           >
//             <FaUserPlus /> Register
//           </a>
//         </li>
//         <li>
//           <a
//             href="#contact"
//             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:shadow-neon transition-all duration-300"
//           >
//             <FaPhone /> Contact Us
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;



import React from 'react';
import { FaUserPlus, FaPhone } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-orange-400/30 px-8 py-5 flex items-center justify-between shadow-2xl z-50 transform transition-all duration-500">
      {/* Brand */}
      <div className="text-3xl font-extrabold tracking-widest text-orange-400 font-mono neon-orange animate-glow">
        🤖 IEU
      </div>

      {/* Buttons */}
      <ul className="flex items-center space-x-8">
        <li>
          <a
            href="#register"
            className="flex items-center gap-2 px-5 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-orange transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaUserPlus /> Register
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-orange transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaPhone /> Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
