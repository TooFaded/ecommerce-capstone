const ProductCard = ({ product }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-lg shadow-md p-4 w-[14rem]">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mx-auto mb-2"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className=" mt-2 bg-orange-500 hover:bg-orange-700 text-white px-4 py-1 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
