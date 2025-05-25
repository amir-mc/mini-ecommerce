import Link from 'next/link';
import Auth from './auth';
import MobileMenu from './MobileMenu';
import CartDropdownItem from './cart';

const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed w-full z-50 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-blue-300">DIGI</span>STORE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/" 
                className="hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="/product" 
                className="hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Products
              </Link>
             
            </div>
          </div>

          {/* Right side items (Cart, Account) - Desktop */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <div className="p-1 rounded-full hover:text-blue-300 focus:outline-none transition-colors duration-300">
                <CartDropdownItem/>
              </div>
              <div className="p-1 rounded-full hover:text-blue-300 focus:outline-none transition-colors duration-300">
                <Auth/>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-1 rounded-full hover:text-blue-300 focus:outline-none transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;