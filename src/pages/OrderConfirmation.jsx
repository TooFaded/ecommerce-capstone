import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { clearCart } = location.state || {}; // Access the clearCart function from location.state

  // Check if clearCart function exists and call it to clear the cart
  if (clearCart) {
    clearCart();
  }
  return (
    <div className="container mx-auto p-8 h-screen text-center">
      <h2 className="text-3xl font-semibold mb-4">Order Confirmation</h2>
      <p>
        Your order has been placed successfully. Thank you for shopping with us!
      </p>
    </div>
  );
};

export default OrderConfirmation;
