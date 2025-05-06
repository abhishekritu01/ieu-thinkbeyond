import React from 'react';
import { PiPhoneCallFill } from 'react-icons/pi';

const Note = () => {
  return (
    <div className="max-w-7xl bg-yellow-400 rounded-sm shadow-md my-6 mx-4 md:mx-20 mt-12 px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 text-center md:text-left">
          SKIP THE TRAFFIC!
        </div>

        {/* Divider (only for md and above) */}
        <div className="hidden md:flex items-end gap-[2px]">
          <span className="w-[4px] h-20 bg-black transform rotate-[10deg] origin-bottom"></span>
          <span className="w-[8px] h-20 bg-black transform rotate-[10deg] origin-bottom"></span>
          <span className="w-[12px] h-20 bg-black transform rotate-[10deg] origin-bottom"></span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 text-center md:text-right">
          <div className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
            Your queries<br />answered<br />instantly
          </div>
          <a href="tel:+918951258207" className="bg-gray-800 p-2 sm:p-3 rounded-full text-yellow-400">
            <PiPhoneCallFill className="text-2xl sm:text-3xl md:text-4xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Note;
