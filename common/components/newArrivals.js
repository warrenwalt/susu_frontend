import ProductCard from "./productCard";

export default function NewArrivals() {
  return (
    <div className="mt-40 flex flex-col justify-around px-10">
      <div className="flex justify-between mx-5">
        <h1 className="uppercase font-bold text-2xl">
          <p className="mb-8">new arrivals</p>
          <hr className="border border-black w-14" />
        </h1>
        <button className="uppercase bg-black text-white text-xs rounded-full px-8 py-3 h-fit">
          all products
        </button>
      </div>
      <div className="flex space-x-2 mt-16 px-4">
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
