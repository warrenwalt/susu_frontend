import {
  faGift,
  faTruckFast,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoCard() {
  return (
    <div className="flex space-x-1">
      <div className="flex bg-gray-100 items-center space-x-4 w-1/3 p-10 ">
        <FontAwesomeIcon icon={faWallet} size="4x" />
        <div>
          <h1 className="uppercase text-xs font-bold">payment benefits</h1>
          <p className="text-xs text-gray-400">
            Banks, cards, cash or wire transfer
          </p>
        </div>
      </div>
      <div className="flex bg-gray-100 items-center space-x-4 w-1/3 p-10 ">
        <FontAwesomeIcon icon={faTruckFast} size="4x" />
        <div>
          <h1 className="uppercase text-xs font-bold">payment benefits</h1>
          <p className="text-xs text-gray-400">
            Banks, cards, cash or wire transfer
          </p>
        </div>
      </div>
      <div className="flex bg-gray-100 items-center space-x-4 w-1/3 p-10 ">
        <FontAwesomeIcon icon={faGift} size="4x" />
        <div>
          <h1 className="uppercase text-xs font-bold">payment benefits</h1>
          <p className="text-xs text-gray-400">
            Banks, cards, cash or wire transfer
          </p>
        </div>
      </div>
    </div>
  );
}
