import ProductCard from "./ProductCard";

const Recommended = ({ recommendedItems, addToCart, setCartTotalQuantity }) => {
  return (
    <section className="mt-20 mb-20 flex flex-col justify-between items-center">
      <h2 className="text-center mt-8 text-4xl font-bold">Recommended</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {recommendedItems.map((product) => (
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

export default Recommended;
