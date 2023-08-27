import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-orange-600 text-white py-[3rem] flex justify-evenly shadow-2xl">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-sans">
          Welcome to <span className="font-bungee">TEMI</span>, the newest
          Online Store!
        </h1>

        <p className="text-lg md:text-xl font-light lg:text-2xl mb-8">
          Discover a wide range of high-quality products at amazing prices.
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-100 transition">
          Explore Products
        </button>

        <div className="flex justify-center space-x-12">
          <p className="text-4xl flex justify-start items-end font-bungee">
            LOW PRICES
          </p>
          <img className="w-[10rem] mb-[-10rem]" src={HeroImg} alt="" />
          <p className="flex justify-end text-4xl items-end font-bungee">
            FREE SHIPPING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;