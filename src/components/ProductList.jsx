import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="max-w-7xl mt-8 grid gap-8 auto-cols-min md:grid-cols-4 lg:grid-cols-5 ml-36 sm:mx-auto ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
