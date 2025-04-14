// import React from 'react';


// const HeroSection = () => {
//   return (
//     <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

//       {/* Neon Glow Circles */}
//       <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>
//       <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

//         {/* Left: Text */}
//         <div className="text-center lg:text-left space-y-6 max-w-xl">
//           <h1 className="text-5xl font-extrabold leading-tight text-orange-400 drop-shadow-[0_0_15px_#fb923c]">
//             🤖 Welcome to <br /> <span className="text-cyan-400">Innovation & Entrepreneurship University</span>
//           </h1>
//           <p className="text-lg text-gray-300">
//             Unleashing next-gen robotics and startup leaders through creativity, tech & vision.
//           </p>
//           <a
//             href="#about"
//             className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 shadow-lg hover:shadow-orange-400/60 transition-all duration-300"
//           >
//             Learn More
//           </a>
//         </div>

//         {/* Right: Image */}
//         <div className="max-w-md w-full drop-shadow-[0_0_20px_#22d3ee] hover:scale-105 transition-transform duration-500">
//           <img
//             src='/rob02.webp'
//             alt="Robot illustration"
//             className="w-full h-auto rounded-2xl object-cover invert saturate-0 brightness-200 contrast-125"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// import React from 'react';

// // List of YouTube video IDs (You can add more IDs to the array)
// const videoIds = [
//   'dQw4w9WgXcQ', // Example video ID
//   '3JZ_D3ELwOQ', // Another example video ID
//   'nq2zK5nlguY', // Add more IDs here as needed
// ];

// const HeroSection = () => {
//   // Function to get a random video ID
//   const getRandomVideoId = () => {
//     const randomIndex = Math.floor(Math.random() * videoIds.length);
//     return videoIds[randomIndex];
//   };

//   return (
//     <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

//       {/* Full Screen Video Background */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden">
//         <iframe
//           className="w-full h-full object-cover"
//           src={`https://www.youtube.com/embed/${getRandomVideoId()}?autoplay=1&mute=1&loop=1&playlist=${getRandomVideoId()}`}
//           title="Hero Video"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

//         {/* Left: Text */}
//         <div className="space-y-8 max-w-xl">
//           <h1 className="text-6xl font-bold text-orange-400 leading-tight tracking-wide drop-shadow-[0_0_30px_#fb923c]">
//             🤖 Welcome to <br />
//             <span className="text-cyan-400">Innovation & Entrepreneurship University</span>
//           </h1>
//           <p className="text-lg text-gray-300 max-w-lg mx-auto">
//             Unleashing next-gen robotics and startup leaders through creativity, technology, and vision.
//           </p>
//           <a
//             href="#about"
//             className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//           >
//             Learn More
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import React from 'react';

// const videoIds = [
//   'dQw4w9WgXcQ', // Example video ID
//   '3JZ_D3ELwOQ', // Another example video ID
//   'nq2zK5nlguY', // Add more IDs here as needed
// ];

// const HeroSection = () => {
//   const getRandomVideoId = () => {
//     const randomIndex = Math.floor(Math.random() * videoIds.length);
//     return videoIds[randomIndex];
//   };

//   const videoId = getRandomVideoId();

//   return (
//     <section className="bg-black text-white py-20 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* Left: Text Content */}
//         <div className="w-full space-y-8">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-400 leading-tight">
//             🤖 Welcome to <br />
//             <span className="text-cyan-400">Innovation & Entrepreneurship University</span>
//           </h1>
//           <p className="text-zinc-300 text-lg">
//             Unleashing next-gen robotics and startup leaders through creativity, technology, and vision.
//           </p>
//           {/* <a
//             href="#about"
//             className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//           >
//             Learn More
//           </a> */}
//         </div>

//         {/* Right: Video Section */}
//         <div className="w-full">
//           <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border-4 border-zinc-700">
//             <iframe
//               className="w-full h-full"
//               src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
//               title="Hero Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 leading-tight">
            🚀 Empowering Future Innovators
          </h1>
          <h2 className="text-cyan-400 text-2xl sm:text-3xl font-semibold">
            Join Our Online & Offline Robotics Program
          </h2>
          <p className="text-zinc-300 text-lg">
            Learn cutting-edge robotics through hands-on projects, expert mentorship, and real-world innovation.
            Flexible learning modes, for every young innovator.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="px-6 py-3 bg-orange-500 rounded-md text-white font-medium hover:bg-orange-600 shadow-md transition transform hover:scale-105"
            >
              Explore Courses
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-300 rounded-md font-medium hover:bg-cyan-900 hover:text-white transition transform hover:scale-105"
            >
              Talk to Us
            </a>
          </div>
        </div>

        {/* Right: Video or Image */}
        <div className="w-full md:w-1/2">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
              title="Robotics Program Promo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
