// import React from 'react';
// import {
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaInstagram,
// } from 'react-icons/fa';
// import { FiClock } from 'react-icons/fi';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <>
//       <div className="relative w-full h-28 md:h-64 overflow-hidden -mt-24 md:mt-0 px-4 md:px-0 flex items-center justify-center">
//         <a
//           href="https://wa.me/+918951258207"
//           rel="noopener noreferrer"
//           aria-label="Chat with us on WhatsApp"
//           className="absolute right-[10%] bottom-[30%] z-30 flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-all group hidden md:block"
//         >
//           <FaWhatsapp className="text-base md:text-lg h-24 w-24 group-hover:scale-110 transition-transform" />
//           {/* <span>Chat on WhatsApp</span> */}
//         </a>

//         <img
//           src="/banner.png"
//           alt="Footer Background"
//           className="absolute inset-0 w-full h-full object-cover md:object-scale-down pointer-events-none z-10"
//         />
//       </div>

//       <div className='block md:hidden'>
//         <a
//           href="https://wa.me/+918951258207"
//           rel="noopener noreferrer"
//           aria-label="Chat with us on WhatsApp"
//           className="absolute right-[10%] bottom-[30%] z-30 flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-all group block md:hidden"
//         >
//           <FaWhatsapp className="text-base md:text-lg h-24 w-24 group-hover:scale-110 transition-transform" />
//         </a>
//       </div>


//       <footer className="bg-black text-gray-300 py-12 px-4 sm:px-6 border-t border-gray-700 transition-all duration-300 ease-in-out">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/* Column 1 - Legacy and Logo */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300">
//               <h4 className="text-white font-semibold text-lg mb-2">OUR LEGACY!</h4>
//               <p className="text-gray-400 text-base mb-6">
//                 The future education is here
//               </p>
//               <div className="w-full flex justify-center md:justify-start">
//                 <Image
//                   src="/iuefinal1.png"
//                   alt="IEU Logo"
//                   width={200}
//                   height={60}
//                   priority
//                   className="object-contain w-full transition-transform duration-300 hover:scale-105 md:-mt-32 hidden sm:block "
//                 />
//                 <Image
//                   src="/iuefinal1.png"
//                   alt="IEU Logo"
//                   width={400}
//                   height={80}
//                   priority
//                   className="object-contain w-full transition-transform duration-300 hover:scale-105 md:-mt-16 block sm:hidden "
//                 />
//               </div>
//             </div>

//             {/* Column 2 - Contact Details and Address */}
//             <div className="transition-all duration-300 text-center md:text-left">
//               <h4 className="text-white font-semibold text-lg mb-4">
//                 Contact Us
//               </h4>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex flex-col sm:flex-row sm:items-start justify-center md:justify-start text-center sm:text-left">
//                   <FaPhoneAlt className="mb-1 sm:mt-1 sm:mr-3 text-blue-400 text-lg hidden sm:block" />
//                   <div>
//                     <a
//                       href="tel:+918951258207"
//                       className="hover:text-blue-400 transition-colors block"
//                     >
//                       +91 89512 58207
//                     </a>
//                     <a
//                       href="tel:+919686593948"
//                       className="hover:text-blue-400 transition-colors block"
//                     >
//                       +91 96865 93948
//                     </a>
//                   </div>
//                 </li>
//                 <li className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start text-center sm:text-left">
//                   <FaEnvelope className="mb-1 sm:mr-3 text-red-400 text-lg hidden sm:block" />
//                   <a
//                     href="mailto:Connect@ieu.org.in"
//                     className="hover:text-red-400 transition-colors"
//                   >
//                     connect@ieu.org.in
//                   </a>
//                 </li>
//                 {/* <li className="flex items-center justify-center md:justify-start">
//                   <FiClock className="mr-3 text-green-400 text-lg" />
//                   <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
//                 </li> */}
//                 <li className="flex flex-col sm:flex-row justify-center md:justify-start text-center sm:text-left">
//                   <FaMapMarkerAlt className="mb-1 sm:mt-1 sm:mr-3 text-orange-400 text-lg hidden sm:block" />
//                   <address className="not-italic leading-relaxed">
//                     1A, KRS Rd, next to Mandovi Motors,
//                     <br />
//                     Devaraja Mohalla, CFTRI Campus,
//                     <br />
//                     Yadavagiri, Mysuru,
//                     <br />
//                     Karnataka 570005
//                   </address>
//                 </li>
//               </ul>
//             </div>

//             {/* Column 3 - Social Media Links */}
//             <div className="flex flex-col items-center md:items-end transition-all duration-300 text-center md:text-right">
//               <h4 className="text-white font-semibold text-lg mb-4">
//                 Connect with Us
//               </h4>
//               <div className="flex flex-col space-y-4 w-full max-w-[250px]">
//                 <a
//                   href="https://wa.me/+918951258207"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Chat with us on WhatsApp"
//                   className="flex items-center justify-center md:justify-end text-white hover:text-green-300 transition-colors group"
//                 >
//                   <FaWhatsapp className="mr-2 text-lg group-hover:scale-110 transition-transform" />
//                   <span>Chat on WhatsApp</span>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/i.e.u_edu"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Follow us on Instagram"
//                   className="flex items-center justify-center md:justify-end text-white hover:text-pink-300 transition-colors group"
//                 >
//                   <FaInstagram className="mr-2 text-lg group-hover:scale-110 transition-transform" />
//                   <span>Follow on Instagram</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;








// import React from 'react';
// import {
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaInstagram,
// } from 'react-icons/fa';
// import { FiClock } from 'react-icons/fi';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <>
//       <div className="relative w-full h-28 md:h-64 overflow-hidden -mt-24 md:mt-0 px-4 md:px-0 flex items-center justify-center">
//         {/* WhatsApp button only visible on desktop */}
//         <a
//           href="https://wa.me/+918951258207"
//           rel="noopener noreferrer"
//           aria-label="Chat with us on WhatsApp"
//           className="absolute right-[10%] bottom-[30%] z-30 flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-all group hidden md:block"
//         >
//           <FaWhatsapp className="text-base md:text-lg h-24 w-24 group-hover:scale-110 transition-transform" />
//         </a>

//         {/* Banner image */}
//         <img
//           src="/banner.png"
//           alt="Footer Background"
//           className="absolute inset-0 w-full h-full object-scale-down md:object-scale-down pointer-events-none z-10 "
//         />
//       </div>

//       {/* WhatsApp button below banner on mobile */}
//       <div className='block md:hidden'>
//         <a
//           href="https://wa.me/+918951258207"
//           rel="noopener noreferrer"
//           aria-label="Chat with us on WhatsApp"
//           className="absolute right-[10%] bottom-[10%] z-30 flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-all group block md:hidden"
//         >
//           <FaWhatsapp className="text-base md:text-lg h-12 w-12 group-hover:scale-110 transition-transform" />
//         </a>
//       </div>

//       {/* Footer section */}
//       <footer className="bg-black text-gray-300 py-12 px-4 sm:px-6 border-t border-gray-700 transition-all duration-300 ease-in-out">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/* Column 1 - Legacy and Logo */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300">
//               <h4 className="text-white font-semibold text-lg mb-2">OUR LEGACY!</h4>
//               <p className="text-gray-400 text-base mb-6">
//                 The future education is here
//               </p>
//               <div className="w-full flex justify-center md:justify-start">
//                 {/* Adjusted logo sizes */}
//                 <Image
//                   src="/iuefinal1.png"
//                   alt="IEU Logo"
//                   width={200}
//                   height={60}
//                   priority
//                   className="object-contain w-full transition-transform duration-300 hover:scale-105 md:-mt-32 hidden sm:block "
//                 />
//                 <Image
//                   src="/iuefinal1.png"
//                   alt="IEU Logo"
//                   width={400}
//                   height={80}
//                   priority
//                   className="object-contain w-full transition-transform duration-300 hover:scale-105 md:-mt-16 block sm:hidden "
//                 />
//               </div>
//               {/* hidden button i want  only in mobile view */}
//               <a
//                 href="https://wa.me/+918951258207"
//                 rel="noopener noreferrer"
//                 className="absolute right-[10%] bottom-[30%] z-30 flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition-all group hidden md:block"
//               >
//                 <FaWhatsapp className="text-base md:text-lg h-24 w-24 group-hover:scale-110 transition-transform" />
//                 {/* <span>Chat on WhatsApp</span> */}
//               </a>
//             </div>

//             {/* Column 2 - Contact Details and Address */}
//             <div className="transition-all duration-300 text-center md:text-left">
//               <h4 className="text-white font-semibold text-lg mb-4">
//                 Contact Us
//               </h4>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex flex-col sm:flex-row sm:items-start justify-center md:justify-start text-center sm:text-left">
//                   <FaPhoneAlt className="mb-1 sm:mt-1 sm:mr-3 text-blue-400 text-lg hidden sm:block" />
//                   <div>
//                     <a
//                       href="tel:+918951258207"
//                       className="hover:text-blue-400 transition-colors block"
//                     >
//                       +91 89512 58207
//                     </a>
//                     <a
//                       href="tel:+919686593948"
//                       className="hover:text-blue-400 transition-colors block"
//                     >
//                       +91 96865 93948
//                     </a>
//                   </div>
//                 </li>
//                 <li className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start text-center sm:text-left">
//                   <FaEnvelope className="mb-1 sm:mr-3 text-red-400 text-lg hidden sm:block" />
//                   <a
//                     href="mailto:Connect@ieu.org.in"
//                     className="hover:text-red-400 transition-colors"
//                   >
//                     connect@ieu.org.in
//                   </a>
//                 </li>
//                 {/* <li className="flex items-center justify-center md:justify-start">
//                   <FiClock className="mr-3 text-green-400 text-lg" />
//                   <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
//                 </li> */}
//                 <li className="flex flex-col sm:flex-row justify-center md:justify-start text-center sm:text-left">
//                   <FaMapMarkerAlt className="mb-1 sm:mt-1 sm:mr-3 text-orange-400 text-lg hidden sm:block" />
//                   <address className="not-italic leading-relaxed">
//                     1A, KRS Rd, next to Mandovi Motors,
//                     <br />
//                     Devaraja Mohalla, CFTRI Campus,
//                     <br />
//                     Yadavagiri, Mysuru,
//                     <br />
//                     Karnataka 570005
//                   </address>
//                 </li>
//               </ul>
//             </div>

//             {/* Column 3 - Social Media Links */}
//             <div className="flex flex-col items-center md:items-end transition-all duration-300 text-center md:text-right">
//               <h4 className="text-white font-semibold text-lg mb-4">
//                 Connect with Us
//               </h4>
//               <div className="flex flex-col space-y-4 w-full max-w-[250px]">
//                 <a
//                   href="https://wa.me/+918951258207"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Chat with us on WhatsApp"
//                   className="flex items-center justify-center md:justify-end text-white hover:text-green-300 transition-colors group"
//                 >
//                   <FaWhatsapp className="mr-2 text-lg group-hover:scale-110 transition-transform" />
//                   <span>Chat on WhatsApp</span>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/i.e.u_edu"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Follow us on Instagram"
//                   className="flex items-center justify-center md:justify-end text-white hover:text-pink-300 transition-colors group"
//                 >
//                   <FaInstagram className="mr-2 text-lg group-hover:scale-110 transition-transform" />
//                   <span>Follow on Instagram</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;







import Image from 'next/image';
import Link from 'next/link';
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import { FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      {/* Banner section with WhatsApp button */}
      <div className="relative w-auto  h-28 md:h-64 overflow-hidden mt-12 md:mt-4 my-8">
        {/* Banner image */}
        <Link
          href="https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A"
          className="absolute inset-0 w-full h-full">
          <img
            src="/banner.png"
            alt="Footer Background"
            className="max-w-full h-16 md:h-full pointer-events-none"
          />
        </Link>

        {/* WhatsApp button - Mobile */}

        {/* WhatsApp button - Desktop */}
        <a
          href="https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="absolute right-[.3%] sm:right-[2%] sm:bottom-[23%] z-30  md:flex items-center gap-2 px-4 py-2 text-base font-medium  text-white transition-all group"
        >
          <FaWhatsapp className="sm:h-32 sm:w-32 h-12 w-12 text-black" />
        </a>
      </div>



      <div className='text-white underline text-center text:xl md:text-2xl font-semibold my-4 -mt-16 sm:mt-0'>
        Click the Phone Icon Above
      </div>

      {/* WhatsApp button - Mobile (positioned below banner) */}
      {/* <div className="w-full flex justify-center md:hidden py-4 bg-black">
        <a
          href="https://wa.me/+918951258207"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className=""
        >
          <FaWhatsapp className="h-12 w-12  transition-transform text-yellow-300" />
        </a>
      </div> */}

      {/* Footer section */}
      <footer className="bg-black text-gray-300 py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-700 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 - Legacy and Logo */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-semibold text-lg mb-2">OUR LEGACY!</h4>
              <p className="text-gray-400 text-base mb-6">
                The future education is here
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <Image
                  src="/iuefinal1.png"
                  alt="IEU Logo"
                  width={600}
                  height={60}
                  priority
                  className="object-fill max-w-full hover:scale-105 transition-transform hidden sm:block mt-0 md:-mt-32  -ml-16"
                />
                <Image
                  src="/iuefinal1.png"
                  alt="IEU Logo"
                  width={600}
                  height={80}
                  priority
                  className="object-fill max-w-full hover:scale-105 transition-transform block sm:hidden  -mt-32 md:mt-0"
                />
              </div>
            </div>

            {/* Column 2 - Contact Details and Address */}
            <div className="text-center md:text-left -mt-24 md:mt-0 ml-0 sm:ml-16">
              <h4 className="text-white font-semibold text-2xl mb-4">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex flex-col sm:flex-row sm:items-start justify-center md:justify-start text-center sm:text-left">
                  <FaPhoneAlt className="mb-1 sm:mt-1 sm:mr-3 text-blue-400 text-lg hidden sm:block" />
                  <div>
                    <a
                      href="tel:+918951258207"
                      className="hover:text-blue-400 transition-colors block"
                    >
                      +91 89512 58207
                    </a>
                    <a
                      href="tel:+919686593948"
                      className="hover:text-blue-400 transition-colors block"
                    >
                      +91 96865 93948
                    </a>
                  </div>
                </li>
                <li className="flex gap-2 sm:flex-row items-center sm:items-start justify-center md:justify-start text-center sm:text-left">
                  <FaEnvelope className="mb-1 sm:mr-3 text-red-400 text-lg hidden sm:block" />
                  <FaEnvelope className="mb-1 sm:mr-3 text-red-400 text-lg block sm:hidden" />
                  <a
                    href="mailto:Connect@ieu.org.in"
                    className="hover:text-red-400 transition-colors"
                  >
                    connect@ieu.org.in
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row justify-center md:justify-start text-center sm:text-left">
                  <FaMapMarkerAlt className="mb-1 sm:mt-1 sm:mr-3 text-orange-400 text-lg hidden sm:block" />
                  <address className="not-italic leading-relaxed">
                    1A, KRS Rd, next to Mandovi Motors,
                    <br />
                    Devaraja Mohalla, CFTRI Campus,
                    <br />
                    Yadavagiri, Mysuru,
                    <br />
                    Karnataka 570005
                  </address>
                </li>
              </ul>
            </div>

            {/* Column 3 - Social Media Links */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right ">
              <h4 className="text-white font-semibold text-2xl mb-4">
                Connect with Us
              </h4>
              <div className="flex gap-8  space-y-4 w-full max-w-[250px] -ml-12 sm:mr-0">
                <a
                  href="https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-center text-white hover:text-green-400 transition-colors group"
                >
                  <FaWhatsapp className="text-5xl group-hover:scale-110 transition-transform text-green-600" />
                </a>

                <a
                  href="https://www.instagram.com/i.e.u_edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center text-white hover:text-pink-400 transition-colors group"
                >
                <FaInstagram className="text-5xl group-hover:scale-110 transition-transform text-pink-500" />

                </a>
                <a
                  href="https://youtube.com/@thinkbeyond5360?si=V4ExiNbGw6a0P1Jy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center text-white hover:text-red-600 transition-colors group"
                >
                  <FaYoutube className="text-5xl group-hover:scale-110 transition-transform text-red-600" />
                </a>
                <a
                  href="https://g.co/kgs/9sJDy7R"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google"
                  className="flex items-center justify-center text-white hover:text-red-400 transition-colors group -mt-2"
                >
                  <FcGoogle className="text-5xl group-hover:scale-110 transition-transform " />
                </a>
              </div>
              <div className="text-white text-sm md:mt-40 ml-36 md:ml-44">

                <Image
                  src="/finallogo2.png"
                  alt="IEU Logo"
                  width={300}
                  height={20}
                  priority
                  className="object-fill max-w-full hover:scale-105 transition-transform mt-0 md:-mt-32  hidden sm:block"
                />

                <Image
                  src="/mobilelogo2.png"
                  alt="IEU Logo"
                  width={300} // Adjust width for mobile view
                  height={10} // Adjust height for mobile view
                  priority
                  className="object-fill max-w-full hover:scale-105 transition-transform mt-8 -ml-16 block sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;