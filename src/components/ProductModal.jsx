import { useState, useEffect } from "react";

const ProductModal = ({ product, closeModal, addToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
  };

  useEffect(() => {
    if (isAddedToCart) {
      const timer = setTimeout(() => {
        setIsAddedToCart(false);
        closeModal(); // Close the modal after showing the message
      }, 2000); // Display the message for 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isAddedToCart, closeModal]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="modal-bg fixed inset-0 bg-black opacity-50 z-40"
        onClick={closeModal}
      />
      <div className="modal-container bg-white rounded-lg shadow-lg p-4 sm:p-8 w-100 sm:w-[46rem] h-100 sm:h-[40rem] z-50 flex flex-col justify-evenly">
        <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-10">
          Category: {product.category}
        </h1>
        <p className="text-base sm:text-xl">
          Rating{" "}
          <span className="text-orange-400 font-semibold">
            {product.rating.rate}
          </span>
        </p>
        <p className="text-right text-base sm:text-xl text-orange-400">
          FREE SHIPPING
        </p>
        <div className="mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-24 h-24 sm:w-32 sm:h-32 object-fill mx-auto mb-6 sm:mb-10"
          />
          <p className="text-center font-semibold">{product.title}</p>

          <p className="text-gray-600 text-sm sm:text-lg leading-relaxed mt-2 sm:mt-4 ml-2 sm:ml-4">
            {product.description}
          </p>
        </div>
        <p className="text-center text-gray-600">${product.price}</p>
        <div className="flex flex-row justify-center items-center">
          <label htmlFor="quantity" className="mb-2 mr-2 text-sm sm:text-base">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            className="w-16 text-center  py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleAddToCart(product, quantity)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-xl px-3 sm:px-4 py-1 mt-2 sm:py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
        {isAddedToCart && (
          <div className="flex justify-center items-center mt-2 mb-4 bg-green-500 text-white p-2 rounded-md mx-20 sm:mx-40">
            Item added to cart
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            onClick={closeModal}
            className="text-white bg-orange-500 p-2 px-3 sm:px-4 rounded-md"
          >
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;
