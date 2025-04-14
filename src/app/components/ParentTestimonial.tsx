import React from 'react';

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    name: 'Mrs. Anjali Sharma',
  },
  {
    id: '3JZ_D3ELwOQ',
    name: 'Mr. Rakesh Mehta',
  },
  {
    id: 'nq2zK5nlguY',
    name: 'Mrs. Kavita Nair',
  },
];

const ParentTestimonial = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-14">
          What Parents Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=1`}
                title={`Testimonial by ${video.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="py-4 text-zinc-300 font-semibold">
                — {video.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonial;
