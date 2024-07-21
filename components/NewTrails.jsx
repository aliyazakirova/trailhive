"use client";
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.2, 
      duration: 1,
      ease: "easeOut" 
    },
  }),
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      delay: 0.4, 
      duration: 1,
      ease: "easeIn" 
    },
  },
};

const NewTrails = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      className="bg-green-90"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        custom={1}
        className="rounded-[25px] lg:rounded-[40px] bg-green-10"
      >
        <div className="py-[20px]">
          <div className="flex flex-col justify-center items-center">
            <motion.h2
              custom={2}
              variants={textAnimation}
              className="semibold-48 text-center text-green-90 my-[40px]"
            >
              Find new trails to explore and <br />
              adventures to embark on.
            </motion.h2>
          </div>
          <div className="px-5 flex flex-wrap justify-center items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
            >
              <Image 
                src="/new-trails.png" 
                alt="New Trails" 
                width={1400} 
                height={700} 
                className="rounded-[25px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NewTrails;
