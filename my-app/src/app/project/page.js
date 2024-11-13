"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Agarabatti Manufacturing E-Com Website",
      description:
        "Built a A fully functional, scalable e-commerce platform built for an Agarabatti manufacturing company. This application facilitates smooth online sales and order management ",
      link: "",
      demo: "https://sales.vinayakaperfumery.com/",
    },
    {
      name: "Eye catching landing page ",
      description:
        "Designed and developed an eye-catching, user-friendly landing page for the Talent Hunts application, an early-stage startup aiming to revolutionize talent discovery. The landing page is crafted to attract users, investors, and partners, with the following features:",
      link: "",
      demo: "https://www.talecto.com",
    },
    {
      name: "Twitter-like Web App",
      description:
        "Built a full-featured Twitter clone using the MERN stack, featuring real-time messaging, user authentication, and media sharing.",
      link: "https://github.com/ravikant/twitter-clone",
      demo: "",
    },
    {
      name: "Zomato-like App",
      description:
        "Created a Zomato-like app for restaurant discovery and reviews, with a complete user interface and backend integration using the MERN stack.",
      link: "https://github.com/ravikant/zomato-clone",
      demo: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <Link href={"/"}>
          {" "}
          <h1 className="text-5xl font-bold text-purple-500">My Projects</h1>
        </Link>
        <p className="text-xl mt-4 text-gray-400">
          Showcase of Web Apps I&apos;ve Built
        </p>
      </motion.div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              {project.name}
            </h2>
            <p className="text-lg text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center gap-6">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub className="inline-block mr-2" />
                GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLink className="inline-block mr-2" />
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
