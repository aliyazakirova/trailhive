import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="mb-8 lg:mb-0">
            <Image src="/public/Navbar-logo.png" alt="TrailHive" width={155} height={32} />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start w-full lg:w-auto lg:space-x-12">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">App</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Features</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Benefits</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Explore</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Trails</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Support</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Members</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <form className="flex flex-col">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="p-2 mb-4 bg-gray-800 border border-gray-700 text-white rounded"
                />
                <button 
                  type="submit" 
                  className="p-2 bg-green-600 rounded hover:bg-green-700"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4">
                By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 TrailHive. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
            <a href="#" className="text-sm hover:underline">Cookies Settings</a>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
          <a href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} /></a>
            <a href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
