'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaQuoteLeft, FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const StudentTestimonial = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonials = [
    {
      name: 'Pradyumna Gururaj',
      role: 'Founder, Software IT Consultancy',
      quote: "I'm Pradyumna 8th grade student, one of the first prodigy students At IEU. \nAfter the program, I was able to build my skills in tech and branding to build my own Software IT Consultancy offering solutions now worldwide. All thanks to IEU.",
      avatar: 'PG',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Vansh',
      role: 'Young Coder & Inventor',
      quote: 'I’m Vansh, 4th grade student at IEU, I am an inventor, a young coder who has built over 100+ projects. I am on a pursuit to build my own electric car that is drivable. My skillset includes Embedded coding, Electronics, 3-D Printing, Robotics and Mechatronics.',
      avatar: 'V',
      bgColor: 'bg-green-500',
    },
    {
      name: 'Aarav',
      role: 'Young Scientist & Inventor',
      quote: 'I’m Aarav, 5th grade student at IEU. I am an inventor, electronics hobbyist with an aspiration to become a Young Scientist. I have built multiple rovers and robots. My favourite subjects include Robotics, Soldering and Electronics and Circuits.',
      avatar: 'A',
      bgColor: 'bg-red-500',
    },
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-16 px-6 md:px-10 lg:px-20 min-h-[500px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center flex-col-reverseddd md:flex-row">
         {/* Right: Video Section */}
        <div className="relative w-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:scale-[1.01] transition-transform duration-300 block sm:hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-fill  duration-500 scale-120 sm:scale-100"
            preload="auto"
          >
            {/* <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1746554421/IEU_LP_student_testimonials_Video_yomx6c.mp4" type="video/mp4" /> */}
            <source src="/IEU_LP_student_testimonials_Video_yomx6c.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-10 p-3 bg-black/70 rounded-full hover:bg-black transition-all group"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <FaVolumeMute size={20} className="text-white group-hover:text-yellow-400" />
            ) : (
              <FaVolumeUp size={20} className="text-white group-hover:text-yellow-400" />
            )}
          </button>
        </div>
        {/* Left: Testimonial Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-yellow-400">Success</span> Stories
          </h2>
          {/* <p className="text-zinc-300 text-lg max-w-lg">
            Hear from our students who are making waves in their respective fields across India and globally.
          </p> */}

          {/* Carousel */}
          <div className="relative min-h-[400px] md:min-h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 shadow-xl relative h-full">
                  <FaQuoteLeft className="absolute -top-3 -left-3 text-yellow-400 text-2xl" />
                  <p className="text-zinc-100 italic text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className={`${testimonial.bgColor} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-zinc-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex gap-2 justify-center md:justify-start mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${index === activeTestimonial ? 'bg-yellow-400 w-6' : 'bg-zinc-500'}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Register CTA */}
          <div className="flex justify-center mt-8">
            <a
              href="#register"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 w-44"
            >
              <FaUserPlus /> Register Now
            </a>
          </div>

        </div>

        {/* Right: Video Section */}
        <div className="relative w-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:scale-[1.01] transition-transform duration-300 hidden sm:block">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-fill  duration-500 scale-120 sm:scale-100"
            preload="auto"
          >
            <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1746554421/IEU_LP_student_testimonials_Video_yomx6c.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-10 p-3 bg-black/70 rounded-full hover:bg-black transition-all group"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <FaVolumeMute size={20} className="text-white group-hover:text-yellow-400" />
            ) : (
              <FaVolumeUp size={20} className="text-white group-hover:text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;








// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { FaQuoteLeft, FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

// const StudentTestimonial = () => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const testimonials = [
//     {
//       name: 'Pradyumna Gururaj',
//       role: 'Founder, Software IT Consultancy',
//       quote: 'After the program, I was able to build my skills in tech and branding to build my own Software IT Consultancy offering solutions now worldwide. All thanks to IEU.',
//       avatar: 'PG',
//       bgColor: 'bg-blue-500',
//     },
//     {
//       name: 'Vansh',
//       role: 'Young Coder & Inventor',
//       quote: 'I’m Vansh, 4th grade student at IEU, I am an inventor, a young coder who has built over 100+ projects. I am on a pursuit to build my own electric vehicle that is drivable. My skillset includes Embedded coding, Electronics, 3-D Printing, Robotics and Mechatronics.',
//       avatar: 'V',
//       bgColor: 'bg-green-500',
//     },
//     {
//       name: 'Aarav',
//       role: 'Young Scientist & Inventor',
//       quote: 'I’m Aarav, 5th grade student at IEU. I am an inventor, electronics hobbyist with an aspiration to become a Young Scientist. I have built multiple rovers and robots. My favourite subjects Robotics, Soldering and Electronics and Circuits.',
//       avatar: 'A',
//       bgColor: 'bg-red-500',
//     },
//   ];

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat z-0" />

//       <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left: Testimonial Content */}
//         <div className="order-2 lg:order-1 space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-bold">
//             <span className="text-yellow-400">Success</span> Stories
//           </h2>

//           {/* Carousel */}
//           <div className="relative min-h-[280px] sm:min-h-[300px]">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-500 ${
//                   index === activeTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                 }`}
//               >
//                 <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 shadow-xl h-full flex flex-col justify-between">
//                   <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
//                   <p className="text-zinc-100 italic text-base sm:text-lg leading-relaxed flex-grow">
//                     {testimonial.quote}
//                   </p>
//                   <div className="flex items-center gap-4 mt-6">
//                     <div
//                       className={`${testimonial.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shrink-0`}
//                     >
//                       {testimonial.avatar}
//                     </div>
//                     <div className="truncate">
//                       <h4 className="text-white font-semibold text-base sm:text-lg">{testimonial.name}</h4>
//                       <p className="text-zinc-300 text-sm">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Indicators */}
//           <div className="flex gap-2 justify-center lg:justify-start mt-4">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTestimonial(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
//                   index === activeTestimonial ? 'bg-yellow-400 w-6' : 'bg-zinc-500'
//                 }`}
//                 aria-label={`Show testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Register CTA */}
//           <div className="mt-8 text-center lg:text-left">
//             <a
//               href="#register"
//               className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 font-medium text-base sm:text-lg"
//             >
//               <FaUserPlus size={18} /> Register Now
//             </a>
//           </div>
//         </div>

//         {/* Right: Video Section */}
//         <div className="order-1 lg:order-2 w-full">
//           <div className="relative w-full aspect-[16/9] lg:max-h-[400px] rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
//             <video
//               ref={videoRef}
//               autoPlay
//               loop
//               muted={isMuted}
//               playsInline
//               className="w-full h-full object-cover"
//               preload="auto"
//             >
//               <source
//                 src="https://res.cloudinary.com/dt06yhhea/video/upload/v1746078532/Student_Testimonial_IEU_Landing_Page_bfef0g.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>

//             <button
//               onClick={toggleMute}
//               className="absolute bottom-4 right-4 z-10 p-2 sm:p-3 bg-black/70 rounded-full hover:bg-black transition-all group"
//               aria-label={isMuted ? 'Unmute video' : 'Mute video'}
//             >
//               {isMuted ? (
//                 <FaVolumeMute className="text-white group-hover:text-yellow-400 text-sm sm:text-base" />
//               ) : (
//                 <FaVolumeUp className="text-white group-hover:text-yellow-400 text-sm sm:text-base" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentTestimonial;







