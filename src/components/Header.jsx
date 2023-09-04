import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartTotalQuantity, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("previousUserData");
    setIsAuthenticated(false);

    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <header className="bg-orange-500 p-6 text-white">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-3xl font-semibold font-bungee">
          <Link to="/">TEMI</Link>
        </h1>
        <nav className="font-sans">
          {" "}
          <ul className="flex space-x-8">
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
            <li>
              {localStorage.getItem("token") ? (
                <div className="flex items-center">
                  <Link to="/profile" className="text-white mr-4">
                    <MdAccountCircle className="text-3xl" />
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-white bg-orange-700 p-2 rounded-md"
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
                <FaShoppingCart className="text-2xl ml-1 mt-[3.3px]" />
                {cartTotalQuantity > 0 && (
                  <span className=" bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center">
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
