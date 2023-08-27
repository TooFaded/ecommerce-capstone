import ProductCard from "./ProductCard";

const BestSellers = ({ bestSellers }) => {
  return (
    <section className="mt-40">
      <h2 className="text-center mt-8 text-4xl">Our Best Sellers</h2>
      <div className="flex justify-evenly mt-10">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
