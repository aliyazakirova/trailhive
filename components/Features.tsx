import Image from 'next/image';
import React from 'react';

const features = [
  {
    image: '/hicking1.png',
    title: 'Access nature',
    description: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    image: '/hicking2.png',
    title: 'Access nature',
    description: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    image: '/hicking3.png',
    title: 'Access nature',
    description: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-green-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-lg uppercase mb-4">FEATURES</h2>
            <h2 className="text-4xl font-bold text-gray-90 mb-4">Stay Active and Healthy</h2>
            <button className="bg-green-90 text-white px-6 py-3 rounded-full shadow-md hover:bg-black transition duration-300">
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center space-x-8">
            {features.map((feature, index) => (
              <div key={index} className=" p-6">
                <Image src={feature.image} alt={feature.title} width={300} height={200} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-90 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
