import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex">
      <div className="relative w-11/12 border-4 bg-amber-100">
        <div>
          <div className="text-center p-28 pl-0 space-y-2">
            <h2 className="font-light text-4xl">Dare to waer</h2>
            <h1 className="font-semibold text-5xl">Modest Design</h1>
            <button className="border-2 py-2 px-6 border-white rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-gray-600 px-2 py-4">footer</div>
        <div className="z-50 absolute right-0 bottom-0 border-2">
          <Image
            src={"/crop top.png"}
            alt="my image"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="w-1/12 border-4">secondanry</div>
    </div>
  );
}
