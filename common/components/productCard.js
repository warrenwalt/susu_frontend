import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ProductCard({ w, showColor, showLike }) {
  return (
    <div className={`flex flex-col text-lg w-2/12 ${w}`}>
      <div className="relative flex justify-center">
        <Image src="/featured1.jpg" width={165} height={150} alt="bag" />
        {/* render unconditionally */}
        {showLike ? (
          <FontAwesomeIcon
            className="absolute bottom-3 right-5 bg-white rounded-full p-1"
            icon={faHeart}
            color="red"
          />
        ) : null}
      </div>
      {/* title */}
      <div className="flex mt-10 justify-center">
        <h1 className="font-bold text-center">Susu dress-1</h1>
      </div>
      {/* body */}
      <div className="flex flex-col text-center mt-4 justify-center">
        <p className="font-light px-6 text-center leading-5">
          Cotton blend long dress
        </p>
        {/* rendered conditionally */}
        {showColor ? (
          <div className="flex items-center justify-center">
            <p className="p-2 bg-red-600"></p>
            <p className="p-2 bg-blue-600"></p>
            <p className="p-2 bg-white"></p>
            <Image
              src="/dress1 closeup.jpg"
              alt="bag jpg"
              width={30}
              height={30}
            />
          </div>
        ) : null}
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
