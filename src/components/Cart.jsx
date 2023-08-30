const Cart = ({ cartItems, updateCartItem, deleteCartItem }) => {
  return (
    <div className="container mx-auto p-8 h-screen text-center">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-row flex-wrap justify-center space-x-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border-4  p-4 mb-4 w-[20rem]">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mx-auto mb-2"
              />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <div className="text-xl p-2 flex justify-center space-x-4 ">
                Quantity:{" "}
                <button
                  className="px-2 ml-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
                  onClick={() => updateCartItem(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-2 mr-2  bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
                  onClick={() => updateCartItem(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="px-3 py-1 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                onClick={() => deleteCartItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          {/* Add checkout button, total price, etc. */}
        </div>
      )}
    </div>
  );
};

export default Cart;
