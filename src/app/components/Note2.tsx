
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const Note2 = () => {
  return (
    <section className="w-full bg-black border border-gray-700 rounded-2xl shadow-lg px-6 py-10 md:py-12 md:px-14 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Message + Promo Tags */}
        <div className="flex-1 space-y-6">
          {/* Quote + Icon */}
          <div className="flex items-start md:items-center gap-4">
            <FaLightbulb className="text-yellow-400 text-4xl md:text-5xl animate-pulse mt-1" />
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed">
              “We believe prodigies are not born — they are made through innovation, mentorship, and opportunity.”
            </p>
          </div>

          {/* Promotional Tags */}
          <div className="flex flex-wrap gap-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition">
              🎯 Early Bird Offer
            </span>
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition">
              ⏳ Limited Seats Available!
            </span>
          </div>
        </div>

        {/* Right: Video Preview Card */}
        <div className="w-full md:w-80 lg:w-96 rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-white transition hover:scale-[1.01]">
          <iframe
            className="w-full h-48 md:h-56 object-cover"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1"
            title="Promotional Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Note2;
