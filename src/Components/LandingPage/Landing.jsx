import React from 'react';
import Navbar from '../Navbar/Nav.jsx';
import { FaLaptopCode, FaPython, FaBook, FaArrowRight } from 'react-icons/fa'; // Added FaArrowRight for the CTA button

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar is already included and should be styled dark for uniformity */}
      <Navbar />

      {/* 🚀 HERO SECTION - Refined Gradient and CTA */}
      <section 
        id="home"
        className="pt-32 pb-24 px-4 sm:px-8 bg-linear-to-br from-indigo-900 via-gray-900 to-purple-900 shadow-xl rounded-b-[40px] border-b-4 border-purple-500"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Unlock Your Potential with <span className="text-purple-400">SkillKart</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            “Learning never exhausts the mind.” — Dive into the best online courses to master new skills and build your future in tech.
          </p>

          {/* Call-to-Action Button */}
          <a 
            href="#courses" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Courses 
            <FaArrowRight className="ml-3 text-xl" />
          </a>
        </div>
      </section>

      {/* 📘 ABOUT & FEATURES SECTION - Uniform Dark & Elevated Cards */}
      <section 
        id="about" 
        className="px-4 sm:px-8 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Why Choose SkillKart?</h2>
          
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-16">
            SkillKart is designed to empower learners to acquire new skills efficiently. You can browse popular courses, watch tutorials, and track your progress as you learn technologies like Web Development, Python, Data Structures, and more. SkillKart makes online learning simple, interactive, and engaging for everyone.
          </p>

          {/* FEATURES CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-8 bg-gray-800 rounded-2xl shadow-xl border-t-4 border-purple-600 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl">
              <FaLaptopCode className="text-purple-400 text-5xl mb-4 p-2 bg-gray-900 rounded-full" />
              <h3 className="text-2xl  mb-3 text-purple-300 font-bold">Web Development</h3>
              <p className="text-gray-400 text-center">
                Learn modern web development skills including React, Node.js, and build full-stack applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-8 bg-gray-800 rounded-2xl shadow-xl border-t-4 border-purple-600 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl">
              <FaPython className="text-purple-400 text-5xl mb-4 p-2 bg-gray-900 rounded-full" />
              <h3 className="text-2xl  mb-3 text-purple-300 font-bold ">Python Programming</h3>
              <p className="text-gray-400 text-center">
                Start with Python basics and progress to advanced concepts like data science and machine learning.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-8 bg-gray-800 rounded-2xl shadow-xl border-t-4 border-purple-600 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl">
              <FaBook className="text-purple-400 text-5xl mb-4 p-2 bg-gray-900 rounded-full" />
              <h3 className="text-2xl  mb-3 text-purple-300 font-bold">Data Structures</h3>
              <p className="text-gray-400 text-center font-bold">
                Master DSA to enhance your problem-solving abilities and excel in coding interviews.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* You can add a Footer component here later for completeness */}
      <footer className="mt-20 bg-gray-950 text-gray-300 py-10 border-t border-purple-700">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-purple-400">SkillKart</h3>
            <p className="mt-3 text-gray-400">
              Learn modern skills and upgrade your career with high-quality online courses.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 cursor-pointer">Home</li>
              <li className="hover:text-purple-400 cursor-pointer">Courses</li>
              <li className="hover:text-purple-400 cursor-pointer">Login</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-purple-300">Contact</h4>
            <p>Email: support@skillkart.com</p>
            <p className="mt-1">Phone: +91 9876543210</p>
          </div>

        </div>

        <p className="text-center mt-10 text-gray-500">
          © {new Date().getFullYear()} SkillKart — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;