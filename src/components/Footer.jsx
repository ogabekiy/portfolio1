import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hrVariants = {
    hidden: { width: 0 },
    visible: {
      width: "80%",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <motion.div variants={containerVariants}>
          <motion.h3
            variants={itemVariants}
            className="text-2xl text-gray-900 font-bold mb-3"
          >
            Connect with Me {")"}
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="flex justify-center md:justify-start space-x-5"
          >
            <motion.a
              href="https://github.com/ogabekiy"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover={{ scale: 1.1, color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ogabek-mullajonov/"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover={{ scale: 1.1, color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://telegram.me/Ishowcode"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover={{ scale: 1.1, color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              <i className="fab fa-telegram"></i>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.hr
        variants={hrVariants}
        className="border-t border-blue-500 my-6 mx-auto"
      />

      <motion.div
        variants={itemVariants}
        className="text-center text-gray-500 mb-6 text-sm"
      >
        © {new Date().getFullYear()} OGABEK | All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}