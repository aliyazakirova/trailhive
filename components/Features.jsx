"use client";
import React, { forwardRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

const FeatureItem = forwardRef(({ image, title, description }, ref) => (
  <div 
    ref={ref} 
    className="lg:col-span-1"
  >
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={title}
        width={311}
        height={240}
        className="rounded-[20px] mb-4"
      />
      <h3 className="semibold-16 text-green-90 mb-2 text-center">
        {title}
      </h3>
      <p className="regular-14 text-green-90 text-center px-4">
        {description}
      </p>
    </div>
  </div>
));

const MFeatureItem = motion(FeatureItem);

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0.1,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: custom * 0.2, 
      duration: 0.8, 
      ease: "easeOut" 
    },
  }),
};

const featureAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.9,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      delay: custom * 0.2, 
      duration: 0.8, 
      ease: "easeOut" 
    },
  }),
};

const features = [
  {
    image: '/hicking1.png',
    title: 'Access nature',
    description:
      "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    image: '/hicking2.png',
    title: 'Explore trails',
    description:
      'Discover new trails that match your interests and fitness level. TrailHive makes it easy to find the perfect route for your next adventure.',
  },
  {
    image: '/hicking3.png',
    title: 'Track your progress',
    description:
      "Keep track of your hiking or biking progress with TrailHive's built-in tracking features. Set goals, monitor your achievements, and stay motivated.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-green-90">
      <div className="bg-green-10 rounded-[40px]">
        <div className="mx-auto section-container">
          <motion.div 
            custom={1}
            variants={textAnimation}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            <div className="lg:col-span-1">
              <div className="text-center md:text-left">
                <h2 className="regular-14 uppercase mb-4">FEATURES</h2>
                <h2 className="text-[38px] semibold-38 text-green-90 mb-4">
                  Stay Active
                  <br />
                  and Healthy
                </h2>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    type="button"
                    title="Learn more"
                    variant="btn_dark_green"
                  />
                </div>
              </div>
            </div>  
            
            {features.map((feature, index) => (
              <MFeatureItem
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                custom={index + 1}
                variants={featureAnimation}
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};
MyComponent.displayName = 'Features';

export default Features;
