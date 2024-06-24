import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <div className="bg-green-90 ">
      <div className="bg-green-10 rounded-full shadow-md w-full overflow-hidden">
        <nav className="w-full rounded-full flex justify-between items-center h-16 padding-container">
          <div className="flex items-center space-x-2 lg:space-x-8">
            <Link href="/">
              <Image src="/Vector.svg" alt="logo" width={23} height={20} />
            </Link>
            <span className="text-gray-900 font-semibold text-[22px]">TrailHive</span>
          </div>
          
          <div className="lg:hidden flex items-center ml-auto space-x-4">
            <svg
              className="w-6 h-6 text-gray-900"
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
            <div className="flex space-x-4">
              <Button 
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
    </div>
  );
}

export default Navbar;
