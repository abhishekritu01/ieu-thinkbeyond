'use client';
import { FaStar } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';

const reviews = [
  {
    name: 'Rekha Menon',
    role: 'Tech Enthusiast  ',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'My son has discovered a side of himself we never saw before. He’s more curious, creative and confident— He looks forward to every session!',
  },

  {
    name: 'Venkata Krishna Rao',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'Honestly, I wasn’t sure what to expect at first. But the way my daughter talks about coding and AI now, I can see she’s learning things that truly matter.',
  },

  {
    name: 'Anita Shah',
    role: 'Startup Mentor',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'The robotics and 3D printing classes are my son’s favorite part of the week. He now spends his time building instead of just watching videos—huge win!',
  },
  {
    name: 'Karthik Shetty',
    role: 'Parent of Grade 4 Student',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'We’re not from a tech background but the team here is so supportive. They’ve made innovation fun and accessible for my child.',
  }
  ,
  {
    name: 'Neeta Sinha',
    role: 'Parent of Grade 9 Student',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'The entrepreneurial module helped my son pitch an actual business idea! He even built a logo and website—I’m amazed at what he’s picked up.',
  },

  {
    name: 'Arvind Reddy',
    role: 'Parent of Grade 6 Student',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    review:
      'Amazing instructors and real-world focus. Perfect platform for young innovators to thrive!',
  },
];

const CustomerReview = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
        Hear from Our Parents 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{review.name}</h4>
                  <p className="text-sm text-zinc-400">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-zinc-300 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-8">
        <a
          href="#register"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-orange-400 text-orange-300 hover:text-white hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 w-44"
        >
          <FaUserPlus /> Register Now
        </a>
      </div>
    </section>
  );
};

export default CustomerReview;
