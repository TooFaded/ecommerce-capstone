import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ cartTotalQuantity }) => {
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
              <Link to="/cart">
                <FaShoppingCart className="text-2xl ml-4" />
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
