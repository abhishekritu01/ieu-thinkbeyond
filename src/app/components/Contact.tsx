// 'use client';

// import React, { useRef, useState } from 'react';
// import { FaSpinner } from 'react-icons/fa';


// interface FormData {
//   fullName: string;
//   age: string;
//   grade: string;
//   email: string;
//   contactNumber: string;
//   city: string;
//   parentName: string;
// }

// // 1.World's first fully hands-on School ( integrated schooling at our campus)
// // 2.6 months Innovation program (weekends)
// // 3.Summer camp

// const Register = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     parentName: '',
//     age: '',
//     grade: '',
//     email: '',
//     contactNumber: '',
//     city: '',

//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   // const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // const toggleMute = () => {
//   //   if (videoRef.current) {
//   //     videoRef.current.muted = !isMuted;
//   //     setIsMuted(!isMuted);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Registration Successful!');
//         setFormData({
//           fullName: '',
//           parentName: '',
//           age: '',
//           grade: '',
//           email: '',
//           contactNumber: '',
//           city: '',
//         });
//       } else {
//         const data = await response.json();
//         alert(data.message || 'Registration failed. Please try again.');
//       }
//     } catch (error) {
//       alert('Network error. Please try again later.');
//       console.error('Error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="text-white py-20 px-6 md:px-12 lg:px-20" id="register">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//         {/* Left Info */}
//         <div className="space-y-8">
//           <div className="space-y-4">
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
//               Student Registration
//             </h2>
//             <p className="text-zinc-300 text-sm">
//               Join our School and unlock your creative potential.<br />Open to students from Class 1 to 12.
//             </p>
//             {/* <div className="space-y-2">
//               {[
//                 "Limited seats available!",
//                 "Hurry up!",
//                 "Join us in shaping the future!",
//                 "Unleash your potential!",
//                 "Transform ideas into reality!",
//                 "Explore the world of robotics!"
//               ].map((text, i) => (
//                 <div key={i} className="flex items-center gap-2">
//                   <span className="text-amber-500">✦</span>
//                   <span className="text-amber-400 font-medium">{text}</span>
//                 </div>
//               ))}
//             </div> */}
//           </div>

//           {/* Video Section */}
//           <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-700/50 group">
//             <video
//               ref={videoRef}
//               src="https://res.cloudinary.com/dt06yhhea/video/upload/v1745848494/Robotic_Arm_Potrait_Video_voxsnc.mp4"
//               width="100%"
//               height="auto"
//               className="w-full h-auto max-h-[1200px] object-cover"
//               autoPlay
//               loop
//               muted={true}
//               playsInline
//             />
//             {/* Mute/Unmute Button */}
//             {/* <button
//               onClick={toggleMute}
//               className="absolute bottom-4 right-4 z-10 p-2 bg-black/60 rounded-full hover:bg-black transition-all group-hover:opacity-100"
//               aria-label={isMuted ? "Unmute video" : "Mute video"}
//             >
//               {isMuted ? (
//                 <FaVolumeMute className="text-white text-lg" />
//               ) : (
//                 <FaVolumeUp className="text-white text-lg" />
//               )}
//             </button> */}
//           </div>
//         </div>

//         {/* Right Form */}
//         <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-zinc-700/50 mt-8">
//           <h3 className="text-xl font-semibold text-white mb-2">Fill the details</h3>
//           {/* <p className="text-zinc-400 text-sm mb-6">Please provide accurate information for registration</p> */}

//           {[
//             { label: "Parent's Name", type: "text", name: "parentName", placeholder: "Enter parent's full name" },
//             { label: "Student's Full Name", type: "text", name: "fullName", placeholder: "Enter student's full name" },
//             { label: "Age", type: "number", name: "age", placeholder: "Enter age (5-18)", min: 5, max: 18 },
//             { label: "Email Address", type: "email", name: "email", placeholder: "Enter email address" },
//             { label: "Contact Number", type: "tel", name: "contactNumber", placeholder: "Enter 10-digit mobile number", pattern: "[0-9]{10}" },
//             { label: "City", type: "text", name: "city", placeholder: "Enter your city" },
//           ].map((input, i) => (
//             <div key={i} className="space-y-1">
//               <label className="text-sm text-zinc-300">{input.label}</label>
//               <input
//                 {...input}
//                 value={formData[input.name as keyof FormData]}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-zinc-500 transition-all"
//                 required
//               />
//             </div>
//           ))}

//           <div className="space-y-1">
//             <label className="text-sm text-zinc-300">Class</label>
//             <select
//               name="grade"
//               value={formData.grade}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
//               required
//             >
//               <option value="">Select Class</option>
//               {[...Array(12)].map((_, i) => (
//                 <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
//               ))}
//             </select>
//           </div>
//           {/* 1.World's first fully hands-on School ( integrated schooling at our campus)
// 2.6 months Innovation program (weekends)
// 3.Summer camp */}
//           <div className="space-y-1">
//             <label className="text-sm text-zinc-300">Are u interested in?</label>
//             <select
//               name="grade"
//               value={formData.grade}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
//               required
//             >
//               <option value="">Select Class</option>
//               {[...Array(12)].map((_, i) => (
//                 <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
//               ))}
//             </select>
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${isSubmitting
//                 ? 'bg-amber-600 cursor-not-allowed'
//                 : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/30'
//               }`}
//           >
//             {isSubmitting ? (
//               <>
//                 <FaSpinner className="animate-spin" />
//                 Processing...
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

import React, { useRef, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

type FormData = {
  fullName: string;
  age: string;
  grade: string;
  email: string;
  contactNumber: string;
  city: string;
  parentName: string;
  interestedIn : string[];
};

const INTEREST_OPTIONS = [
  "World's first fully hands-on School (integrated schooling at our campus)",
  "6 months Innovation program (weekends)",
  "Summer camp"
];

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    parentName: '',
    age: '',
    grade: '',
    email: '',
    contactNumber: '',
    city: '',
    interestedIn : []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => {
      const isChecked = prev.interestedIn .includes(option);
      const updated = isChecked
        ? prev.interestedIn .filter(item => item !== option)
        : [...prev.interestedIn , option];
      return { ...prev, interestedIn : updated };
    });
  };

  const handleSelectAll = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interestedIn : checked ? [...INTEREST_OPTIONS] : [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form Data:', formData); // Debugging form data before submission

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('Response Status:', response.status); // Check response status

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
          interestedIn : []
        });
      } else if (response.status === 409) {
        alert('Email already registered. Please use a different email.');
      } else if (response.status === 400) {
        alert('All fields are required. Please fill them out.');
      } else {
        const data = await response.json();
        console.log('Response Data:', data); // Log the response data for better debugging
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
    <section className="text-white md:py-12 px-6 md:px-12" id="register">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Student Registration
            </h2>
            <p className="text-zinc-300 text-sm">
              Join our School and unlock your creative potential.<br />Open to students from Class 1 to 12.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative md:rounded-xl overflow-hidden shadow-2xl border border-zinc-700/50 group">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dt06yhhea/video/upload/v1745848494/Robotic_Arm_Potrait_Video_voxsnc.mp4"
              width="100%"
              height="auto"
              className="w-full h-auto max-h-[1200px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-zinc-700/50 mt-8">
          <h3 className="text-xl font-semibold text-white mb-2">Fill the details</h3>

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
                className="w-full px-4 py-1 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-zinc-500 transition-all"
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
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
              ))}
            </select>
          </div>

          {/* Checkboxes with Select All */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-300">Are you interested in?</label>
            <div className="flex flex-col gap-2 text-sm text-white">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-amber-500"
                  checked={formData.interestedIn .length === INTEREST_OPTIONS.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
                Select All
              </label>
              {INTEREST_OPTIONS.map(option => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.interestedIn .includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="accent-amber-500"
                  />
                  {option}
                </label>
              ))}
            </div>
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
