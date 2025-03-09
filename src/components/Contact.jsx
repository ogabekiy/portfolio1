import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendMessageToAdmin } from "../Contact/bot";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    try {
      await sendMessageToAdmin(name, message);
      alert("Xabaringiz muvaffaqiyatli yuborildi!");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Xato:", error);
      alert("Xabarni yuborishda muammo yuz berdi. Keyinroq urinib ko'ring.");
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex items-center justify-center py-10 px-5"
    >
      <motion.div
        variants={formVariants}
        className="w-full max-w-3xl bg-white bg-opacity-50 shadow-lg rounded-lg p-8"
        whileHover={{ scale: 0.91 }} // Adjusted from scale-[90%] to animate on hover
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center text-gray-800 mb-6"
        >
          Contact Us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 mb-8"
        >
          Feel free to drop us a message. We'll get your message by bot and respond asap!
        </motion.p>
        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#2563eb" }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#2563eb" }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}