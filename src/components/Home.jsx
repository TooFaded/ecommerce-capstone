import Hero from "./Hero";
import BestSellers from "./BestSellers";
import PromotionalBanner from "./PromotionalBanner";
import StayInTouch from "./StayInTouch";
import { useState, useEffect } from "react";
import axios from "axios";
import Recommended from "./Recommended";

const Home = ({ addToCart, setCartTotalQuantity }) => {
  const [bestSellers, setBestSellers] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=6"
        );
        setBestSellers(response.data);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      }
    };

    fetchBestSellers();
  }, []);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=12"
        );
        setRecommendedItems(response.data);
      } catch (error) {
        console.error("Error fetching recommended items:", error);
      }
    };

    fetchRecommended();
  }, []);

  return (
    <div className="container mx-auto p-8 h-full">
      <Hero />
      <BestSellers
        bestSellers={bestSellers}
        addToCart={addToCart}
        setCartTotalQuantity={setCartTotalQuantity}
      />
      <PromotionalBanner
        title="Special Promotion"
        description="Limited-time offer: Get 20% off on selected items!"
      />
      <Recommended
        recommendedItems={recommendedItems}
        addToCart={addToCart}
        setCartTotalQuantity={setCartTotalQuantity}
      />
      <StayInTouch />
    </div>
  );
};

export default Home;
