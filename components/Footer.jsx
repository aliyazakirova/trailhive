import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="section-container bg-green-90 text-green-10 py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16">
          <div className="flex items-center mb-4 lg:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo-green.svg" alt="logo" width={33} height={28} />
              <span className="text-green-10 font-semibold text-[32px] ml-2">
                TrailHive
              </span>
            </Link>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-0">
            {/* <div className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-0"> */}
            <div className="w-full lg:w-1/2">
              <h3 className="medium-16 mb-4">App</h3>
              <ul className="regular-14">
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
            {/* </div> */}

            {/* Company Section */}
            {/* <div className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-between items-start"> */}
            <div className="w-full lg:w-1/2">
              <h3 className="medium-16 mb-4">Company</h3>
              <ul className="regular-14">
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
              {/* </div> */}
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:flex lg:justify-between lg:items-center">
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between items-start">
              <form className="w-full lg:w-1/2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 mb-4 lg:mr-4 text-green-10 bg-green-90"
                />
              </form>
              <div className="w-full lg:w-1/2">
      <Button 
            type="button"
            title="Subscribe"
            variant="btn_inverted"
          />
      </div>

              <p className="border-t border-gray-300 text-sm mt-4">
                By subscribing you agree with our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-0">
          <p className="text-sm">&copy; 2023 TrailHive. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:underline">
              Cookies Settings
            </a>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
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
