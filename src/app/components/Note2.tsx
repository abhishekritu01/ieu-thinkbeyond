// 'use client';

// import React, { useState, useEffect } from 'react';
// import { FaLightbulb, FaUserPlus, FaWhatsapp } from 'react-icons/fa';

// const Note2 = () => {
//   const [fakeTime, setFakeTime] = useState(2 * 24 * 60 * 60); // 2 days
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//     const interval = setInterval(() => {
//       setFakeTime((prev) => (prev > 0 ? prev - 3 : 0)); // fast timer
//     }, 100); // 10x speed

//     return () => clearInterval(interval);
//   }, []);

//   const formatFakeTime = (totalSeconds: number) => {
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     return `${hours}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
//   };

//   return (
//     <section className="w-full min-h-[80vh] bg-black text-white flex items-center justify-center px-6 -mt-8  md:mt-24 ">
//       <div className="w-full max-w-7xl bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">

//         {/* Left Content */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <div className="flex items-center gap-4 justify-center md:justify-start">
//             <FaLightbulb className="text-yellow-400 text-5xl animate-pulse" />
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
//               We believe prodigies are not born, but made
//             </h1>
//           </div>

//           <p className="text-gray-300 text-lg sm:text-xl">
//             Unlock your potential by registering early. Don’t miss the chance!
//           </p>

//           <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
//             <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow">
//               🎯 Early Bird Access
//             </span>
//             <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow">
//               ⏳ Limited Seats Available
//             </span>
//           </div>

//           <div className="pt-6">
//             <a
//               href="#register"
//               className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
//             >
//               <FaUserPlus />
//               Register Now
//             </a>

//             <button 
//               onClick={() => window.open('https://wa.me/+918951258207', '_blank')}
//               className="inline-flex ml-2 mt-2 sm:mt-0 items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
//             >
//               <FaWhatsapp className="text-base md:text-lg" />
//               Chat on WhatsApp
//             </button>
//           </div>
//         </div>

//         {/* Right Countdown */}
//         <div className="text-center space-y-3">
//           <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 px-6 py-4 rounded-xl shadow-lg">
//             <p className="text-lg sm:text-xl font-semibold">
//               ⏰ Only <span className="underline font-bold">{Math.floor(fakeTime / 3600)} hours left</span> to register.
//             </p>
//           </div>

//           {hasMounted && (
//             <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold tracking-wider text-orange-400 drop-shadow-md">
//               {formatFakeTime(fakeTime)}
//             </div>
//           )}
//           <p className="text-sm text-gray-400">Time remaining</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Note2;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { FaLightbulb, FaUserPlus, FaWhatsapp } from 'react-icons/fa';

// const Note2 = () => {
//   const [fakeTime, setFakeTime] = useState(2 * 24 * 60 * 60); // 2 days
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//     const interval = setInterval(() => {
//       setFakeTime((prev) => (prev > 0 ? prev - 3 : 0)); // fast timer
//     }, 100); // 10x speed

//     return () => clearInterval(interval);
//   }, []);

//   const formatFakeTime = (totalSeconds: number) => {
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     return `${hours}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
//   };

//   return (
//     <section className="w-full min-h-[80vh] bg-black text-white flex items-center justify-center px-6 mt-8  md:mt-24 ">
//       <div className="w-full max-w-7xl bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">

//         {/* Left Content */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <div className="flex items-center gap-4 justify-center md:justify-start">
//             <FaLightbulb className="text-yellow-400 text-5xl animate-pulse" />
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
//               We believe prodigies are not born, but made
//             </h1>
//           </div>

//           <p className="text-gray-300 text-lg sm:text-xl">
//             Unlock your potential by registering early. Don’t miss the chance!
//           </p>

//           <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
//             <span className="border border-white text-white px-4 py-2  text-sm font-medium shadow">
//               🎯 Early Bird Access
//             </span>
//             <span className="border border-white text-white px-4 py-2  text-sm font-medium shadow">
//               ⏳ Limited Seats Available
//             </span>
//           </div>

//           <div className="-mt-2 md:pt-6">
//             <a
//               href="#register"
//               className="inline-flex items-center gap-3 border border-white text-white hover:bg-orange-600 text-white font-semibold py-1 px-4  shadow-md transition duration-300"
//             >
//               <FaUserPlus />
//               Register Now
//             </a>

//             <button 
//               onClick={() => window.open('https://wa.me/+918951258207', '_blank')}
//               className="inline-flex ml-2 mt-2 sm:mt-0 items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3  shadow-md transition duration-300"
//             >
//               <FaWhatsapp className="text-xs md:text-lg" />
//               Chat on WhatsApp
//             </button>
//           </div>
//         </div>

//         {/* Right Countdown */}
//         <div className="text-center space-y-3">
//           <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 px-6 py-4 rounded-xl shadow-lg">
//             <p className="text-lg sm:text-xl font-semibold">
//               ⏰ Only <span className="underline font-bold">{Math.floor(fakeTime / 3600)} hours left</span> to register.
//             </p>
//           </div>

//           {hasMounted && (
//             <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold tracking-wider text-orange-400 drop-shadow-md">
//               {formatFakeTime(fakeTime)}
//             </div>
//           )}
//           <p className="text-sm text-gray-400">Time remaining</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Note2;



'use client';

import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaUserPlus, FaWhatsapp } from 'react-icons/fa';

const Note2 = () => {
  const [fakeTime, setFakeTime] = useState(2 * 24 * 60 * 60); // 2 days
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setFakeTime((prev) => (prev > 0 ? prev - 3 : 0)); // fast timer
    }, 100); // 10x speed

    return () => clearInterval(interval);
  }, []);

  const formatFakeTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  };

  return (
    <section className="w-full min-h-[80vh] bg-black text-white flex items-center justify-center px-6 -mt-2 md:mt-24">
      <div className="w-full max-w-7xl bg-white/10 border border-white/20 backdrop-blur-lg md:rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <FaLightbulb className="text-yellow-400 text-5xl animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold ">
              We believe prodigies are not born, but made
            </h1>
          </div>

          <p className="text-gray-300 text-lg sm:text-xl ">
            Unlock your potential by registering early. Don&apos;t miss the chance!
          </p>

          {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-4 w-full">
            <span className=" text-white px-4 py-3 text-sm font-medium text-center w-full sm:w-auto">
              🎯 Early Bird Access
            </span>
            <span className=" text-white px-4 py-3 text-sm font-medium text-center w-full sm:w-auto">
              ⏳ Limited Seats Available
            </span>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-3 border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 transition duration-300 w-full sm:w-auto"
            >
              <FaUserPlus className="text-orange-400" />
              Register Now
            </a>

            <button 
              onClick={() => window.open('https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A', '_blank')}
              className="inline-flex items-center justify-center gap-3 border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 transition duration-300 w-full sm:w-auto"
            >
              <FaWhatsapp className="text-green-400" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Right Countdown */}
        <div className="text-center space-y-3">
          <div className="bg-yellow-300 px-6 py-4 rounded-xl shadow-lg">
            <p className="text-lg sm:text-xl font-semibold text-black">
              ⏰ Only <span className="underline font-bold ">{Math.floor(fakeTime / 3600)} hours left</span> to register.
            </p>
          </div>

          {hasMounted && (
            <div className="text-3xl sm:text-5xl lg:text-6xl font-mono font-bold tracking-wider text-yellow-300 drop-shadow-md">
              {formatFakeTime(fakeTime)}
            </div>
          )}
          <p className="text-sm text-gray-400">Time remaining</p>
        </div>
      </div>
    </section>
  );
};

export default Note2;