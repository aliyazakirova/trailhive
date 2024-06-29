import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="section-container bg-green-90 text-green-10 py-12">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between mb-[80px] lg:mb-16">
          <div className="flex flex-col">
            <Link href="/" className="flex">
              <Image src="/logo-green.svg" alt="logo" width={33} height={28} />
              <span className="text-green-10 font-semibold text-[32px] ml-2">
                TrailHive
              </span>
            </Link>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-0">
            <div className="w-full lg:w-1/2">
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

            <div className="w-full lg:w-1/2">
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
          </div>
          <div className="w-full lg:w-1/3 flex flex-col pb-[24px]">
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
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-0">
          
          <div className="flex flex-row space-x-8">
          <div className="light-14">&copy; 2023 TrailHive. All rights reserved.</div>
          <div className="light-14 flex space-x-8 mt-4 lg:mt-0">
            <a href="#" className=" underline">
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
            <a href="#" className="w-6 h-6">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="w-6 h-6">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="w-6 h-6">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="w-6 h-6">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
