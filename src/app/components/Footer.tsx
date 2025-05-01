import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Intro */}
        <div className="md:col-span-2">
          <h2 className="text-white text-3xl font-bold mb-4">Innovation Uni</h2>
          <p className="text-base leading-relaxed mb-6 mr-4">
            OUR LEGACY! The Future Education is Here ...
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:hello@innovationuni.com" className="hover:text-orange-400 transition">hello@innovationuni.com</a></li>
            <li>Phone: +91 89512 58207&nbsp;&nbsp;/&nbsp;&nbsp;+91 96865 93948</li>
            <li>Location: 1A, KRS Rd, next to Mandovi Motors, Devaraja Mohalla, CFTRI Campus, Yadavagiri, Mysuru, Karnataka 570005</li>
          </ul>
        </div>

        {/* WhatsApp Contact */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Connect with Us</h4>
          <div className="flex items-center gap-4 text-white">
            <a href="https://wa.me/+918951258207?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20programs!%0A" className="hover:text-cyan-400 transition">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-sm text-center text-zinc-600 border-t border-zinc-700 pt-6">
        © {new Date().getFullYear()} Innovation & Entrepreneurship UNI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
