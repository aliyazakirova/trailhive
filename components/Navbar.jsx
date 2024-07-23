"use client";

import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import Modal from './Modal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-green-90">
      <div className="bg-green-10 rounded-[40px] shadow-md w-full overflow-hidden">
        <nav className="w-full flex justify-between items-center h-16 px-6 lg:px-20">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/Vector.svg" alt="logo" width={23} height={20} />
            </Link>
            <span className="text-gray-900 font-semibold text-[22px]">TrailHive</span>
          </div>

          <div className="lg:hidden flex items-center ml-auto">
            <button onClick={toggleMobileMenu} className="text-gray-900" id="mobile-menu-button">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="flex items-center">
                  <Link href={link.href} className="text-gray-900 hover:text-green-90 transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-8">
              <Button onClick={openModal}
                type="button"
                title="Contact us"
                variant="btn_white"
              />
              <Button 
                type="button"
                title="Download the app"
                variant="btn_dark_green"
              />
            </div>
          </div>
        </nav>
      </div>

      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-green-10 rounded-[20px] shadow-md`}>
        <ul className="flex flex-col space-y-4 p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="flex items-center">
              <Link href={link.href} className="text-gray-900 hover:text-green-90 transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-4 p-4">
          <Button onClick={openModal}
            type="button"
            title="Contact us"
            variant="btn_white"
          />
          <Button 
            type="button"
            title="Download the app"
            variant="btn_dark_green"
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Navbar;
