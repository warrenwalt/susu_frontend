import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex flex-col w-90 text-lg">
      <div className="flex justify-center">
        <Image src="/top.jpg" width={180} height={150} alt="bag" />
      </div>
      {/* title */}
      <div className="flex mt-10 justify-center">
        <h1 className="font-bold text-center">Susu dress-1</h1>
      </div>
      {/* body */}
      <div className="flex mt-4 justify-center">
        <p className="font-light w-8/12 text-center leading-5">
          Cotton blend long dress
        </p>
      </div>
      {/* footer */}
      <div className="flex mt-2 justify-center text-xs space-x-2">
        <div className="font-bold">$20.00</div>
        <div className="text-gray-500 font-semibold">$30.00</div>
        <div className="text-red-500 font-semibold">-20%</div>
      </div>
    </div>
  );
}
