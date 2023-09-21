import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BiSolidTShirt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ cartTotalQuantity, setIsAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("previousUserData");
    setIsAuthenticated(false);

    // Redirect the user to the login page
    navigate("/login");
  };

  // Determine if the screen width is small
  const isSmallScreen = window.innerWidth <= 640;
  const isAuthenticated = localStorage.getItem("token") !== null;

  return (
    <header className="bg-orange-500 p-6 text-white relative">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-3xl font-semibold font-bungee">
          <Link to="/">TEMI</Link>
        </h1>
        <nav className="flex font-sans z-50">
          {" "}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white rounded-md shadow-sm focus:outline-none mb-1 mr-4"
          >
            <FiMenu className="text-2xl" />
          </button>
          {menuOpen && (
            <ul
              className={`fixed top-0 right-0 p-1 h-screen w-1/3 border-2 border-orange-300 bg-gradient-to-r from-orange-500 to bg-orange-400 animate-slide-right transition-duration-100 shadow-lg ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              } z-50`}
            >
              <button
                className="m-8 text-left"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MdClose className="text-white text-4xl" />
              </button>
              <li className="mt-10">
                <Link
                  to="/"
                  className="flex text-xl sm:text-3xl px-4 py-2 text-white hover:bg-white hover:text-orange-500"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHome className="mr-2 hidden sm:flex" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="flex text-xl sm:text-3xl px-4 py-2 text-white hover:bg-white hover:text-orange-500"
                  onClick={() => setMenuOpen(false)}
                >
                  <BiSolidTShirt className="mr-2 hidden sm:flex" />
                  Products
                </Link>
              </li>

              {isSmallScreen && localStorage.getItem("token") && (
                <li>
                  <Link
                    to="/profile"
                    className="block text-xl sm:text-3xl px-4 py-2 text-white hover:bg-white hover:text-orange-500"
                  >
                    Account
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMenuOpen(false);
                    }}
                    className="text-white text-md sm:text-2xl bg-orange-700 p-2 sm:p-4 rounded-md m-4"
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          )}
          <ul className="flex space-x-1">
            <li>
              {localStorage.getItem("token") ? (
                <div className="flex items-center">
                  {!isSmallScreen && ( // Hide on small screens
                    <Link to="/profile" className="text-white mr-4">
                      <MdAccountCircle className="text-3xl" />
                    </Link>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="text-white bg-orange-700 p-2 rounded-md hidden"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <MdAccountCircle className="text-3xl" />
                </Link>
              )}
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingCart className="text-2xl ml-4 mt-[3.3px]" />
                {cartTotalQuantity > 0 && (
                  <span className="absolute top-5 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center">
                    {cartTotalQuantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
