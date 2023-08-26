import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
