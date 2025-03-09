import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: 80,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="container mx-auto w-full max-w-7xl px-5 py-16 mt-32"
    >
      <motion.h2
        variants={textVariants}
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
      >
        More About Me
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="relative bg-gradient-to-br from-white via-gray-100 to-blue-50 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
      >
        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2"
        >
          <img
            className="w-full h-[400px] rounded-r-xl object-cover shadow-2xl"
            src="https://i.pinimg.com/736x/3b/f7/75/3bf775d7f7795bd8fc3414387ecfd12e.jpg"
            alt="tyler"
          />
          <motion.div
            className="absolute inset-0 bg-blue-500/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full md:w-1/2 p-10"
        >
          <motion.h3
            variants={textVariants}
            className="text-2xl font-bold text-gray-800 mb-5"
            whileHover={{ color: '#3b82f6', x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Passionate Full Stack Developer
          </motion.h3>
          <motion.p
            variants={textVariants}
            className="text-gray-600 leading-relaxed"
          >
            I am a passionate and detail-oriented Full Stack Developer with a strong interest in solving complex technical challenges. With a continuous learning mindset, I enjoy crafting efficient and scalable solutions that make a real impact. I specialize in building clean, functional, and user-friendly applications while staying updated with the latest technologies. My goal is to contribute to projects that empower users and drive innovation.
          </motion.p>
          <motion.p
            variants={textVariants}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            I love building interactive and responsive web applications. My expertise spans both the front-end and back-end technologies, ensuring seamless user experiences.
          </motion.p>

          <motion.div
            variants={barVariants}
            className="mt-6 h-1 bg-blue-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}