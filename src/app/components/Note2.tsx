
'use client';

import React, { useState, useEffect } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';

const Note2 = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">

        {/* Quote Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <FaLightbulb className="text-yellow-300 text-4xl md:text-5xl animate-pulse" />
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            &ldquo;We Believe Prodigies Are Not Born  Are Made&ldquo;
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow transition">
              🎯 Early Bird Offer
            </span>
            <span className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow transition">
              ⏳ Limited Seats!
            </span>
          </div>
          <p className='mt-8'>
            <a
              href="#register"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 w-44"
            >
              <FaUserPlus /> Register Now
            </a>
          </p>
        </div>

        {/* Clock Section */}
        <div className="w-full md:w-auto flex justify-center items-center">
          {hasMounted && value && (
            <div className="text-white text-5xl sm:text-6xl lg:text-8xl font-mono font-bold tracking-widest break-words text-center w-full">
              {formatTime(value)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Note2;
