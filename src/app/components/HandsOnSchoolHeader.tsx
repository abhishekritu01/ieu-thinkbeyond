// 'use client';

// import Image from 'next/image';
// import { FaLightbulb, FaRocket, FaBookOpen } from 'react-icons/fa';
// import { FaUserPlus } from 'react-icons/fa';

// const sections = [
//   {
//     title: 'ENTREPRENEURIAL MINDSET',
//     image: '/1.png',
//     icon: <FaLightbulb className="text-4xl text-yellow-500" />,
//     imageAlt: 'Entrepreneurship',
//     content:
//       'We cultivate an entrepreneurial mindset since a young age & empower students to identify problems and create impactful change through innovative solutions.',
//   },
//   {
//     title: 'UNDERSTANDING “WHAT”, “HOW” & “WHY”',
//     image: '/2.png',
//     icon: <FaBookOpen className="text-4xl text-blue-500" />,
//     imageAlt: 'Understanding Concepts',
//     content:
//       "Our curriculum focuses on ensuring students grasp the fundamental concepts by dwelling into the 'what' by building the 'how' and by making the students ask the 'why'.",
//   },
//   {
//     title: 'REDEFINING LEARNING',
//     image: '/3.png',
//     icon: <FaRocket className="text-4xl text-red-500" />,
//     imageAlt: 'Future Learning',
//     content:
//       'We deliver relevant skills with industry-oriented hands-on subjects that ensure students are ready for the future. Our curriculum transforms learning with a holistic approach like no other in the world.',
//   },
// ];

// const HandsOnSchoolHeader = () => {
//   return (
//     <div className="px-6 py-12 bg-black text-white">
//       {/* Heading */}
//       <div className="text-center mb-12 max-w-2xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold">HANDS ON SCHOOL</h2>
//         <p className="mt-4 text-lg text-gray-300">
//           At IEU, we do more than just teaching.
//           <br />
//           We inspire the next generation of innovators, creators, and leaders.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className="bg-zinc-900 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
//           >
//             {/* Image */}
//             <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
//               <Image
//                 src={section.image}
//                 alt={section.imageAlt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//                 priority
//               />
//             </div>

//             {/* Icon */}
//             {section.icon}

//             {/* Title */}
//             <h3 className="text-xl font-semibold mt-4 mb-2">{section.title}</h3>

//             {/* Content */}
//             <p className="text-gray-300 text-sm">{section.content}</p>
//           </div>
//         ))}
//       </div>

//       {/* Footer Text */}
//       <div className="text-center mt-12">
//         <p className="text-lg text-gray-300">
//           Whether in tech, science, or business, we equip students to turn their
//           <br />
//           innovative ideas into impactful businesses.
//         </p>
//         <p className="mt-4 text-lg text-gray-300">
//           Our curriculum transforms the very nature of learning by providing
//           <br />
//           a well-rounded, holistic approach unlike any other curriculum in the world.
//         </p>
//       </div>
//       <div className="flex justify-center mt-8">
//         <a
//           href="#register"
//           className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 w-36"
//         >
//           <FaUserPlus /> Register
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HandsOnSchoolHeader;





'use client';

import Image from 'next/image';
import { FaLightbulb, FaRocket, FaBookOpen } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';

const sections = [
  {
    title: 'ENTREPRENEURIAL MINDSET',
    image: '/1.png',
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    imageAlt: 'Entrepreneurship',
    content:
      'We cultivate an entrepreneurial mindset since a young age & empower students to identify problems and create impactful change through innovative solutions.',
  },
  {
    title: 'UNDERSTANDING “WHAT”, “HOW” & “WHY”',
    image: '/3.png',
    icon: <FaBookOpen className="text-4xl text-blue-500" />,
    imageAlt: 'Understanding Concepts',
    content:
      "Our curriculum focuses on ensuring students grasp the fundamental concepts by dwelling into the 'what' by building the 'how' and by making the students ask the 'why'.",
  },
  {
    title: 'REDEFINING LEARNING',
    image: '/2.png',
    icon: <FaRocket className="text-4xl text-red-500" />,
    imageAlt: 'Future Learning',
    content:
      'We deliver relevant skills with industry-oriented hands-on subjects that ensure students are ready for the future. Our curriculum transforms learning with a holistic approach like no other in the world.',
  },
];

const HandsOnSchoolHeader = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">HANDS ON SCHOOL</h2>
        <p className="mt-4 text-lg text-gray-300">
          At IEU we do more than just teaching.
          <br />
          We inspire the next generation of innovators, creators, and leaders.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={section.image}
                alt={section.imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>

            {/* Icon */}
            {section.icon}

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{section.title}</h3>

            {/* Content */}
            <p className="text-gray-300 text-sm">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-300">
          Whether in tech, science, or business, we equip students to turn their
          <br />
          innovative ideas into impactful businesses.
        </p>
        <p className="mt-4 text-lg text-gray-300">
          Our curriculum transforms the very nature of learning by providing
          <br />
          a well-rounded, holistic approach unlike any other curriculum in the world.
        </p>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-8">
        <a
          href="#register"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 w-36"
        >
          <FaUserPlus /> Register
        </a>
      </div>
    </div>
  );
};

export default HandsOnSchoolHeader;

