import ProductCard from "./productCard";

export default function NewArrivals() {
  return (
    <div className="mt-40 flex flex-col justify-around">
      <div className="flex justify-between">
        <h1 className="uppercase">new arrivals</h1>
        <button className="uppercase bg-black text-white">all products</button>
      </div>
      <div className="flex space-x-8 mt-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
