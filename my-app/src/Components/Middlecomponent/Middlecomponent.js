"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../images/image.png";
import Link from "next/link"; // Import Link

const Middlecomponent = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center bg-gray-800 text-white border overflow-hidden shadow-lg p-8 gap-12 md:gap-16"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col md:items-start space-y-1 md:space-y-6 md:w-1/2"
        >
          <h1 className="text-6xl md:text-5xl font-extrabold text-white drop-shadow-md md:text-left font-dancing-script">
            Hello
          </h1>
          <h4 className="font-sans text-2xl md:text-2xl text-white md:text-left font-dancing-script">
            A Little About Me...
          </h4>
          <p className="text-lg mt-2 font-sans text-gray-300 max-w-lg leading-relaxed md:text-left font-dancing-script">
            I&apos;m a Full Stack Developer specializing in JavaScript,
            React.js, Next.js, Node.js, Express, and MongoDB. I love building
            dynamic and scalable web applications, bringing creative solutions
            to life, and optimizing performance for seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-8 flex-wrap">
            {["Resume", "Project", "Contact"].map((text, index) => (
              <Link key={text} href={`/${text.toLowerCase()}`}>
                {/* Wrap button with Link */}
                <motion.button
                  className={`h-20 w-20 rounded-full flex items-center justify-center text-white text-xl mt-4 font-semibold shadow-lg transition-all duration-300 ease-in-out ${
                    text === "Resume"
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : text === "Project"
                      ? "bg-pink-600 hover:bg-pink-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {text}
                </motion.button>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center items-center w-full md:w-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-[500px] max-h-[500px] p-3 shadow-lg flex justify-center items-center"
          >
            <div className="absolute inset-0 rounded-full blur-xl opacity-50"></div>
            <div className="overflow-hidden w-96 h-96 border-8 border-white shadow-xl flex justify-center items-center relative">
              {/* Image is positioned 30% above the center */}
              <Image
                src={img}
                alt="Profile Picture"
                width={500} // Adjust width for better responsiveness
                height={400} // Adjust height for better responsiveness
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Middlecomponent;
