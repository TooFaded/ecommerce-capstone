import { useLocation } from "react-router-dom";
import confirmImg from "../assets/confirmImg.png";

const OrderConfirmation = () => {
  const location = useLocation();
  const { clearCart } = location.state || {}; // Access the clearCart function from location.state

  // Check if clearCart function exists and call it to clear the cart
  if (clearCart) {
    clearCart();
  }
  return (
    <div className="container mx-auto p-8 h-full text-center">
      <h2 className="text-3xl font-semibold mb-4">Order Confirmation</h2>
      <p>
        Your order has been placed successfully. Thank you for shopping with us!
      </p>
      <div className="flex justify-center items-center mt-40">
        <img className="w-60" src={confirmImg} alt="" />
      </div>
    </div>
  );
};

export default OrderConfirmation;
