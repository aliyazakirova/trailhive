import Image from "next/image";
import React from "react";
import Button from './Button';

const features = [
  {
    image: "/hicking1.png",
    title: "Access nature",
    description:
      "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    image: "/hicking2.png",
    title: "Explore trails",
    description:
      "Discover new trails that match your interests and fitness level. TrailHive makes it easy to find the perfect route for your next adventure.",
  },
  {
    image: "/hicking3.png",
    title: "Track your progress",
    description:
      "Keep track of your hiking or biking progress with TrailHive's built-in tracking features. Set goals, monitor your achievements, and stay motivated.",
  },
];

const Features = () => {
  return (
    <section className="bg-green-90">
      <div className="bg-green-10 rounded-[40px]">
        <div className="mx-auto section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-center md:text-left">
                <h2 className="regular-14 uppercase mb-4">FEATURES</h2>
                <h2 className="text-[38px] semibold-38 text-green-90 mb-4">
                  Stay Active
                  <br />
                  and Healthy
                </h2>
                <Button 
                type="button"
                title="Learn more"
                variant="btn_dark_green"
              />
              </div>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="lg:col-span-1">
                <div className="flex flex-col items-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={311}
                    height={240}
                    className="rounded-[20px] mb-4"
                  />
                  <h3 className="semibold-16 text-green-90 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="regular-14 text-green-90 text-center px-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
