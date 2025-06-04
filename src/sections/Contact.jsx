import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          
          <div className="space-y-6 mb-16">
            <motion.a
              href="mailto:abhaychandel.nmims@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <FaEnvelope className="w-6 h-6" />
              <span>abhaychandel.nmims@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/abhay-chandel"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>linkedin.com/in/abhay-chandel</span>
            </motion.a>
          </div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <a
              href="/src/assets/resume/Abhay-Parambirsingh-Chandel-Business-Analyst-Resume.pdf"
              download
              className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              <FaDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 