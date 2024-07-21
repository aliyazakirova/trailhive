"use client";
import Image from "next/image";
import {motion} from 'framer-motion';

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

const TestimonialSection = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} 
      className="text-green-10 section-container bg-green-90"
      style={{
        backgroundImage: "url('/testimonial-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center lg:text-left max-w-7xl mb-[80px] lg:mb-[100px]">
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
          className="max-w-6xl bold-48 font-semibold my-[24px] text-center lg:text-left tracking-[.2px]">
          &quot;TrailHive has completely changed the way I explore the outdoors. The
          personalized trail recommendations and virtual challenges have kept me
          motivated and engaged with my adventures.&quot;
        </motion.p>
        <motion.p
        custom={2}
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        className="bold-24">- John R.</motion.p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.p 
          custom={2}
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-center text-green-10 regular-20 pb-[50px] ">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </motion.p>
        <motion.div 
        custom={2}
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap justify-center items-center [gap:60px]">
          <Image src="/logos/dell.png" alt="Dell" width={62} height={20} />
          <Image
            src="/logos/zendesk.png"
            alt="Zendesk"
            width={87}
            height={17}
          />
          <Image
            src="/logos/rakuten.png"
            alt="Rakuten"
            width={67}
            height={21}
          />
          <Image
            src="/logos/pacific_funds.png"
            alt="Pacific Funds"
            width={143}
            height={13}
          />
          <Image src="/logos/ncr.png" alt="NCR" width={80} height={24} />
          <Image
            src="/logos/lattice.png"
            alt="Lattice"
            width={120}
            height={22}
          />
          <Image src="/logos/ted.png" alt="TED" width={54} height={20} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;