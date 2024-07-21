"use client";
import { motion } from 'framer-motion';
import Button from "./Button";

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { 
      delay: custom * 0.2, 
      duration: 1,
      ease: "easeOut" 
    },
  }),
};

const TestimonialTwoSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      className="text-green-10 section-container"
      style={{
        backgroundImage: "url('/testimonial-two-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="text-center lg:text-left max-w-7x mb-[32px]">
        <motion.h2               
          custom={1}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className="regular-14 uppercase">Testimonial</motion.h2>
        <motion.p 
          custom={2}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className="max-w-3xl bold-48 my-[24px] text-center lg:text-left tracking-[.32px]">
          &quot;I love the social networking aspect of TrailHive. It&apos;s great to
          connect with other hikers and bikers and plan group events together.&quot;
        </motion.p>
        <motion.p
          custom={3}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className="bold-24">- Sara L.</motion.p>
      </div>
      <div className="flex justify-center lg:justify-start mb-[20px]">
        <motion.div
          custom={4}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
        >
          <Button type="button" title="Learn More" variant="btn_white" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialTwoSection;
