import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-col mt-40">
      <div className="flex justify-around">
        <h1 className="uppercase -ml-16  text-3xl">
          <p className="mb-4 leading-snug font-light">
            follow us on <br />
            instagram
          </p>
          <hr className="border border-black w-14" />
        </h1>
        <button className="uppercase -mr-16 py-2 px-6 border h-fit text-xs border-black rounded-full">
          follow us
        </button>
      </div>

      <div className="flex justify-center items-center space-x-14">
        <button>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        {/* carousel */}
        <div className="flex mt-10">
          <Image src="/models5.jpg" alt="crop top" width={250} height={200} />
          <Image src="/model6.jpg" alt="crop top" width={280} height={200} />
          <Image src="/model4.jpg" alt="crop top" width={280} height={200} />
        </div>
        <button>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>
      </div>
    </div>
  );
}
