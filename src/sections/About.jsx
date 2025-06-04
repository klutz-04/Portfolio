import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Name Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Abhay Chandel
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Business Analyst
            </p>
          </motion.div>

          {/* About Section */}
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Results-driven Business Analyst with over 5 years of experience in financial analysis, 
              business requirements gathering, and operational improvements within the Banking/Financial 
              industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Demonstrated expertise in collaborating with technology teams and external partners to 
              deliver end-to-end solutions that align with industry standards and regulatory requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 