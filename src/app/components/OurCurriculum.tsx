'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaRobot, FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const courses = [
  {
    title: 'Robotics & AI',
    icon: <FaRobot className="text-cyan-400 text-4xl mb-4" />,
    description: 'Hands-on experience with building robots, machine learning models, and real-world AI applications.'
  },
  {
    title: 'Full Stack Development',
    icon: <FaLaptopCode className="text-orange-400 text-4xl mb-4" />,
    description: 'Build complete web applications using the latest frontend and backend technologies.'
  },
  {
    title: 'Design Thinking',
    icon: <FaLightbulb className="text-yellow-300 text-4xl mb-4" />,
    description: 'Creative problem-solving and product innovation techniques for real-world challenges.'
  },
  {
    title: 'Startup Launchpad',
    icon: <FaRocket className="text-red-400 text-4xl mb-4" />,
    description: 'Learn how to ideate, validate, and launch your own startup with expert mentorship.'
  },
];

const OurCurriculum = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">📚 Our Curriculum</h2>
        <p className="text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
          A future-ready curriculum designed to inspire innovation and empower entrepreneurs.
        </p>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-md h-full flex flex-col justify-start hover:shadow-lg transition-all duration-300 text-left">
                {course.icon}
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-zinc-400 text-sm">{course.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCurriculum;
