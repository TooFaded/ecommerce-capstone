import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="flex flex-col justify-center space-y-4 items-center mt-10">
        <div className="flex flex-row space-x-4">
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms &amp; Conditions
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} HedFONE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
