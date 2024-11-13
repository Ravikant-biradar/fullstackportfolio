"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <Link href="/">
          <h1 className="text-5xl font-bold">Ravikant S. B.</h1>
        </Link>
        <p className="text-xl mt-4 text-gray-400">
          Full Stack Developer | JavaScript Enthusiast
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="space-y-16">
        {/* About Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi there! 👋 I&apos;m a passionate{" "}
            <strong>Full Stack Developer</strong> with a love for crafting
            dynamic and scalable web applications. Specializing in{" "}
            <strong>JavaScript</strong>, <strong>React.js</strong>,{" "}
            <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
            <strong>MongoDB</strong>, I thrive on building seamless user
            experiences that not only look great but perform even better.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            💻 <strong>What Drives Me</strong>: I&apos;m motivated by the impact
            technology can have on people's lives and businesses. I&apos;m
            always on the lookout for new challenges, tools to learn, and
            innovative ways to bring ideas to life. 🚀{" "}
            <strong>Let&apos;s Build Something Amazing</strong>: I believe in
            the power of collaboration, creativity, and continuous learning.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "JavaScript",
              "React.js",
              "Next.js",
              "Typescript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "Git",
              "Tailwind CSS",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-700 p-4 rounded-lg shadow-md text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                Full Stack Developer & Social Media Marketer - Vinayaka Sales
                and Perfumery
              </h3>
              <p className="text-gray-400">2024 - Present</p>
              <ul className="mt-2 text-gray-300 list-disc pl-6 space-y-2">
                <li>
                  Developed a full-fledged e-commerce platform using the MERN
                  stack and Next.js.
                </li>
                <li>
                  Implemented seamless payment integration and secure
                  transactions.
                </li>
                <li>
                  Designed optimized UI/UX for enhanced customer engagement.
                </li>
                <li>
                  Created scalable backend APIs, ensuring performance and
                  security.
                </li>
                <li>
                  Added real-time features like live inventory updates and order
                  tracking.
                </li>
                <li>
                  Collaborated on social media campaigns, boosting brand
                  engagement.
                </li>
                <li>Improved SEO and analytics to increase organic traffic.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Frontend Developer - Talecto Private Limited
              </h3>
              <p className="text-gray-400">2024 (3 months)</p>
              <ul className="mt-2 text-gray-300 list-disc pl-6 space-y-2">
                <li>
                  Led development of a mobile-first landing page using React.js
                  and Tailwind CSS.
                </li>
                <li>Achieved a 30% improvement in website performance.</li>
                <li>
                  Implemented interactive components and responsive layouts.
                </li>
                <li>Integrated API calls to dynamically fetch content.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
              <p className="text-gray-400">RCU University - 2018 to 2022</p>
              <p className="text-gray-300 mt-2">
                Graduated with a strong foundation in programming and software
                development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <span>9972548995</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>ravikantdev4278@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/ravikantdev4278"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
