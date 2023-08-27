import Hero from "./Hero";
import BestSellers from "./BestSellers";
import PromotionalBanner from "./PromotionalBanner";
import StayInTouch from "./StayInTouch";
import { useState, useEffect } from "react";
import axios from "axios";
import Recommended from "./Recommended";

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
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
    <div className="container mx-auto p-8 h-[220rem]">
      <Hero />
      <BestSellers bestSellers={bestSellers} />
      <PromotionalBanner
        title="Special Promotion"
        description="Limited-time offer: Get 20% off on selected items!"
      />
      <Recommended recommendedItems={recommendedItems} />
      <StayInTouch />
    </div>
  );
};

export default Home;
