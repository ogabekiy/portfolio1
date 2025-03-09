import React from 'react';
import { motion } from 'framer-motion';
import reactLogo from '../assets/react.svg';
import nodejsLogo from '../assets/nodejs.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import postgresql from '../assets/postgresqlicon.svg';
import mongo from '../assets/mongo.png';
import { JS, Nest, Next, Shadcn, Typescript } from '../assets';

export default function Skills() {
  const backendSkills = [nodejsLogo, mongo, postgresql, Nest, JS, Typescript];
  const frontendSkills = [html, css, tailwind, reactLogo, Next, Shadcn];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="container mx-auto w-full max-w-7xl px-4 py-10 md:py-20"
    >
      <motion.h2
        variants={headingVariants}
        className="text-4xl md:text-5xl font-extrabold text-center mt-10 md:mt-16 text-gray-800 relative"
      >
        My Skills
     
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 mt-12 px-4"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
          className="bg-white bg-opacity-80 rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center"
        >
          <motion.h3
            variants={headingVariants}
            className="text-xl md:text-2xl font-semibold mb-6 text-gray-800"
            whileHover={{ color: '#2563eb' }}
            transition={{ duration: 0.3 }}
          >
            Backend Development
          </motion.h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
            {backendSkills.map((src, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={skillItemVariants}
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
              >
                <img
                  src={src}
                  alt={`Backend Skill ${index}`}
                  className="w-full h-full object-contain"
                />
                <motion.div
                  className="absolute inset-0 bg-red-200 rounded-full blur-md"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={headingVariants}
            className="mt-6 text-gray-600 text-sm md:text-base text-center"
          >
            Building scalable backend applications with Node.js, Nest.js, PostgreSQL, and MongoDB.
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
          className="bg-white bg-opacity-80 rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center"
        >
          <motion.h3
            variants={headingVariants}
            className="text-xl md:text-2xl font-semibold mb-6 text-gray-800"
            whileHover={{ color: '#2563eb' }}
            transition={{ duration: 0.3 }}
          >
            Frontend Development
          </motion.h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
            {frontendSkills.map((src, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={skillItemVariants}
                whileHover={{ rotate: src === reactLogo ? 360 : -12, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
              >
                <img
                  src={src}
                  alt={`Frontend Skill ${index}`}
                  className="w-full h-full object-contain"
                />
                <motion.div
                  className="absolute inset-0 bg-blue-200 rounded-full blur-md"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={headingVariants}
            className="mt-6 text-gray-600 text-sm md:text-base text-center"
          >
            Crafting dynamic frontends with React.js, Next.js, Tailwind CSS, shadcn/ui and more.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}