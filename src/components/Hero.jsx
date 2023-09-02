import HeroImg from "../assets/hero-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-orange-600 text-white py-[3rem] flex justify-evenly shadow-2xl rounded-lg">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center sm:items-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-sans">
          Welcome to <span className="font-bungee">TEMI</span>, the newest
          Online Store!
        </h1>

        <p className="text-lg md:text-xl font-light lg:text-2xl mb-8">
          Discover a wide range of high-quality products at amazing prices.
        </p>
        <Link to="/products">
          <button className="bg-white text-orange-500 px-20 sm:px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition mt-4 cursor-pointer">
            Explore Products
          </button>
        </Link>

        <div className="flex justify-center space-x-12 mx-auto mt-2 sm:mt-[-3rem]">
          <p className="sm:text-3xl text-lg flex justify-start items-end font-bungee">
            LOW PRICES
          </p>
          <img
            className="sm:w-[10rem] w-[7rem] mb-[-10rem] mt-4 sm:mt-0"
            src={HeroImg}
            alt=""
          />
          <p className="flex justify-end sm:text-3xl text-lg items-end font-bungee">
            FREE SHIPPING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
