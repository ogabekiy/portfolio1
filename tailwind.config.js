/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-15px 10px 5px 0px rgba(176,139,245,1)',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite', 
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
}

