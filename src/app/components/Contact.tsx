'use client';

import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; // Spinner icon

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    grade: '',
    email: '',
    contactNumber: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // 👈 Track submission state

  interface FormData {
    fullName: string;
    age: string;
    grade: string;
    email: string;
    contactNumber: string;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  interface SubmitEvent {
    preventDefault: () => void;
  }

  interface ApiResponse {
    ok: boolean;
    json: () => Promise<{ message?: string }>;
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Start spinner

    try {
      const response: ApiResponse = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration Successful!');
        setFormData({
          fullName: '',
          age: '',
          grade: '',
          email: '',
          contactNumber: '',
        });
      } else {
        const data = await response.json();
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert(`Server error. Please try again later. ${error}`);
    }

    setIsSubmitting(false); // Stop spinner
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20" id="register">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-4">Student Registration</h2>
          <p className="text-zinc-400 text-lg">
            Register now for the Robotics Class! Open to students from Class 1 to 10. Fill in the details and get started.
          </p>
          <div className="space-y-4 text-zinc-300 text-base">
            <p><strong>Email:</strong> hello@innovationuni.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> 123 Innovation Street, Bengaluru, India</p>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700">
          {/* Input Fields */}
          {[
            { label: "Full Name", type: "text", name: "fullName", placeholder: "Enter your full name" },
            { label: "Age", type: "number", name: "age", placeholder: "Age", min: 5, max: 18 },
            { label: "Email Address", type: "email", name: "email", placeholder: "you@example.com" },
            { label: "Contact Number", type: "tel", name: "contactNumber", placeholder: "10-digit mobile number", pattern: "[0-9]{10}" },
          ].map((input, i) => (
            <div key={i}>
              <label className="block text-sm text-zinc-300 mb-1">{input.label}</label>
              <input
                {...input}
                value={formData[input.name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm text-zinc-300 mb-1">Class</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              required
            >
              <option value="">Select Class</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''
              }`}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" />
                Registering...
              </>
            ) : (
              'Register Now'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
