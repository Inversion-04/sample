import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <nav className="
      w-full flex justify-between items-center px-8 py-4 
      bg-gradient-to-r from-gray-900 via-black to-gray-900
      shadow-2xl fixed top-0 left-0 z-50 text-white
      border-b border-purple-500/40
    ">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-purple-400 tracking-wide">
        SkillKart
      </h1>

      {/* Right Section */}
      <div className="flex gap-6 items-center text-lg">

        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="
              pl-10 pr-4 py-2 rounded-xl 
              bg-gray-800/70 backdrop-blur-md 
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-400
            "
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Links */}
        <a href="#home" className="hover:text-purple-300 transition-all duration-300">
          Home
        </a>
        <a href="#courses" className="hover:text-purple-300 transition-all duration-300">
          Courses
        </a>
        <a href="#login" className="hover:text-purple-300 transition-all duration-300">
          Login
        </a>

        {/* Cart Button */}
        <button className="
          flex items-center gap-2 
          bg-black/80 hover:bg-black 
          px-4 py-2 rounded-xl 
          transition-all duration-300 
          shadow-md border border-purple-500/40
        ">
          <FaShoppingCart className="text-purple-300" />
          Cart
        </button>

      </div>
    </nav>
  );
}

export default Nav;
