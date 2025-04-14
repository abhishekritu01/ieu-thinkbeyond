import React from 'react';

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-zinc-400 text-lg">
            Have questions, feedback, or want to partner with us? Drop a message and we’ll get back within 24 hours.
          </p>

          <div className="space-y-4 text-zinc-300 text-base">
            <p><strong>Email:</strong> hello@innovationuni.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> 123 Innovation Street, Bengaluru, India</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6 bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">Your Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
