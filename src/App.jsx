import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const handleSuccessfulLogin = (message) => {
    setSuccessMessage(message);
  };
  const handleSuccessfulRegister = (message) => {
    setSuccessMessage(message);
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const updateCartItem = (itemId, newQuantity) => {
    // Ensure newQuantity is a valid number
    if (isNaN(newQuantity) || newQuantity < 1) {
      return; // Exit early if newQuantity is not a valid number
    }

    // Find the item in the cart by its ID
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(parseInt(newQuantity), 1) } // Use parseInt to ensure newQuantity is a number
        : item
    );

    setCartItems(updatedCartItems);
    const itemToUpdate = cartItems.find((item) => item.id === itemId);
    const quantityChange = newQuantity - itemToUpdate.quantity;
    setCartTotalQuantity((prevTotal) => prevTotal + quantityChange);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const addToCart = (product, quantity) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += quantity;
    } else {
      updatedCartItems.push({ ...product, quantity: quantity });
    }

    setCartItems(updatedCartItems);
    setCartTotalQuantity((prevTotal) => prevTotal + parseInt(quantity, 10));
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const deleteCartItem = (itemId, itemQuantity) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setCartTotalQuantity((prevTotal) => prevTotal - parseInt(itemQuantity, 10));
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart by setting cartItems to an empty array
    setCartTotalQuantity(0); // Reset the total quantity
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header
          cartTotalQuantity={cartTotalQuantity}
          setIsAuthenticated={setIsAuthenticated}
        />
        <div className="py-8">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  addToCart={addToCart}
                  setCartTotalQuantity={setCartTotalQuantity}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  addToCart={addToCart}
                  setCartTotalQuantity={setCartTotalQuantity}
                />
              }
            />

            <Route
              element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
            >
              <Route
                path="/cart"
                element={
                  <Cart
                    cartItems={cartItems}
                    updateCartItem={updateCartItem}
                    deleteCartItem={deleteCartItem}
                  />
                }
                exact
              />
            </Route>

            <Route
              path="/login"
              element={
                <Login
                  onSuccessfulLogin={handleSuccessfulLogin}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  onSuccessfulRegister={handleSuccessfulRegister}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  successMessage={successMessage}
                  setSuccessMessage={setSuccessMessage}
                />
              }
            />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
            />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
