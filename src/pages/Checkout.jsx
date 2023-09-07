import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
    nameOnCard: "",
    address: "",
    city: "",
    stateProvince: "",
    postalCode: "",
  });

  const [loading, setLoading] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      navigate("/order-confirmation");
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-10 h-full">
      <h2 className="text-3xl font-semibold mb-4 text-center">Checkout</h2>
      <div className="flex justify-center  items-center space-x-20">
        <form
          className="border-4 border-grey-300 w-[80vw] p-10 py-20 m-20"
          onSubmit={handlePlaceOrder}
        >
          {/* Payment Information */}
          <h3 className="text-2xl font-semibold mb-2">Payment Information</h3>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block text-gray-700">
              Card Holder:
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={paymentData.cardHolder}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expirationDate" className="block text-gray-700">
              Expiration Date (MM/YY):
            </label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={paymentData.expirationDate}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700">
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Billing Information */}
          <h3 className="text-2xl font-semibold mb-2">Billing Information</h3>

          <div className="mb-4">
            <label htmlFor="nameOnCard" className="block text-gray-700">
              Name on Card:
            </label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              value={paymentData.nameOnCard}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={paymentData.address}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={paymentData.city}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stateProvince" className="block text-gray-700">
              State / Province:
            </label>
            <input
              type="text"
              id="stateProvince"
              name="stateProvince"
              value={paymentData.stateProvince}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postalCode" className="block text-gray-700">
              Postal Code:
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={paymentData.postalCode}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-orange-500 text-white py-2 mt-4 rounded-lg hover:bg-orange-600 focus:outline-none"
            type="submit"
          >
            {loading && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 border-t-4 border-orange-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </form>

        {/* Cart Summary */}
        <div className="flex flex-wrap justify-center">
          {cartItems.map((item) => (
            <div key={item.id} className="border-4  p-4 mb-4 w-[20rem]">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mx-auto mb-2"
              />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))}

          {/* Total */}
          <div className="w-full">
            <div className="flex flex-col justify-end items-end border-t-2 border-gray-300 p-4">
              <div className="text-lg font-semibold">
                Shipping & handling: $0.00
              </div>
              <div className="flex space-x-1">
                <div className="text-lg font-semibold">Total:</div>
                <div className="text-lg">${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
