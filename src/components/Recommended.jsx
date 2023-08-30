import ProductCard from "./ProductCard";

const Recommended = ({ recommendedItems }) => {
  return (
    <section className="mt-20">
      <h2 className="text-center mt-8 text-4xl font-bold">Recommended</h2>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 mt-10 mb-20">
        {recommendedItems.map((product) => (
          <ProductCard key={product.id} product={product} showButtons={false} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
