import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="text-2xl flex sm:justify-end justitfy-center items-center space-x-6 p-10 pl-28">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
      </div>
      <div className="list-none sm:flex hidden justify-center space-x-60 mb-40">
        <div className="flex flex-col">
          <h3 className="text-2xl mb-4">Company info</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">About Temi</li>
            <li className="hover:underline hover:cursor-pointer">Careers</li>
            <li className="hover:underline hover:cursor-pointer">
              Affiliate & Influencer
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Campus ambassador
            </li>
            <li className="hover:underline hover:cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl mb-4">Customer service</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">
              Terms of use
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Return and refund policy
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Intellectual property policy
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Shipping info
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Student discount
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl mb-4">Help</h3>
          <ul className="space-y-2">
            <li className="hover:underline hover:cursor-pointer">
              Support center & FAQ
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Temi purchase protection
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Privacy policy and setting
            </li>
            <li className="hover:underline hover:cursor-pointer">
              How to order
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Sell on Temi
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4 items-center mt-10 border-t-2">
        <div className="flex flex-row space-x-4 mt-6">
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
        <p>&copy; {new Date().getFullYear()} TEMI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
