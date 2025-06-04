import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          Abhay Parambirsingh Chandel
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Business Analyst
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="https://linkedin.com/in/abhay-chandel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:abhaychandel.nmims@gmail.com"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <FaEnvelope className="w-5 h-5" />
            <span>abhaychandel.nmims@gmail.com</span>
          </a>
          <a
            href="tel:437-238-7687"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            <FaPhone className="w-5 h-5" />
            <span>437-238-7687</span>
          </a>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="w-5 h-5" />
            <span>Toronto, Canada</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home; 