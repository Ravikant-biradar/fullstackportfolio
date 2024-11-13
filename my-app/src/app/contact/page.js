"use client"; // Enable client-side rendering for Next.js 13+
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Dynamically import framer-motion to prevent SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Ensure that the component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.BACKEND_URL}/clientmessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      setIsSubmitting(false);
      setResponseMessage(data.message || "Message sent successfully!");
      // Clear form data after submission
      setFormData({ name: "", email: "", mes: "" });
    } catch (error) {
      setIsSubmitting(false);
      setResponseMessage("There was an error sending your message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-5 flex items-center justify-center">
      <MotionDiv
        className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <Link href={"/"}>
          <h2 className="text-4xl font-bold text-center mb-8">
            Let&apos;s Connect!
          </h2>
        </Link>

        {/* Contact Info */}
        {/* ... (Your contact info as before) */}

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Message</label>
            <textarea
              name="mes"
              value={formData.mes}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && (
          <p className="text-center text-green-500 mt-4">{responseMessage}</p>
        )}
      </MotionDiv>
    </div>
  );
};

export default Contact;
