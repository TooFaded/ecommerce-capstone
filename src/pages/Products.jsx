import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";

const Products = ({ addToCart, setCartTotalQuantity }) => {
  // State to store fetched product data
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        // Update the products state with fetched data
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  // Sort products based on sortBy criteria
  filteredProducts.sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price; // Sort by price in ascending order
    } else if (sortBy === "price-desc") {
      return b.price - a.price; // Sort by price in descending order
    }
    return 0; // Default: no sorting
  });

  return (
    <div className="container mx-auto p-8 h-screen overflow-scroll">
      <h2 className="text-3xl font-semibold mb-4 text-center">Our Products</h2>
      <div className="flex justify-evenly items-center mb-4">
        <div className="p-1">
          Sort by Price:
          <button
            className={`mx-2 underline ${
              sortBy === "price-asc" ? "bg-orange-500 text-white p-1" : ""
            }`}
            onClick={() => setSortBy("price-asc")}
          >
            Low to High
          </button>
          <button
            className={`mx-2 underline ${
              sortBy === "price-desc" ? "bg-orange-500 text-white p-1" : ""
            }`}
            onClick={() => setSortBy("price-desc")}
          >
            High to Low
          </button>
        </div>
        <div>
          Filter by Category:
          <select
            className="mx-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All</option>

            {Array.from(
              new Set(products.map((product) => product.category))
            ).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
          setCartTotalQuantity={setCartTotalQuantity}
        />
      </div>
      <Link
        to="/cart"
        className="text-orange-500 hover:underline flex justify-center mt-10"
      >
        View Cart
      </Link>
    </div>
  );
};

export default Products;
