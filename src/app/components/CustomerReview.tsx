import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Priya Verma',
    role: 'Tech Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'The curriculum is forward-thinking and practical. I’ve seen real growth in my son’s confidence and technical skills.',
  },
  {
    name: 'Ankit Raj',
    role: 'Startup Mentor',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    stars: 4,
    review:
      'Amazing instructors and real-world focus. Perfect platform for young innovators to thrive!',
  },
  {
    name: 'Neha Khurana',
    role: 'Parent of 12 y/o',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    stars: 5,
    review:
      'My daughter absolutely loves the hands-on sessions and mentorship. She’s more curious than ever!',
  },
  
  {
    name: 'Ravi Kumar',
    role: 'Tech Enthusiast',
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
    stars: 4,
    review:
      'The curriculum is forward-thinking and practical. I’ve seen real growth in my son’s confidence and technical skills.',
  },
  {
    name: 'Sita Devi',
    role: 'Parent of 10 y/o',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    stars: 5,
    review:
      'The curriculum is forward-thinking and practical. I’ve seen real growth in my son’s confidence and technical skills.',

  },
  {
    name: 'Rahul Sharma',
    role: 'Tech Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    stars: 5,
    review:
      'The curriculum is forward-thinking and practical. I’ve seen real growth in my son’s confidence and technical skills.',
  },

];

const CustomerReview = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Hear from Our Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <h4 className="text-lg font-semibold">{review.name}</h4>
                  <p className="text-sm text-zinc-400">{review.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-zinc-300 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
