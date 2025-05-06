
// 'use client';
// import React, { useRef, useEffect, useState } from 'react';
// import { FaUserPlus } from 'react-icons/fa';
// import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

// const HeroSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [autoplayFailed, setAutoplayFailed] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.muted = true; // Start with video muted
//     video.controls = false; // Disable controls initially

//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise
//         .then(() => {
//           setAutoplayFailed(false);
//         })
//         .catch((error) => {
//           console.log('Autoplay prevented:', error);
//           setAutoplayFailed(true);
//           video.controls = true;
//         });
//     }

//     const handleEnded = () => {
//       video.currentTime = 0;
//       video.play().catch(console.error);
//     };

//     video.addEventListener('ended', handleEnded);

//     return () => {
//       video.removeEventListener('ended', handleEnded);
//     };
//   }, []);

//   const handleMuteToggle = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted={isMuted}
//           playsInline
//           className="w-full h-full object-cover opacity-40"
//           controls={autoplayFailed}
//         >
//           <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1745768281/IEU_Founder_Intro_Video_2_sfokd7.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

//         {/* Mute Button - Top Right Corner */}
//         <button
//           onClick={handleMuteToggle}
//           className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all"
//           aria-label={isMuted ? "Unmute video" : "Mute video"}
//         >
//           {isMuted ? (
//             <FaVolumeMute className="text-white text-xl" />
//           ) : (
//             <FaVolumeUp className="text-white text-xl" />
//           )}
//         </button>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
//         <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
//           <div className="space-y-4">
//             <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
//               Innovation Education
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               Empowering <span className="text-orange-400">Future Innovators</span>
//             </h1>
//           </div>

//           <h2 className="text-cyan-400 text-2xl sm:text-3xl font-semibold">
//             Join Our Robotics & AI Programs
//           </h2>

//           <p className="text-gray-300 text-lg leading-relaxed">
//             Master cutting-edge technologies through hands-on projects, expert mentorship,
//             and real-world applications. Flexible learning modes designed for the next
//             generation of innovators and creators.
//           </p>

//           <div className="flex flex-wrap gap-4 pt-2">
//             <a
//               href="#register"
//               className="flex items-center gap-2 px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
//             >
//               <FaUserPlus /> Register Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import { FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

// const HeroSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [autoplayFailed, setAutoplayFailed] = useState(false);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedData = () => {
//       setIsVideoLoaded(true);
//       video.muted = true;
//       video.controls = false;

//       const playPromise = video.play();
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => setAutoplayFailed(false))
//           .catch((error) => {
//             console.log('Autoplay prevented:', error);
//             setAutoplayFailed(true);
//             video.controls = true;
//           });
//       }
//     };

//     video.addEventListener('loadeddata', handleLoadedData);

//     const handleEnded = () => {
//       video.currentTime = 0;
//       video.play().catch(console.error);
//     };

//     video.addEventListener('ended', handleEnded);

//     return () => {
//       video.removeEventListener('loadeddata', handleLoadedData);
//       video.removeEventListener('ended', handleEnded);
//     };
//   }, []);

//   const handleMuteToggle = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <section className="relative flex flex-col lg:flex-row text-white mt-8">
//       {/* Text Section */}
//       <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12 bg-black">
//         <div className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} space-y-6 lg:space-y-8 max-w-xl`}>
//           <div className="space-y-4">
//             <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
//               Innovation Education
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               Empowering <span className="text-orange-400">Future Innovators</span>
//             </h1>
//           </div>
//           <h2 className="text-cyan-400 text-2xl sm:text-3xl font-semibold">
//             Join Our Robotics & AI Programs
//           </h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Master cutting-edge technologies through hands-on projects, expert mentorship,
//             and real-world applications. Flexible learning modes designed for the next
//             generation of innovators and creators.
//           </p>
//           <div className="flex flex-wrap gap-4 pt-2">
//             <a
//               href="#register"
//               className="flex items-center gap-2 px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg transition-all duration-300 font-medium"
//             >
//               <FaUserPlus /> Register Now
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Video Section */}
//       <div className="w-full lg:w-1/2 h-screen relative bg-black">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted={isMuted}
//           className={`w-auto h-auto object-cover transition-opacity duration-500 -mt-16 scale-80 rounded-2xl ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
//           playsInline
//           controls={autoplayFailed}
//           preload="auto"
//         >
//           <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1746078541/IEU_Intro_Founder_ewywnc.mov" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Mute Button */}
//         <button
//           onClick={handleMuteToggle}
//           className="absolute top-4 -mt-8 md:-mt-4 md:top-12 right-12 md:right-20 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
//           aria-label={isMuted ? 'Unmute video' : 'Mute video'}
//         >
//           {isMuted ? (
//             <FaVolumeMute className="text-white text-xl" />
//           ) : (
//             <FaVolumeUp className="text-white text-xl" />
//           )}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;









// =================


'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.muted = true;
      video.controls = false;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setAutoplayFailed(false))
          .catch((error) => {
            console.log('Autoplay prevented:', error);
            setAutoplayFailed(true);
            video.controls = true;
          });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(console.error);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative flex flex-col lg:flex-row text-white mt-8">
      <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12 bg-black">
        <div className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} space-y-3 max-w-xl`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"><span className="text-orange-400">World&apos;s 1st<br />FULLY HANDS-ON SCHOOL</span></h1>
          <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold -mt-1">Make your child a Prodigy!</span>
          <h2 className="text-cyan-400 text-xl sm:text-2xl font-semibold -mt-1">We build leaders, inventors & thinkers of the future.</h2>
          <p className="text-gray-300 text-base leading-snug mt-2">Step into greatest Curriculum ever built - The Prodigy curriculum empowers the students with Industry certified hands-on skills in diverse sectors building their future one skill at a time.</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#register" className="flex items-center gap-1 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 text-sm font-medium"><FaUserPlus size={14} /> Register Now</a>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="w-full lg:w-1/2 h-screen relative bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          className={`w-auto h-auto object-cover transition-opacity duration-500 -mt-16 scale-80 rounded-2xl ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          playsInline
          controls={autoplayFailed}
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1746078541/IEU_Intro_Founder_ewywnc.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute Button */}
        <button
          onClick={handleMuteToggle}
          className="absolute top-4 -mt-8 md:-mt-4 md:top-12 right-12 md:right-20 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-xl" />
          ) : (
            <FaVolumeUp className="text-white text-xl" />
          )}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
