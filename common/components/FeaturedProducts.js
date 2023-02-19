import ProductCard from "./productCard";

export default function FeaturedProducts() {
  return (
    <div className="mt-20 space-y-16">
      <div className="flex justify-center text-center font-bold text-2xl tracking-wide uppercase">
        Featured products
      </div>
      <div className="flex space-x-12 justify-center px-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
