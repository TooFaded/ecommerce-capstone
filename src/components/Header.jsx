import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
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
            {menuOpen ? (
              <GrClose className="test-white text-xl" /> // X symbol
            ) : (
              <FiMenu className="text-2xl" /> // Hamburger icon
            )}
          </button>
          {menuOpen && (
            <ul className="absolute top-20 right-50 bg-orange-400 p-6 border-2 border-orange-300 space-y-2 shadow-sm rounded-lg">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              {isSmallScreen && localStorage.getItem("token") && (
                <li>
                  <Link to="/profile" className="hover:underline">
                    Account
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-white bg-orange-700 p-2 rounded-md"
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          )}
          <ul className="flex">
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
