import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import logo from "../../img/argentBankLogo.png"
import "./Header.css"

function Header(){
    const [isConnected, setIsConnected] = useState(false)

    return(
        <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
            {isConnected &&
                <a className="main-nav-item" href="./sign-in.html">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <span>&nbsp;User&nbsp;</span>
                </a>
            }
          <a className="main-nav-item" href="./sign-in.html">
            {isConnected ?
                <>
                    <FontAwesomeIcon icon = {faRightFromBracket}/>
                    <span>&nbsp;Sign Out</span>
                </>
                :
                <>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <span>&nbsp;Sign In</span>
                </>
            }
          </a>
        </div>
      </nav>
    )
}

export default Header