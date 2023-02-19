import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
faUser;

export default function NavBar(user) {
  return (
    <>
      <nav className="flex justify-evenly  p-10 pb-4">
        <div className="">
          <div class="hamburger-icon">
            <svg class="hamburger-icon__icon" viewBox="0 0 24 24">
              <path
                class="hamburger-icon__line hamburger-icon__line--top"
                d="M3 6h18M3 12h18M3 18h18"
              ></path>
            </svg>
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl italic font-serif uppercase">susu studio</h1>
          <p className="flex font-thin justify-center">
            modest . modern . fashion
          </p>
        </div>
        <div className="flex ">
          <form className="w-1/4">
            <input type="search" placeholder="search" />
          </form>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
      </nav>
    </>
  );
}
