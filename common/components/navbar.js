import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
faUser;

export default function NavBar(user) {
  return (
    <>
      <nav className="flex justify-around  p-10 pb-4">
        <div className="">
          <div class="hamburger-icon">
            <svg className="hamburger-icon__icon" viewBox="0 0 24 24">
              <path
                className="hamburger-icon__line hamburger-icon__line--top"
                d="M3 6h18M3 12h18M3 18h18"
              ></path>
            </svg>
          </div>
        </div>
        <div className="items-center">
          <h1 className="text-4xl italic font-serif uppercase">susu studio</h1>
          <p className="flex font-thin justify-center">
            modest . modern . fashion
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-gray-400">
            <FontAwesomeIcon className="text-black" icon={faSearch} size="" />
            search
          </button>
          <FontAwesomeIcon icon={faUser} size="" />
          <FontAwesomeIcon icon={faEnvelope} size="" />
        </div>
      </nav>
    </>
  );
}
