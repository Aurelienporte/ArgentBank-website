import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/argentBankLogo.png";
import "./Header.css";

function Header() {
  const [isConnected, setIsConnected] = useState(false);

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
          <Link to="/signin/:userId" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            <span>&nbsp;User&nbsp;</span>
          </Link>
        )}
        <Link to={isConnected ? "/" : "/signin"} className="main-nav-item">
          {isConnected ? (
            <>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                onClick={() => {
                  setIsConnected(false);
                }}
              />
              <span
                onClick={() => {
                  setIsConnected(false);
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
