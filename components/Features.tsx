import Image from "next/image";
import React from "react";

const features = [
  {
    image: "/hicking1.png",
    title: "Access nature",
    description:
      "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    image: "/hicking2.png",
    title: "Access nature",
    description:
      "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    image: "/hicking3.png",
    title: "Access nature",
    description:
      "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
];

const Features = () => {
  return (
    <section className="bg-green-90">
    <div className="bg-green-10 rounded-[40px]">
      <div className="mx-auto section-container ">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h2 className="regular-14 uppercase mb-4">FEATURES</h2>
            <h2 className="text-[38px] font-bold text-gray-90 mb-4">
              Stay Active
              <br />
              and Healthy
            </h2>
            <button className="bg-green-90 text-green-10 px-6 py-3 rounded-full shadow-md hover:bg-black transition duration-300">
              Learn more
            </button>
          </div>
          <div className="md:w-3/4 flex justify-center space-x-8">
            {features.map((feature, index) => (
              <div key={index} className="pr-[80px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={311}
                  height={240}
                  className="rounded-lg mb-4"
                />
                <h3 className="regular-16 text-green-90 mb-2">
                  {feature.title}
                </h3>
                <p className="regular-16 text-green-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
