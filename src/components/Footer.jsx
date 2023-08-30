import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="text-2xl flex justify-end items-center space-x-6 p-20">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
      </div>
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
