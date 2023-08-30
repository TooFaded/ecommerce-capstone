import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const updateCartItem = (itemId, newQuantity) => {
    // Find the item in the cart by its ID
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(newQuantity, 1) } // Prevent quantity from going below 1
        : item
    );

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      updatedCartItems.push({ ...product, quantity: 1 });
    }
    setCartTotalQuantity(cartTotalQuantity + 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const deleteCartItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    setCartTotalQuantity(cartTotalQuantity - 1);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header cartTotalQuantity={cartTotalQuantity} />
        <div className="py-8">
          <Routes>
            <Route path="/" exact element={<Home addToCart={addToCart} />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  updateCartItem={updateCartItem}
                  deleteCartItem={deleteCartItem}
                />
              }
            />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
