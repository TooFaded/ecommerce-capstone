import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../components/ProductList";

const Products = ({ addToCart, setCartTotalQuantity }) => {
  // State to store fetched product data
  const [products, setProducts] = useState([]);

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

  return (
    <div className="container mx-auto p-8 h-screen overflow-scroll">
      <h2 className="text-3xl font-semibold mb-4 text-center">Our Products</h2>
      <div className="flex justify-center items-center">
        <ProductList
          products={products}
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
