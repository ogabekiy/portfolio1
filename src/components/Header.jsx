import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import opium from '../assets/opium.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='fixed top-0 w-full bg-white bg-opacity-60 backdrop-blur-md shadow-md z-50 px-6 py-4'>
      <div className='max-w-[1200px] w-full mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img
            className='w-12 h-12 animate-spin-slow rounded-full hover:scale-110 transition-transform'
            src={opium}
            alt='Logo'
          />
        </Link>

        <nav className='hidden md:flex gap-8'>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '#about' },
            { name: 'Skills', path: '#skills' },
            { name: 'Projects', path: '#projects' },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className='text-lg font-semibold text-gray-700 hover:text-blue-600 relative transition-colors duration-300 group'
            >
              {link.name}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
            </NavLink>
          ))}
        </nav>

        <button
          onClick={handleScroll}
          className='hidden md:block px-5 py-2 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl'
        >
          Contact
        </button>

        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-white shadow-md py-4'>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '#about' },
            { name: 'Skills', path: '#skills' },
            { name: 'Projects', path: '#projects' },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className='text-lg font-semibold text-gray-700 hover:text-blue-600 py-2'
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={handleScroll}
            className='mt-2 px-5 py-2 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg'
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
