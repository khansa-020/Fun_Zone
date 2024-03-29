import React, { useState } from "react";
import {Link} from "react-router-dom";
import './nav.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [showNavMob, setShowNavMob] = useState(false);
//  const auth = localStorage.getItem('user');
//     const navigate = useNavigate();
//     const logout = () => {
//       localStorage.clear();
//       navigate("/")
// }

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1 id="logo">Fun<span style={{ color: "#F15946" }}>Zone</span></h1>
        </div>
        {/* <div className={showNavMob ? "navbar-link mobile-navbar-link" : "navbar-link"}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/showcourses">Courses</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            {/* <li className="onmob">
              <a>Account</a>
            </li> */}
          {/* </ul> */}
        {/* </div>  */}
        <div className="AccountBtn">
        <button className="butn login"><Link to="/login">Log out</Link></button>
            
            
          {/* <button  className="butn signup"><Link to="/signup">Sign up</Link></button>
          <button className="butn login"><Link to="/login">Log In</Link></button>
          {/* </>
          } */}
         {/* <button  className="butn signup"><Link to="/signup">Sign up</Link></button> */}

        </div>
        <div className={showNavMob ? "hamburgerCross" : "hamburger-menu"}>
          <button className="iconHamburger" onClick={() => setShowNavMob(!showNavMob)} >
            {showNavMob ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
    </>
  )
}
export default Nav;