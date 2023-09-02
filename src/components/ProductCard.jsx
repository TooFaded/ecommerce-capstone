import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product, addToCart, showButtons }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
  };

  useEffect(() => {
    if (isAddedToCart) {
      const timer = setTimeout(() => {
        setIsAddedToCart(false);
      }, 2000); // Display the message for 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isAddedToCart]);

  return (
    <div className="bg-white flex flex-col justify-between rounded-lg shadow-md p-4 w-[14rem]">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mx-auto mb-2 cursor-pointer hover:scale-105"
        onClick={openModal}
      />
      <h3
        className="text-lg font-semibold hover:underline cursor-pointer"
        onClick={openModal}
      >
        {product.title}
      </h3>
      <p className="text-gray-600">${product.price}</p>
      {showButtons && (
        <button
          className=" mt-2 bg-orange-500 hover:bg-orange-700 text-white px-4 py-1 rounded-md"
          onClick={() => handleAddToCart(product, 1)}
        >
          Add to Cart
        </button>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <ProductModal
            product={product}
            closeModal={closeModal}
            addToCart={addToCart}
          />
        </div>
      )}

      {isAddedToCart && (
        <div className="flex justify-center items-center mt-2 mb-4 bg-green-500 text-white p-2 rounded-md">
          Item added to cart
        </div>
      )}
    </div>
  );
};

export default ProductCard;
