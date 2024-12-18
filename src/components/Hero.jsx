import React from 'react';
import golf from '../assets/golf.png';
import savage from '../assets/savage.png';

export default function Hero() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto w-full max-w-7xl px-5 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 mt-16 md:mt-[200px] text-center md:text-left animate-fade-in">
        <div className="flex items-center justify-center md:justify-start mb-5 gap-2">
          <img
            src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75"
            alt="Zap"
            className="w-8 h-8"
          />
          <p className="text-lg font-medium text-gray-700">Hi, my name is</p>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 leading-snug">
          Og'abek, <br /> a{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Always eager to solve <span className="text-blue-500">Tech problems</span> and <br /> to learn something{' '}
          <span className="text-purple-500">new!</span>
        </p>

        <button
          onClick={handleScroll}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Get Started
        </button>
      </div>

      <div className="flex-1 relative">
        <div className="relative w-[400px] h-[400px] rounded-full mx-auto overflow-hidden shadow-2xl transform hover:rotate-6 transition-transform duration-500">
          <img
            className="w-full h-full object-cover"
            src={savage}
            alt="Profile"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent  to-transparent opacity-50 blur-2xl"></div>
        </div>
      </div>

      
    </div>
  );
}
