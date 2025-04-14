import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const StudentTestimonial = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Testimonial Content */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold">
            What Our Students Say
          </h2>
          <p className="text-zinc-400 text-lg">
            Real stories from real achievers. Our students are not just learners — they're innovators and future leaders.
          </p>

          {/* Quote Box */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-md relative">
            <FaQuoteLeft className="absolute -top-4 -left-4 text-yellow-400 text-3xl" />
            <p className="text-zinc-300 italic">
              “This university unlocked my potential. With access to great mentors and cutting-edge tech, I was able to launch my startup while still in school.”
            </p>

            {/* Student Info */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Student"
                className="w-14 h-14 rounded-full border-2 border-yellow-500 object-cover"
              />
              <div>
                <h4 className="text-white font-semibold">Rohan Mehta</h4>
                <p className="text-zinc-400 text-sm">CEO @ AI Startups | Batch of 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Testimonial Video */}
        <div className="w-full h-64 sm:h-96">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-zinc-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
              title="Student Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;
