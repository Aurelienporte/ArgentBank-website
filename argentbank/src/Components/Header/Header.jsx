import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/argentBankLogo.png";
import "./Header.css";

import { logOut } from "../../features/user/userSlice";

function Header() {
  const firstName = useSelector((state) => state.user.firstName);
  const isConnected = useSelector((state) => state.user.isConnected);
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isConnected && (
          <Link to="/user" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            <span>&nbsp;{firstName}&nbsp;</span>
          </Link>
        )}
        <Link to={isConnected ? "/" : "/signin"} className="main-nav-item">
          {isConnected ? (
            <>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                onClick={() => {
                  dispatch(logOut());
                }}
              />
              <span
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                &nbsp;Sign Out
              </span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faCircleUser} />
              <span>&nbsp;Sign In</span>
            </>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
