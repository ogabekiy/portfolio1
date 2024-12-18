import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r  text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl text-gray-900 font-bold mb-3">Connect with Me {')'}</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://github.com/ogabekiy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ogabek-mullajonov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://telegram.me/Ishowcode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-telegram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-blue-500 my-6 w-4/5 mx-auto" />

      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Og'abek | All Rights Reserved.
      </div>
    </footer>
  );
}
