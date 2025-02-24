import React from 'react';
import reactLogo from '../assets/react.svg';
import nodejsLogo from '../assets/nodejs.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import postgresql from '../assets/postgresqlicon.svg';
import mongo from '../assets/mongo.png';
import { JS, Nest, Next, Shadcn, Typescript } from '../assets';

export default function Skills() {
  const backendSkills = [nodejsLogo, mongo, postgresql, Nest,JS,Typescript];
  const frontendSkills = [html, css, tailwind, reactLogo, Next,Shadcn];

  return (
    <div
      id="skills"
      className="container mx-auto w-full max-w-7xl px-4 py-10 md:py-20 "
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-10 md:mt-16 text-gray-800 relative">
        <span className="relative z-10">My Skills</span>
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-400 via-red-400 to-purple-400 opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 mt-12 px-4">
        <div className="group bg-white bg-opacity-80 rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-[102%] hover:shadow-xl hover:bg-gradient-to-br from-blue-50 to-blue-100">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Backend Development
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
            {backendSkills.map((src, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
              >
                <img
                  src={src}
                  alt={`Backend Skill ${index}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-red-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 text-sm md:text-base text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Building scalable backend applications with Node.js, Nest.js, PostgreSQL, and MongoDB.
          </p>
        </div>

        <div className="group bg-white bg-opacity-80 rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-[102%] hover:shadow-xl hover:bg-gradient-to-br from-blue-50 to-blue-100">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Frontend Development
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
            {frontendSkills.map((src, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
              >
                <img
                  src={src}
                  alt={`Frontend Skill ${index}`}
                  className={`w-full h-full object-contain transition-transform duration-500 ${
                    src === reactLogo ? 'animate-spin-slow' : 'group-hover:-rotate-12 group-hover:scale-110'
                  }`}
                />
                <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 text-sm md:text-base text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Crafting dynamic frontends with React.js, Next.js, Tailwind CSS,shadcn/ui and more.
          </p>
        </div>
      </div>
    </div>
  );
}