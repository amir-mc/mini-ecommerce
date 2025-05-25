// components/MobileMenu.tsx
import Link from 'next/link';
import Auth from './auth';

const MobileMenu = () => {
  return (
    <details className="md:hidden group">
      <summary className="list-none cursor-pointer p-2">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute left-0 right-0 bg-zinc-800  border-t border-white/20 mt-2 py-2 px-4 space-y-2">
        <Link 
          href="/" 
          className="block hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
        >
          Home
        </Link>
        <Link 
          href="/product" 
          className="block hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
        >
          Products
        </Link>
      
        <div className="flex space-x-4 px-3 py-2">
          <button className="hover:text-blue-300 focus:outline-none transition-colors duration-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <div className="hover:text-blue-300 focus:outline-none transition-colors duration-300">
            <Auth/>
          </div>
        </div> 
      </div>
    </details>
  );
};

export default MobileMenu;