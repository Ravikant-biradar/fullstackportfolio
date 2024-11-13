"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import Font Awesome Icon for WhatsApp

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Toggle the mobile menu
  const handleToggle = () => setIsOpen(!isOpen);

  // Automatically show the chat bubble message after a delay
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar Section */}
      <section className="p-6 shadow-lg flex justify-between items-center bg-gray-900">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 border-2 border-gray-700 bg-orange-400 rounded-full"></div>
          <Link href={"/"}>
            <p className="text-3xl font-bold font-serif text-white">Ravikant</p>
          </Link>
          <p className="text-sm text-gray-400 sm:block">(Developer)</p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            {!isOpen ? (
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-center gap-6 font-serif text-2xl z-20 p-8">
          <Link href={"/resume"}>
            <p className="cursor-pointer py-2 hover:text-yellow-400">Resume</p>
          </Link>
          <Link href={"/project"}>
            <p className="cursor-pointer py-2 hover:text-yellow-400">
              Projects
            </p>
          </Link>
          <Link href={"/contact"}>
            <p className="cursor-pointer py-2 hover:text-yellow-400">Contact</p>
          </Link>
        </div>
      )}

      {/* Floating WhatsApp Button with Animation */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
        {/* Animated Chat Bubble */}
        {showMessage && (
          <div className="bg-green-500 text-white text-sm rounded-xl px-4 py-2 mb-2 animate-bounce shadow-lg">
            Need help? Chat with me!
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919972548995"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 animate-pulse"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
