

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
//       <div className="w-full lg:w-1/2 h-screen flex items-center justify-center px-6 lg:px-12 bg-black">
//         <div className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} space-y-3 max-w-xl`}>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"><span className="text-orange-400">World&apos;s 1st<br />FULLY HANDS-ON SCHOOL</span></h1>
//           <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold -mt-1">Make your child a Prodigy!</span>
//           <h2 className="text-cyan-400 text-xl sm:text-2xl font-semibold -mt-1">We build leaders, inventors & thinkers of the future.</h2>
//           <p className="text-gray-300 text-base leading-snug mt-2">Step into greatest Curriculum ever built - The Prodigy curriculum empowers the students with Industry certified hands-on skills in diverse sectors building their future one skill at a time.</p>
//           <div className="flex flex-wrap gap-3 pt-1">
//             <a href="#register" className="flex items-center gap-1 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 text-sm font-medium"><FaUserPlus size={14} /> Register Now</a>
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





'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Image from 'next/image';

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
        {/* <div className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} space-y-3 max-w-xl`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-sans"><span className="text-white">World&apos;s <span className='text-7xl'>1</span>st<br /></span></h1>
          <h1 className="text-4xl sm:text-5xl lg:text-3xl font-bold text-white">FULLY HANDS-ON SCHOOL</h1>
          <span className="inline-block p-2 bg-red-800 text-white  text-xl px-1 py-2 font-semibold -mt-1">Make your child a Prodigy!</span>
          <h2 className="text-white text-xl sm:text-2xl font-semibold -mt-1">We build leaders, inventors & thinkers of the future.</h2>
          <p className="text-white text-base leading-snug mt-2">Step into greatest Curriculum ever built - The Prodigy curriculum empowers the students with Industry certified hands-on skills in diverse sectors building their future one skill at a time.</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-1 px-4 py-2 border border-white text-white  text-white text-2xl font-medium">IGCSE</div>
            <div className="flex items-center py-2 text-white text-xs font-medium">International<br /> standard</div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#register" className="flex items-center gap-1 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 text-sm font-medium"><FaUserPlus size={14} /> Register Now</a>
          </div>
        </div> */}
        <div className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} space-y-3 max-w-xl`}>
        <Image 
          src="/herodesktop.png"
          alt="Hero Image"
          width={1000}
          height={500}
          className={'hidden md:block '}
          priority
        />
        <Image 
          src="/heromobile.png"
          alt="Hero Image"
          width={1000}
          height={500}
          className={'block md:hidden '}
          priority
        />
          <div className="flex flex-wrap gap-3 pt-1 ml-4 sm:ml-8 -mt-8 sm:mt-0">
            <a href="#register" className="flex items-center gap-1 px-4 py-2 rounded-md border border-white text-white hover:bg-zinc-900 text-sm font-medium"><FaUserPlus size={14} /> Register Now</a>
          </div>
        </div>

      </div>
      {/* Video Section */}
      <div className="w-full lg:w-1/2 md:h-screen relative bg-black">
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

