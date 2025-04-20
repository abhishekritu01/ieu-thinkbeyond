
// import { FaLightbulb, FaRocket, FaBookOpen } from 'react-icons/fa';

// const sections = [
//   {
//     title: 'ENTREPRENEURIAL MINDSET',
//     icon: <FaLightbulb className="text-4xl text-yellow-500" />,
//     imageAlt: 'Entrepreneurship',
//     content: 'We cultivate an entrepreneurial mindset since a young age & empower students to identify problems and create impactful change through innovative solutions.',
//   },
//   {
//     title: 'UNDERSTANDING “WHAT”, “HOW” & “WHY”',
//     icon: <FaBookOpen className="text-4xl text-blue-500" />,
//     imageAlt: 'Understanding Concepts',
//     content: "Our curriculum focuses on ensuring students grasp the fundamental concepts by dwelling into the 'what' by building the 'how' and by making the students ask the 'why'.",
//   },
//   {
//     title: 'REDEFINING LEARNING',
//     icon: <FaRocket className="text-4xl text-red-500" />,
//     imageAlt: 'Future Learning',
//     content: 'We deliver relevant skills with industry-oriented hands-on subjects that ensure students are ready for the future. Our curriculum transforms learning with a holistic approach like no other in the world.',
//   },
// ];

// const  HandsOnSchoolHeader = () => {
//   return (
//     <div className="px-6 py-12 bg-gray-50">
//       {/* Main Heading */}
//       <div className="text-center mb-12 max-w-2xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900">HANDS ON SCHOOL</h2>
//         <p className="mt-4 text-lg text-gray-700">
//           At IEU, we do more than just teaching.<br />
//           We inspire the next generation of innovators, creators and leaders.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {sections.map((section, index) => (
//           <div key={index} className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
//             {/* Image Placeholder */}
//             <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
//               Image Here ({section.imageAlt})
//             </div>

//             {/* Icon */}
//             {section.icon}

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{section.title}</h3>

//             {/* Content */}
//             <p className="text-gray-600 text-sm">{section.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default  HandsOnSchoolHeader










import { FaLightbulb, FaRocket, FaBookOpen } from 'react-icons/fa';

const sections = [
  {
    title: 'ENTREPRENEURIAL MINDSET',
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    imageAlt: 'Entrepreneurship',
    content: 'We cultivate an entrepreneurial mindset since a young age & empower students to identify problems and create impactful change through innovative solutions.',
  },
  {
    title: 'UNDERSTANDING “WHAT”, “HOW” & “WHY”',
    icon: <FaBookOpen className="text-4xl text-blue-500" />,
    imageAlt: 'Understanding Concepts',
    content: "Our curriculum focuses on ensuring students grasp the fundamental concepts by dwelling into the 'what' by building the 'how' and by making the students ask the 'why'.",
  },
  {
    title: 'REDEFINING LEARNING',
    icon: <FaRocket className="text-4xl text-red-500" />,
    imageAlt: 'Future Learning',
    content: 'We deliver relevant skills with industry-oriented hands-on subjects that ensure students are ready for the future. Our curriculum transforms learning with a holistic approach like no other in the world.',
  },
];

const HandsOnSchoolHeader = () => {
  return (
    <div className="px-6 py-12">
      {/* Main Heading */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white">HANDS ON SCHOOL</h2>
        <p className="mt-4 text-lg text-gray-300">
          At IEU, we do more than just teaching.<br />
          We inspire the next generation of innovators, creators and leaders.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div key={index} className=" bg-zinc-900 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
              Image Here ({section.imageAlt})
            </div>

            {/* Icon */}
            {section.icon}

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">{section.title}</h3>

            {/* Content */}
            <p className="text-gray-300 text-sm">{section.content}</p>
          </div>
        ))}
      </div>
      {/* Whether in tech, science or business, we equip students how to
 turn their innovative ideas into impactful businesses.  */}
      {/* Our curriculum transforms the very nature of learning by giving a 
 full round core holistic approach like no other curriculum in the world. */}

<div className="text-center mt-12">
  <p className="text-lg text-gray-300">
    Whether in tech, science, or business, we equip students to turn their
    <br />
    innovative ideas into impactful businesses.
  </p>
  <p className="mt-4 text-lg text-gray-300">
    Our curriculum transforms the very nature of learning by providing <br /> a well-rounded,
    holistic approach unlike any other curriculum in the world.
  </p>
</div>



    </div>
  );
};

export default HandsOnSchoolHeader
