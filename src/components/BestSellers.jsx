import ProductCard from "./ProductCard";

const BestSellers = ({ bestSellers, addToCart, setCartTotalQuantity }) => {
  return (
    <section className="mt-40 flex flex-col justify-center items-center">
      <h2 className="text-center mt-8 text-4xl font-bold">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {bestSellers.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              product={product}
              showButtons={false}
              addToCart={addToCart}
              setCartTotalQuantity={setCartTotalQuantity}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
