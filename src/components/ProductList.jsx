import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart, setCartTotalQuantity }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-8xl mt-8 grid gap-8 auto-cols-min md:grid-cols-4 lg:grid-cols-5 ml-30 sm:mx-auto ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            showButtons={true}
            setCartTotalQuantity={setCartTotalQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
