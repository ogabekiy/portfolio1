import React from 'react';
import { motion } from 'framer-motion';
import { Ogabek } from '../../public';

export default function Hero() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto w-full max-w-7xl px-5 py-16 flex flex-col md:flex-row items-center gap-12"
    >
      <motion.div
        variants={imageVariants}
        className="flex-1 relative order-1 pt-14 md:order-2"
      >
        <motion.div
          whileHover={{ rotate: 6, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative md:w-[400px] md:h-[400px] rounded-full mx-auto overflow-hidden shadow-2xl"
        >
          <img
            className="w-full h-full object-cover"
            src={Ogabek}
            alt="Profile"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500/20 to-purple-500/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex-1 mt-8 md:mt-[200px] text-center md:text-left order-2 md:order-1"
      >
        <motion.div
          variants={textVariants}
          className="flex items-center justify-center md:justify-start mb-5 gap-2"
        >
          <motion.img
            src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75"
            alt="Zap"
            className="w-8 h-8"
            whileHover={{ scale: 1.2, rotate: 20 }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-lg font-medium text-gray-700">Hi, my name is</p>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="text-5xl font-extrabold text-gray-800 leading-snug"
        >
          Og'abek, <br /> a{' '}
          <motion.span
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ backgroundPosition: '0%' }}
            whileHover={{ backgroundPosition: '100%' }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="mt-5 text-gray-600 text-lg"
        >
          Always eager to solve{' '}
          <motion.span
            className="text-blue-500"
            whileHover={{ scale: 1.05, color: '#3b82f6' }}
          >
            Tech problems
          </motion.span>{' '}
          and <br /> to learn something{' '}
          <motion.span
            className="text-purple-500"
            whileHover={{ scale: 1.05, color: '#8b5cf6' }}
          >
            new!
          </motion.span>
        </motion.p>

        <motion.button
          variants={textVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScroll}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
}