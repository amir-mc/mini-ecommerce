'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed w-full z-50 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className=" text-2xl font-bold">
              <span className="text-blue-300">DIGI</span>STORE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/" 
                className=" hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className=" hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Products
              </Link>
              <Link 
                href="/brands" 
                className=" hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Brands
              </Link>
              <Link 
                href="/about" 
                className=" hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className=" hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right side items (Cart, Account) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="p-1 rounded-full  hover:text-blue-300 focus:outline-none transition-colors duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button className="p-1 rounded-full  hover:text-blue-300 focus:outline-none transition-colors duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-blue-300 focus:outline-none transition-colors duration-300"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md">
          <Link 
            href="/" 
            className=" hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className=" hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/brands" 
            className=" hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Brands
          </Link>
          <Link 
            href="/about" 
            className=" hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className=" hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 pb-2 border-t border-white/20 flex justify-around">
            <button className="p-2 rounded-full  hover:bg-white/20 focus:outline-none transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button className="p-2 rounded-full  hover:bg-white/20 focus:outline-none transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;