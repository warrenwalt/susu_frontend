import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex">
      <div className="relative w-11/12  bg-mine">
        <div>
          <div className="text-center p-28 pl-0 space-y-10">
            <div>
              <h2 className="font-light text-5xl">Dare to wear</h2>
              <h1 className="font-semibold text-6xl">Modest Design</h1>
            </div>
            <button className="uppercase border-2 py-3 px-10 border-white rounded-3xl text-xs text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-start text-white bg-gray-600 px-2 py-4">
          <div className="flex space-x-20 ml-24 text-sm">
            <p>the new look book 2019</p>
            <div className="border border-white "></div>
            <p>daily inspiration and tips</p>
          </div>
        </div>
        <div className="z-50 absolute -right-48 bottom-0 w-fit">
          <Image src={"/model4.png"} alt="my image" width={610} height={300} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/12 text-xs font-semibold uppercase space-y-4 text-center">
        <div className="border-2 border-black py-10 w-1"></div>
        <p className="h-fit">fb</p>
        <p className="h-fit">ig</p>
        <p className="h-fit">tw</p>
        <p className="h-fit">pr</p>
        <div className="border-2 border-black py-10 w-1"></div>
      </div>
    </div>
  );
}
