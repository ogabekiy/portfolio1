import React from 'react';
import reactLogo from '../assets/react.svg';
import nodejsLogo from '../assets/nodejs.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import postgresql from '../assets/postgresqlicon.svg';
import mongo from '../assets/mongo.png';

export default function Skills() {
  return (
    <div id='skills' className='container mx-auto w-full max-w-7xl px-5 py-5'>
      <h2 className='text-4xl font-extrabold text-center mt-16 text-gray-800'>
        My Skills
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
        
        <div className='group bg-white bg-opacity-50 rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl'>
          <h3 className='text-2xl font-semibold mb-6 text-gray-800 group-hover:text-red-500 transition-colors'>
            Backend Development
          </h3>
          <div className='flex space-x-6'>
            <img
              src={nodejsLogo}
              alt='Node.js'
              className='w-20 h-20 transition-transform transform group-hover:-rotate-6'
            />
            <img
              src={mongo}
              alt='MongoDB'
              className='w-20 h-20 transition-transform transform group-hover:rotate-6'
            />
            <img
              src={postgresql}
              alt='PostgreSQL'
              className='w-20 h-20 transition-transform transform group-hover:-rotate-6'
            />
          </div>
          <p className='mt-6 text-gray-600 text-center'>
            Building scalable backend applications with Node.js, MongoDB, and PostgreSQL.
          </p>
        </div>

        
        <div className='group bg-white bg-opacity-50 rounded-lg shadow-lg p-8 flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl'>
          <h3 className='text-2xl font-semibold mb-6 text-gray-800 group-hover:text-blue-500 transition-colors'>
            Frontend Development
          </h3>
          <div className='grid grid-cols-2 gap-6 items-center justify-items-center'>
            <img
              src={html}
              alt='HTML'
              className='w-16 h-16 transition-transform transform group-hover:rotate-6'
            />
            <img
              src={css}
              alt='CSS'
              className='w-16 h-16 transition-transform transform group-hover:-rotate-6'
            />
            <img
              src={tailwind}
              alt='Tailwind CSS'
              className='w-16 h-16 transition-transform transform group-hover:rotate-6'
            />
            <img
              src={reactLogo}
              alt='React'
              className='w-16 h-16 animate-spin-slow'
            />
          </div>
          <p className='mt-6 text-gray-600 text-center'>
            HTML → CSS → Tailwind CSS → React.js
          </p>
        </div>
      </div>
    </div>
  );
}
