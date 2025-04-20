'use client';

import React, { useState, useEffect } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Note2 = () => {
  const [value, setValue] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setValue(new Date());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[400px] bg-black flex justify-center items-center py-12 px-6">
      <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl shadow-xl w-full max-w-6xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section: Quote & Tags */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="flex items-start md:items-center gap-4">
            <FaLightbulb className="text-yellow-300 text-5xl animate-pulse drop-shadow-md" />
            <p className="text-white text-2xl md:text-3xl font-medium">
              “Prodigies are made — through innovation, mentorship & opportunity.”
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="bg-orange-500/80 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition shadow">
              🎯 Early Bird Offer
            </span>
            <span className="bg-red-500/80 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition shadow">
              ⏳ Limited Seats!
            </span>
          </div>
        </div>

        {/* Right Section: Clock */}
        <div className="flex justify-center items-center w-full md:w-auto">
          {value && (
            <Clock value={value} size={220} renderNumbers={true} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Note2;
