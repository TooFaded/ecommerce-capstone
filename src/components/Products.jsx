import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Products = () => {
  // State to store fetched product data
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    // Fetch logic here
    // Update the products state with fetched data
  }, []);

  return (
    <div className="container mx-auto p-8 h-screen text-center">
      <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
