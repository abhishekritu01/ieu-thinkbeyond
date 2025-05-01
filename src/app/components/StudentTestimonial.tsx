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
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-16 px-6 md:px-10 lg:px-20 min-h-[500px] flex items-center bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Testimonial Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-yellow-400">Success</span> Stories
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg">
            Hear from our students who are making waves in their respective fields across India and globally.
          </p>

          {/* Carousel */}
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
          <div className="mt-8">
            <a
              href="#register"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 font-medium text-lg"
            >
              <FaUserPlus size={20} /> Register Now
            </a>
          </div>
        </div>

        {/* Right: Video Section */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:scale-[1.01] transition-transform duration-300">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-contain transition-opacity duration-500"
            preload="auto"
          >
            <source src="https://res.cloudinary.com/dt06yhhea/video/upload/v1746078532/Student_Testimonial_IEU_Landing_Page_bfef0g.mp4" type="video/mp4" />
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
