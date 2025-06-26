import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">TruthGuard
            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs px-2 py-1 rounded-md font-bold">
              PREMIUM
            </span>
          </h1>
          <p className="text-sm text-indigo-200 hidden md:block">Advanced AI-Powered Fake News Detection</p>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#dashboard" className="hover:text-indigo-200 transition">Dashboard</a></li>
            <li><a href="#classifier" className="hover:text-indigo-200 transition">Classifier</a></li>
            <li><a href="#sources" className="hover:text-indigo-200 transition">Source Checker</a></li>
            <li><a href="#analytics" className="hover:text-indigo-200 transition">Analytics</a></li>
            <li><a href="#history" className="hover:text-indigo-200 transition">History</a></li>
            <li className="flex items-center space-x-2 ml-4">
              <img 
                src="/user-avatar.png" 
                alt="User" 
                className="w-8 h-8 rounded-full border-2 border-indigo-300"
              />
              <span className="font-medium">Premium User</span>
            </li>
          </ul>
        </nav>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;