import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, updateCartItem, deleteCartItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8 h-[120vh] text-center">
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
              <p>${item.price}</p>
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
                onClick={() => deleteCartItem(item.id, item.quantity)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="w-full mt-20">
            <div className="flex justify-between border-t-2 border-gray-300 p-4">
              <div className="text-lg font-semibold">Total:</div>
              <div className="text-lg">${calculateTotal().toFixed(2)}</div>
            </div>
            <button
              className="w-full bg-orange-500 text-white py-2 mt-4 rounded-lg hover:bg-orange-600 focus:outline-none"
              onClick={() => {
                // Add logic to navigate to the checkout page here

                navigate("/checkout");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
