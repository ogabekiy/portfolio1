import React from 'react';
import twentyone from '../assets/twentyone.png'
export default function About() {
  return (
    <div id='about' className="container mx-auto w-full max-w-7xl px-5 py-16 mt-32">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
        More About Me
      </h2>

      <div className="relative bg-gradient-to-br from-white via-gray-100 to-blue-50 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center hover:shadow-2xl transition-all duration-500 group">
        <div className="w-full md:w-1/2 transform group-hover:scale-105 transition-transform duration-500">
          <img
            className="w-full h-[400px] rounded-r-xl object-cover shadow-2xl"
            src="https://i.pinimg.com/736x/3b/f7/75/3bf775d7f7795bd8fc3414387ecfd12e.jpg"
            alt="tyler"
          />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 group-hover:text-blue-500 transition-colors duration-300">
            Passionate Full Stack Developer
          </h3>
          <p className="text-gray-600 leading-relaxed">
          I am a passionate and detail-oriented Full Stack Developer with a strong interest in solving complex technical challenges. With a continuous learning mindset, I enjoy crafting efficient and scalable solutions that make a real impact. I specialize in building clean, functional, and user-friendly applications while staying updated with the latest technologies. My goal is to contribute to projects that empower users and drive innovation.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I love building interactive and responsive web applications. My expertise spans both the front-end and
            back-end technologies, ensuring seamless user experiences.
          </p>

          <div className="mt-6 w-20 h-1 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
