import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center mb-4">
              <Image
                src="/logo1.jpeg"
                alt="Innovation Uni Logo"
                width={160}
                height={80}
                className="h-12 w-auto object-contain"
                priority
              />
              <h2 className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Innovation Uni
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              OUR LEGACY! The Future Education is Here. Shaping the future of education through innovation and entrepreneurship.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A" 
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors flex items-center"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="text-xl mr-2" />
                <span className="text-sm">Chat with Us</span>
              </a>
            </div>
          </div>

          {/* Contact Info - Expanded */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-gray-700">Our Location</h4>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 flex-shrink-0" />
                  <address className="not-italic text-sm">
                    1A, KRS Rd, next to Mandovi Motors,<br />
                    Devaraja Mohalla, CFTRI Campus,<br />
                    Yadavagiri, Mysuru,<br />
                    Karnataka 570005
                  </address>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-gray-700">Contact Details</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center">
                    <FaPhoneAlt className="mr-3 text-blue-400" />
                    <div>
                      <a href="tel:+918951258207" className="hover:text-blue-400 transition-colors block">+91 89512 58207</a>
                      <a href="tel:+919686593948" className="hover:text-blue-400 transition-colors block">+91 96865 93948</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="mr-3 text-blue-400" />
                    <a href="mailto:hello@innovationuni.com" className="hover:text-blue-400 transition-colors">
                      hello@innovationuni.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FiClock className="mr-3 text-blue-400" />
                    <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Innovation & Entrepreneurship UNI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-xs">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;