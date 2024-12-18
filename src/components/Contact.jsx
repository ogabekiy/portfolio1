import React, { useState } from "react";
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

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center py-10 px-5">
      <div className="w-full max-w-3xl bg-white bg-opacity-50 scale-[90%] shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Feel free to drop us a message. We'll get your messaeg by bot and response asap!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 transform transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
