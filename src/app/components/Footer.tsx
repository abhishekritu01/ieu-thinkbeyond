import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Intro */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Innovation Uni</h2>
          <p className="text-sm leading-relaxed">
            Empowering the next generation of innovators through technology, mentorship, and entrepreneurship.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#courses" className="hover:text-orange-400 transition">Courses</a></li>
            <li><a href="#testimonials" className="hover:text-orange-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:hello@innovationuni.com" className="hover:text-orange-400 transition">hello@innovationuni.com</a></li>
            <li>Phone: +91 89512 58207 / 9686593948</li>
            <li>Location: 1A, KRS Rd, next to Mandovi Motors, Devaraja Mohalla, CFTRI Campus, Yadavagiri, Mysuru, Karnataka 570005</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-cyan-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaYoutube /></a>
            <a href="mailto:hello@innovationuni.com" className="hover:text-cyan-400 transition"><FaEnvelope /></a>
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
