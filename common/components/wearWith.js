import Image from "next/image";

export default function WearWith() {
  return (
    <div className="flex flex-col space-y-8 pt-6">
      <div className="text-3xl font-bold uppercase">Wear with</div>
      <div className="flex space-x-14">
        <Image src="/top.jpg" alt="top" width={200} height={200} />
        <div className="my-6 items-center">
          <div>
            <h1 className="font-bold">Metallic scandal</h1>
            <p className="text-gray-400">Ecologic leather</p>
            <div className="flex mt-2 justify-startr text-xs space-x-2">
              <div className="font-bold">$20.00</div>
              <div className="text-gray-500 font-semibold">$30.00</div>
              <div className="text-red-500 font-semibold">-20%</div>
            </div>
          </div>
          <div className="mt-4">
            <form>
              <select
                id="color"
                name="color"
                className="py-2 select-none rounded-md w-48 text-xs"
              >
                <option value="red" defaultValue>
                  size
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </form>
          </div>
          <button className="mt-6 px-6 py-2 border-2 border-black rounded-full uppercase text-xs">
            See more products
          </button>
        </div>
      </div>
    </div>
  );
}
