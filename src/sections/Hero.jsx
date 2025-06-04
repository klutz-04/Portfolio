import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
          Abhay Parambirsingh Chandel
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Business Analyst
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://linkedin.com/in/abhay-chandel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:abhaychandel.nmims@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:437-238-7687"
            className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
          >
            <FaPhone size={24} />
          </a>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Toronto, Canada
        </p>
      </motion.div>
    </section>
  );
};

export default Hero; 