import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-3xl mr-2">🎬</span>
            <span className="font-bold text-2xl text-white tracking-tight">MovieExplorer</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="hover:text-white transition-colors font-medium">About</a>
            <a href="#contact" className="hover:text-white transition-colors font-medium">Contact</a>
            <a href="/movies" className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5">
              Browse Movies
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-primary focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
