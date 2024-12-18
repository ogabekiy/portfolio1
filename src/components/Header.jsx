import React from 'react';
import { Link } from 'react-router-dom';
import opium from '../assets/opium.png';

export default function Header() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='fixed top-0 w-full bg-white bg-opacity-60 backdrop-blur-md shadow-md z-50 px-6 py-4'>
      <div className='max-w-[1200px] w-full mx-auto flex justify-between items-center'>
        <div>
          <Link to="/">
            <img
              className='w-12 h-12 rounded-full transition-transform transform hover:scale-110'
              src={opium}
              alt="Logo"
            />
          </Link>
        </div>

        <nav className='flex gap-10'>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '#about' },
            { name: 'Skills', path: '#skills' },
            { name: 'Projects', path: '#projects' },
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className='text-lg font-semibold text-gray-700 hover:text-blue-600 relative transition-colors duration-300 group'
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div>
          <button onClick={handleScroll} className='px-5 py-2 text-white font-medium bg-gradient-to-r hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 from-blue-500 to-purple-500 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl'>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
