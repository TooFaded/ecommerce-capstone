import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-2xl font-semibold">HedFONE</h1>
        <nav className="">
          {" "}
          <ul className="flex space-x-4">
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
              <Link to="/cart" className="hover:underline">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
