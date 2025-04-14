import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Note = () => {
  return (
    <div className="w-full bg-black py-4  px-4 sm:px-6 md:px-10 rounded-xl shadow-lg border border-gray-700 flex flex-col sm:flex-row items-center justify-center gap-4 hover:shadow-xl transition-all duration-300">
      <FaUniversity className="text-yellow-500 text-4xl sm:text-5xl animate-pulse" />
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-white text-center sm:text-left">
        INNOVATION & ENTREPRENEURSHIP UNI
      </p>
    </div>
  );
};

export default Note;
