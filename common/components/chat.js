import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Chat() {
  return (
    <div className="flex p-20 py-24 justify-end space-x-5 items-center">
      <FontAwesomeIcon icon={faComment} size="4x" />
      <h1 className="uppercase text-xs">How can we help you?</h1>
    </div>
  );
}
