import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mx-auto mb-2"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
