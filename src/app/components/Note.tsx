'use client';

import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Note = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-900 via-black to-yellow-900 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-yellow-700 overflow-hidden group animate-fadeIn hover:scale-[1.01] transition-all duration-500 ease-in-out">
      
      {/* Glow Border */}
      <div className="absolute inset-0 border-2 border-yellow-500 opacity-10 rounded-2xl animate-pulse blur-sm pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-center text-center sm:text-left gap-4 sm:gap-6">
        <div className="bg-yellow-500 p-3 sm:p-4 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300 ease-in-out">
          <FaUniversity className="text-black text-3xl sm:text-4xl md:text-5xl" />
        </div>

        <div className="overflow-hidden w-full sm:w-auto">
          <h1 className="text-white font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight drop-shadow-md typing break-words">
            INNOVATION <br className="hidden sm:block" />
            <span className="text-yellow-400">& ENTREPRENEURSHIP</span>
            <br />
            <span className="text-gray-300">UNIVERSITY</span>
          </h1>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .typing {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          animation: typing 2s steps(30, end), blink 0.8s step-end infinite;
          border-right: 2px solid yellow;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        @media (max-width: 640px) {
          .typing {
            white-space: normal;
            animation: none;
            border-right: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Note;
