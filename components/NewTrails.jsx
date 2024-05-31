import React from "react";
import Image from 'next/image';

const NewTrails = () => {
  return (
    <section className="py-16 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Find new trails to explore and adventures to embark on.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-4">
        <Image src="/new-trails.png" alt="Dell" width={1400} height={700} />
        </div>
      </div>
    </section>
  );
};

export default NewTrails;
