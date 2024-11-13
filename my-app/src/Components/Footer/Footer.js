"use client";

import React from "react";
import { FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const contactData = [
    {
      type: "Phone",
      value: "9972548995",
      icon: <FaPhoneAlt />,
      link: "tel:123-456-7890",
    },
    {
      type: "Email",
      value: "ravikantdev4278@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:info@mysite.com",
    },
    {
      type: "Follow Me",
      platforms: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          link: "https://twitter.com",
          icon: <FaTwitter />,
        },
      ],
    },
  ];

  return (
    <footer className="py-10 px-6 bg-gray-900 text-white">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {contactData.map((data, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-start sm:items-start md:items-center md:justify-start p-6 rounded-lg sm:shadow-lg sm:hover:shadow-2xl transition-shadow duration-300 w-full sm:w-auto border-b-2 border-gray-700 hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* Heading and Icon */}
            <div className="flex items-center gap-3 mb-3">
              {data.icon && (
                <motion.span
                  className="text-3xl text-pink-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {data.icon}
                </motion.span>
              )}
              <motion.h2
                className="text-2xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {data.type}
              </motion.h2>
            </div>

            {/* Contact Info or Platforms */}
            {data.link ? (
              <motion.a
                href={data.link}
                className="block text-lg hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {data.value}
              </motion.a>
            ) : (
              <motion.p
                className="text-lg mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {data.value}
              </motion.p>
            )}

            {/* Social Media Links */}
            {data.platforms && (
              <motion.div
                className="flex gap-6 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {data.platforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Bottom Copyright Section */}
      <motion.div
        className="text-center mt-12 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>&copy; 2024 All Rights Reserved. Designed with ❤️</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
