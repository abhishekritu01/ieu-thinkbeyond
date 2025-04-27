// 'use client';

// import React, { useState } from 'react';
// import { FaSpinner } from 'react-icons/fa'; // Spinner icon

// interface FormData {
//   fullName: string;
//   age: string;
//   grade: string;
//   email: string;
//   contactNumber: string;
//   city: string;
//   parentName: string;
// }

// interface ChangeEvent {
//   target: {
//     name: string;
//     value: string;
//   };
// }

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     parentName: '',
//     age: '',
//     grade: '',
//     email: '',
//     contactNumber: '',
//     city: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false); // 👈 Track submission state



//   const handleChange = (e: ChangeEvent) => {
//     const { name, value } = e.target;
//     setFormData((prev: FormData) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   interface SubmitEvent {
//     preventDefault: () => void;
//   }

//   interface ApiResponse {
//     ok: boolean;
//     json: () => Promise<{ message?: string }>;
//   }

//   const handleSubmit = async (e: SubmitEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true); // Start spinner

//     try {
//       const response: ApiResponse = await fetch('/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Registration Successful!');
//         setFormData({
//           fullName: '',
//           age: '',
//           grade: '',
//           email: '',
//           contactNumber: '',
//           city: '',
//           parentName: '',
//         });
//       } else {
//         const data = await response.json();
//         alert(data.message || 'Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       alert(`Server error. Please try again later. ${error}`);
//     }

//     setIsSubmitting(false); // Stop spinner
//   };

//   return (
//     <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20" id="register">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//         {/* Left Info */}
//         <div className="space-y-6">
//           <h2 className="text-4xl font-bold text-white mb-4">Student Registration</h2>
//           <p className="text-zinc-400 text-sm">
//             Register now for the Robotics Class! Open to students from Class 1 to 10. Fill in the details and get started.
//             <br />
//             <span className="text-orange-500 font-semibold">Limited seats available!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Hurry up!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Join us in shaping the future!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Unleash your potential!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Think Beyond!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Be a part of the revolution!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Transform your ideas into reality!</span>
//             <br />
//             <span className="text-orange-500 font-semibold">Explore the world of robotics!</span>
//           </p>

//           <div className="w-full h-96">
//             <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
//               <video
//                 src="/IEU Founder Intro Video.mp4"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 className="bg-gray-200 "
//                 autoPlay
//                 loop
//                 // muted
//               controls
//               />

//             </div>
//           </div>
//         </div>

//         {/* Right Form */}
//         <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700">
//           {/* Input Fields */}
//           {[
//             { label: "Parent's Name", type: "text", name: "parentName", placeholder: "Enter your parent's name" },
//             { label: "Full Name", type: "text", name: "fullName", placeholder: "Enter your full name" },
//             { label: "Age", type: "number", name: "age", placeholder: "Age", min: 5, max: 18 },
//             { label: "Email Address", type: "email", name: "email", placeholder: "you@example.com" },
//             { label: "Contact Number", type: "tel", name: "contactNumber", placeholder: "10-digit mobile number", pattern: "[0-9]{10}" },
//             { label: "City", type: "text", name: "city", placeholder: "Enter your city" },
//           ].map((input, i) => (
//             <div key={i}>
//               {/* <label className="block text-sm text-zinc-300 mb-1">{input.label}</label> */}
//               <input
//                 {...input}
//                 value={formData[input.name as keyof typeof formData]}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
//                 required
//               />
//             </div>
//           ))}

//           <div>
//             <label className="block text-sm text-zinc-300 mb-1">Class</label>
//             <select
//               name="grade"
//               value={formData.grade}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
//               required
//             >
//               <option value="">Select Class</option>
//               {[...Array(10)].map((_, i) => (
//                 <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''
//               }`}
//           >
//             {isSubmitting ? (
//               <>
//                 <FaSpinner className="animate-spin" />
//                 Registering...
//               </>
//             ) : (
//               'Register Now'
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Register;









'use client';

import React, { useState, useRef } from 'react';
import { FaSpinner, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface FormData {
  fullName: string;
  age: string;
  grade: string;
  email: string;
  contactNumber: string;
  city: string;
  parentName: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    parentName: '',
    age: '',
    grade: '',
    email: '',
    contactNumber: '',
    city: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration Successful!');
        setFormData({
          fullName: '',
          parentName: '',
          age: '',
          grade: '',
          email: '',
          contactNumber: '',
          city: '',
        });
      } else {
        const data = await response.json();
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 md:px-12 lg:px-20" id="register">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Student Registration
            </h2>
            <p className="text-zinc-300 text-lg">
              Join our Robotics Program and unlock your creative potential. Open to students from Class 1 to 10.
            </p>
            {/* <div className="space-y-2">
              {[
                "Limited seats available!",
                "Hurry up!",
                "Join us in shaping the future!",
                "Unleash your potential!",
                "Transform ideas into reality!",
                "Explore the world of robotics!"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-amber-500">✦</span>
                  <span className="text-amber-400 font-medium">{text}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Video Section */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-700/50 group">
            <video
              ref={videoRef}
              src="/IEU-Founder-Intro-Video.mp4"
              width="100%"
              height="auto"
               className="w-full h-auto max-h-[500px] object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-10 p-2 bg-black/60 rounded-full hover:bg-black transition-all group-hover:opacity-100"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <FaVolumeMute className="text-white text-lg" />
              ) : (
                <FaVolumeUp className="text-white text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-zinc-700/50">
          <h3 className="text-2xl font-semibold text-white mb-2">Fill the details</h3>
          <p className="text-zinc-400 text-sm mb-6">Please provide accurate information for registration</p>

          {[
            { label: "Parent's Name", type: "text", name: "parentName", placeholder: "Enter parent's full name" },
            { label: "Student's Full Name", type: "text", name: "fullName", placeholder: "Enter student's full name" },
            { label: "Age", type: "number", name: "age", placeholder: "Enter age (5-18)", min: 5, max: 18 },
            { label: "Email Address", type: "email", name: "email", placeholder: "Enter email address" },
            { label: "Contact Number", type: "tel", name: "contactNumber", placeholder: "Enter 10-digit mobile number", pattern: "[0-9]{10}" },
            { label: "City", type: "text", name: "city", placeholder: "Enter your city" },
          ].map((input, i) => (
            <div key={i} className="space-y-1">
              <label className="text-sm text-zinc-300">{input.label}</label>
              <input
                {...input}
                value={formData[input.name as keyof FormData]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-zinc-500 transition-all"
                required
              />
            </div>
          ))}

          <div className="space-y-1">
            <label className="text-sm text-zinc-300">Class</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              required
            >
              <option value="">Select Class</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              isSubmitting
                ? 'bg-amber-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/30'
            }`}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" />
                Processing...
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
