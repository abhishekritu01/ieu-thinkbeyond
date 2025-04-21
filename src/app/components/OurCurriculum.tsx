'use client';

import {
  FaBuilding,
  FaBullhorn,
  FaChartLine,
  FaCogs,
  FaHandshake,
  FaLaptopCode,
  FaLightbulb,
  FaMicrochip,
  FaMoneyBillWave,
  FaPenNib,
  FaPrint,
  FaProjectDiagram,
  FaRobot,
  FaShoppingCart,
  FaTrademark,
  FaWaveSquare,
  FaWifi
} from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const courses = [
  {
    id: 1,
    title: 'ROBOTICS',
    description: "Design, build and program real robots to solve real-world challenges. Apply engineering concepts through hands-on kits and coding logic. Every session sparks invention and nurtures a creator’s mindset.",
    image: '/roboat.png',
    icon: <FaRobot />,
  },
  {
    id: 2,
    title: 'CODING',
    description:
      'Go beyond syntax to build logic, games and automation tools. Blend front-end creativity with back-end logic to develop seamless web experiences and powerful digital solutions. Students learn to think, debug and innovate like real developers.',
    image: 'coding.png',
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    title: 'ARTIFICIAL INTELLIGENCE',
    description:
      'Step into tomorrow by training machines to think and act smartly. From smart assistants to self-learning games—build the AI of your dreams. A foundation in data science and logic through hands-on tools.',
    image: 'ai.png',
      icon: <FaLightbulb />,
  },
  {
    id: 4,
    title: 'COMPUTER ENGINEERING',
    description:
      'Fuse coding and electronics to create smart systems and devices. Understand how hardware and software come together to innovate. Build everything from mini-OS simulations to automation setups.',
    image: 'computer_engineering.jpg',
    icon: <FaMicrochip />,
  },
  {
    id: 5,
    title: 'INTERNET OF THINGS',
    description:
      'Build networks where devices ‘talk’ to each other across the cloud. Design smart homes, wearable tech and connected systems. We Prepare students for the tech-driven, data-rich world ahead.',
    image: 'iot.jpg',
    icon: <FaWifi />,
  },
  {
    id: 6,
    title: 'ELECTRONICS',
    description:
      'Explore the building blocks of technology through circuits and sensors. Learn how current, resistance and voltage power our digital world. Projects teach not just what to build—but why it works.',
    image: 'electronics.png',
    icon: <FaCogs />,
  },
  {
    id: 7,
    title: 'MECHATRONICS',
    description:
      'Blend mechanics, electronics and control systems into one masterpiece. Build machines that react and respond to the world around them. It’s innovation in motion—literally.',
    image: 'mechatronics.jpg',
    icon: <FaProjectDiagram />,
  },
  {
    id: 8,
    title: 'SIGNAL PROCESSING',
    description:
      'Understand how information travels through sound, images and data. Experiment with digital media through filters, sensors and audio tools. The perfect base for AI, robotics and communication systems.',  
    image: 'signal_processing.jpg',
    icon: <FaWaveSquare />,
  },
  {
    id: 9,
    title: '3D PRINTING',
    description:
      'Transform ideas into real objects using digital design and fabrication. Students design, slice, and print usable tools and creative models. A gateway to entrepreneurship and innovation in product design.',
    image: '3d_printing.png',
    icon: <FaPrint />,
  },
  {
    id: 10,
    title: 'STARTUP ECOSYSTEM',
    description:
      'Explore how ideas become companies through team-building and growth. Understand funding, scalability, incubation and networking.',
    image: 'startup_ecosystem.png',
    icon: <FaBuilding />,
  },
  {
    id: 11,
    title: 'PUBLIC SPEAKING',
    description:
      'Build confidence to speak with clarity and purpose in any room. From pitches to debates—students find their authentic voice. Fosters self-belief, articulation and leadership.',
    image: 'public_speaking.png',
    icon: <FaBullhorn />,
  },
  {
    id: 12,
    title: 'DIGITAL COMMERCE',
    description:
      'Learn how online businesses operate in the global market. From building e-stores to managing customer experience. A full-stack introduction to the future of business.',
    image: 'digital_commerce.png',
    icon: <FaShoppingCart />,
  },
  {
    id: 13,
    title: 'ENTREPRENEURSHIP',
    description:
      'Transform problems into ventures through ideation and execution. Students learn business planning, prototyping and pitching. A real-world startup experience—age is no barrier.',
    image: 'entrepreneurship.png',
    icon: <FaChartLine />,
  },
  {
    id: 14,
    title: 'DESIGN THINKING',
    description:
      'Students learn to observe, prototype, test and iterate. Solve problems with empathy, creativity, and innovation. A mindset that turns problems into possibilities.',
    image: 'design_thinking.png',
    icon: <FaPenNib />,
  },
  {
    id: 15,
    title: 'CONTENT WRITING',
    description:
      'Write with impact — whether it’s a story, blog or brand copy. Learn to research, structure and express ideas that influence. Sharpen the most powerful tool in business communication.',
    image: 'content.png',
    icon: <FaPenNib />,
  },
  {
    id: 16,
    title: 'FINANCIAL LITERACY',
    description:
      'Understand how money works—from budgeting to investing. Interactive tools and games simulate real financial decisions. Empowers students to take charge of their financial future early on.',
    image: 'financial_literacy.png',
    icon: <FaMoneyBillWave />,
  },
  {
    id: 17,
    title: 'BRANDING',
    description:
      'Create memorable brands with logos, stories and strategy. Learn how emotional connection builds business value. Students get hands-on with real branding campaigns.',
    image: 'branding.png',
    icon: <FaTrademark />,
  },
  {
    id: 18,
    title: 'SALES & CAMPAIGN MANAGEMENT',
    description:
      'Discover how to attract, convert and retain customers. Students build real campaigns, analyze markets and drive conversions. Practical, fun, and filled with high-energy role-play simulations.',
    image: 'sales.png',
    icon: <FaHandshake />,
  },
];

const OurCurriculum = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📚 Our Curriculum</h2>
        <p className="text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
          A future-ready curriculum designed to inspire innovation and empower entrepreneurs.
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="flex flex-col md:flex-row items-center bg-zinc-900 border border-zinc-700 rounded-3xl p-10 shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div className="w-full md:w-1/2 text-left mb-6 md:mb-0 md:pr-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Young Innovator PROGRAM
                  </h3>
                  <p className="text-amber-400 italic text-lg mb-4">
                  &quot;Where Imagination Meets Innovation&quot;
                  </p>
                  <div className="text-4xl text-emerald-400 mb-4">
                    {course.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  <p className="text-zinc-400 text-sm">{course.description}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-zinc-800 flex items-center justify-center">
                    <img
                      src={`${course.image}`}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCurriculum;
