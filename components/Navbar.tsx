import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className="bg-green-10 rounded-full shadow-md w-full overflow-hidden">
      <nav className="w-full rounded-full flex justify-between items-center h-16 px-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/Navbar-logo.png" alt="logo" width={108} height={22} />
          </Link>
          <span className="text-gray-900 font-semibold">TrailHive</span>
        </div>
        <ul className="hidden lg:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="flex items-center">
              <Link href={link.href} className="text-gray-900 hover:text-green-90 transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex space-x-4">
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
      </nav>
    </div>
  )
}

export default Navbar
