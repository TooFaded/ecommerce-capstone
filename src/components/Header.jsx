import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-500 p-6 text-white">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-3xl font-semibold font-bungee">TEMI</h1>
        <nav className="">
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
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
