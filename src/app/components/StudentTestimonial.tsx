// 'use client';

// import React, { useState, useRef } from 'react';
// import { FaQuoteLeft, FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

// const StudentTestimonial = () => {
//   const [isMuted, setIsMuted] = useState(true); // To manage mute/unmute state
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <section className="relative py-10 px-6 md:px-10 lg:px-20 min-h-[400px] flex items-center">
//       {/* Content Layout - Text on left, Video on right */}
//       <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
//         {/* Left: Testimonial Content */}
//         <div className="text-white space-y-4">
//           <h2 className="text-2xl sm:text-3xl font-bold">
//             What Our Students Say
//           </h2>
//           <p className="text-zinc-300 text-base">
//             Real stories from real achievers. Our students are not just learners — they&apos;re innovators and future leaders.
//           </p>

//           {/* Quote Box */}
//           <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-4 shadow-lg relative">
//             <FaQuoteLeft className="absolute -top-3 -left-3 text-yellow-400 text-2xl" />
//             <p className="text-zinc-100 italic text-base">
//               “This university unlocked my potential. With access to great mentors and cutting-edge tech, I was able to launch my startup while still in school.”
//             </p>

//             {/* Student Info */}
//             <div className="flex items-center gap-3 mt-4">
//               <img
//                 src="https://randomuser.me/api/portraits/men/75.jpg"
//                 alt="Student"
//                 className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
//                 width={48}
//                 height={48}
//               />
//               <div>
//                 <h4 className="text-white font-semibold text-sm">Rohan Mehta</h4>
//                 <p className="text-zinc-300 text-xs">CEO @ AI Startups | Batch of 2022</p>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Register Button - Only visible on small screens */}
//           <div className="md:hidden relative z-10 mt-6 flex justify-center w-full">
//             <a
//               href="#register"
//               className="flex items-center gap-2 px-6 py-3 rounded-md border-2 border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/20 hover:shadow-lg transition-all duration-300 text-sm font-medium"
//             >
//               <FaUserPlus size={20} /> Register Now
//             </a>
//           </div>

//           {/* Desktop Register Button - Only visible on larger screens */}
//           <div className="hidden md:flex justify-center mt-6">
//             <a
//               href="#register"
//               className="flex items-center gap-2 px-6 py-3 rounded-md border-2 border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/20 hover:shadow-lg transition-all duration-300 text-sm font-medium"
//             >
//               <FaUserPlus size={20} /> Register Now
//             </a>
//           </div>
//         </div>

//         {/* Right: Video Section */}
//         <div className="relative w-full h-full">

//         <video
//             ref={videoRef}
//             autoPlay
//             loop
//             muted={isMuted}
//             playsInline
//             height={300}
//             width={300}
//           >
//             <source src="/Student Testimonial IEU Landing Page.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* Mute/Unmute Button */}
//           <div className="absolute top-4 right-4 z-10">
//             <button
//               onClick={toggleMute}
//               className="text-white p-2 bg-black rounded-full hover:bg-black/60"
//             >
//               {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentTestimonial;







'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaQuoteLeft, FaUserPlus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const StudentTestimonial = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonials = [
    {
      quote: "The faculty at this university transformed my career. Coming from a small town, I never imagined I'd work at a top tech company, but the placement cell made it happen.",
      name: "Priya Sharma",
      role: "Software Engineer @ Microsoft | Batch of 2021",
      avatar: "PS",
      bgColor: "bg-purple-600"
    },
    {
      quote: "As a first-generation college student, I was nervous about campus life. But the supportive environment and industry-relevant curriculum helped me secure three job offers!",
      name: "Rahul Patel",
      role: "Data Scientist @ Amazon | Batch of 2020",
      avatar: "RP",
      bgColor: "bg-blue-600"
    },
    {
      quote: "The startup incubation center gave wings to my entrepreneurial dreams. My ed-tech platform now has over 50,000 users, all thanks to the mentorship I received here.",
      name: "Ananya Gupta",
      role: "Founder @ EduNext | Batch of 2022",
      avatar: "AG",
      bgColor: "bg-pink-600"
    }
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-10 lg:px-20 min-h-[500px] flex items-center bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Testimonial Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-yellow-400">Success</span> Stories
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg">
            Hear from our students who are making waves in their respective fields across India and globally.
          </p>

          {/* Testimonial Carousel */}
          <div className="relative min-h-[250px]">
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

          {/* Testimonial Indicators */}
          <div className="flex gap-2 justify-center md:justify-start">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeTestimonial ? 'bg-yellow-400 w-6' : 'bg-zinc-500'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Register Button */}
          <div className="mt-8">
            <a
              href="#register"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 font-medium text-lg"
            >
              <FaUserPlus size={20} /> Apply Now
            </a>
          </div>
        </div>

        {/* Right: Video Section */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 transform hover:scale-[1.01] transition-transform duration-300">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            width="100%"
            height="auto"
             className="w-full h-auto max-h-[800px] object-cover"
          >
            {/* <source src="/Student Testimonial IEU Landing Page.mp4" type="video/mp4" /> */}
            <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1745768557/Student_Testimonial_IEU_Landing_Page_dncvxd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Mute/Unmute Button */}
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