"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { motion } from 'framer-motion';

const fadeInAnimation = {
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
      ease: "easeIn",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="section-container bg-green-90 text-green-10 py-12">
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between mb-[60px] lg:mb-[80px]"
        >
          <motion.div
            variants={fadeInAnimation}
            custom={1}
            className="flex flex-col"
          >
            <Link href="/" className="flex">
              <Image src="/logo-green.svg" alt="logo" width={33} height={28} />
              <span className="text-green-10 font-semibold text-[32px] ml-2">
                TrailHive
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInAnimation}
            custom={2}
            className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-between items-start my-4 lg:mb-0"
          >
            <div className="w-1/2">
              <h3 className="light-16 mb-4">App</h3>
              <ul className="light-14">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Benefits
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Trails
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/2">
              <h3 className="light-16 mb-4">Company</h3>
              <ul className="light-14">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Jobs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Members
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInAnimation}
            custom={3}
            className="w-full lg:w-1/3 flex flex-col my-6 lg:my-0"
          >
            <div className="w-full flex flex-wrap items-start">
              <div className="flex-grow mr-2 border-b border-gray-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-[10px] placeholder-green-10 bg-green-90 light-12"
                />
              </div>
              <div className="light-16">
                <Button
                  type="button"
                  title="Subscribe"
                  variant="btn_inverted"
                  className="light-16"
                />
              </div>
            </div>
            <div className="w-full light-12 mt-[24px]">
              By subscribing you agree with our {""}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation}
          custom={4}
          className="border-t border-gray-300 pt-4 flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-0"
        >
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="light-14">
              &copy; 2023 TrailHive. All rights reserved.
            </div>
            <div className="light-14 flex flex-col text-center lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Cookies Settings
              </a>
            </div>
          </div>

          <div className="flex space-x-3 mt-4 lg:mt-0 h-[24px]">
            <motion.a
              variants={fadeInAnimation}
              custom={5}
              href="#"
              className="w-6 h-6"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </motion.a>
            <motion.a
              variants={fadeInAnimation}
              custom={6}
              href="#"
              className="w-6 h-6"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </motion.a>
            <motion.a
              variants={fadeInAnimation}
              custom={7}
              href="#"
              className="w-6 h-6"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </motion.a>
            <motion.a
              variants={fadeInAnimation}
              custom={8}
              href="#"
              className="w-6 h-6"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
MyComponent.displayName = 'Footer';
export default Footer;
