// 'use client';

// import React, { useState } from 'react';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     age: '',
//     grade: '',
//     email: '',
//     contactNumber: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('https://yourapi.com/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
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
//         });
//       } else {
//         const error = await response.json();
//         alert(`Error: ${error.message || 'Something went wrong.'}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to register. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
//       <h2>Robotics Class Registration</h2>

//       <div>
//         <label>Full Name:</label>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Age:</label>
//         <input
//           type="number"
//           name="age"
//           min="5"
//           max="18"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Class:</label>
//         <select
//           name="grade"
//           value={formData.grade}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Class</option>
//           {[...Array(10)].map((_, i) => (
//             <option key={i + 1} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label>Email Address:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Contact Number:</label>
//         <input
//           type="tel"
//           name="contactNumber"
//           pattern="[0-9]{10}"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <button type="submit" disabled={loading} style={{ marginTop: 12 }}>
//         {loading ? 'Registering...' : 'Register'}
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;
