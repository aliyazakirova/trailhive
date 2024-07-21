"use client";

import Image from "next/image";
import heroImage from "../public/hero_img.png";
import MButton from "./Button";
import { motion } from "framer-motion";
import React from "react";

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { 
      delay: custom * 0.2, 
      duration: 1,
      ease: "easeInOut" 
    },
  }),
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.2, 
      duration: 1,
      ease: "easeInOut" 
    },
  }),
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      className="bg-green-90 relative overflow-hidden"
    >
      <div className="max-container flex flex-col lg:flex-row items-center lg:space-x-[80px] padding-container">
        <div className="lg:w-1/2 max-w-2xl">
          <div className="mb-[24px]">
            <motion.h1
              custom={1}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              className="text-center bold-48 lg:bold-85 lg:text-left mb-[24px] text-green-10 tracking-tighter"
            >
              Your Ultimate Outdoor Companion
            </motion.h1>
            <motion.p
              custom={2}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              className="text-center lg:text-left regular-18 text-green-10"
            >
              Are you tired of spending hours searching for the perfect hiking
              or biking trail? TrailHive - the ultimate outdoor adventure app
              that connects you with the best trails in your area.
            </motion.p>
          </div>
          <motion.div
            custom={3}
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center lg:justify-start"
          >
            <MButton
              custom={2}
              variants={textAnimation}
              type="button"
              title="Download the app"
              variant="btn_white"
            />
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flexCenter justify-center"
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
          custom={4}
        >
          <Image
            src={heroImage}
            alt="Hiking"
            className="rounded-[20px] shadow-lg"
          />
        </motion.div>
      </div>
      <div className="hero-map"></div>
    </motion.section>
  );
};

export default Hero;
