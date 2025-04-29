'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { courseImages } from '../data/courseImage';

export default function FullscreenCarousel() {
  return (
    <div className="w-full h-auto py-10 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Curriculum</h2>
        <p className="text-lg md:text-xl text-gray-300">
          A Future-ready challenge-based curriculum that combines projects, case studies and real-time applications <br />
          that promates innovation and empowers students by offering necessary skills.
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            spaceBetween: 30,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        className="rounded-lg shadow-2xl"
      >
        {courseImages.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={course.image}
                alt={`Course ${course.id}`}
                className="w-full h-full object-contain rounded-lg scale-80"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
