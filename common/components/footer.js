import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-evenly mt-32">
        <div className="space-y-5">
          <h1 className="uppercase font-semibold">help</h1>
          <div className="text-gray-400 text-sm">
            <p>product</p>
            <p>Gift card</p>
            <p>Receipt</p>
            <p>Receipt</p>
            <p>Shipping</p>
          </div>
        </div>
        <div className=" space-y-5">
          <h1 className="uppercase font-semibold">help</h1>
          <div className="text-gray-400 text-sm">
            <p>product</p>
            <p>Gift card</p>
            <p>Receipt</p>
            <p>Receipt</p>
            <p>Shipping</p>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="uppercase font-semibold">help</h1>
          <div className="text-gray-400 text-sm">
            <p>product</p>
            <p>Gift card</p>
            <p>Receipt</p>
            <p>Receipt</p>
            <p>Shipping</p>
          </div>
        </div>
        <div className="space-y-5">
          <button className="uppercase py-4 px-10 text-xs text-white bg-black rounded-full">
            subscribe
          </button>
          <p className="uppercase space-x-10">
            <small>enter your email here</small>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </footer>
      <div className="text-center text-sm py-6 mt-20">
        Susu studio &copy; 2019. All rights reserved. Designed by Vanessa
        Salcedo
      </div>
    </>
  );
}
