import React from 'react'
import { NavLink, Link } from "react-router-dom";
import'./sideBar.css';

const SideBar= ()=> {
  return (
    <div className="sidebar">
      <h1>
            Fun<span style={{ color: "#F15946" }}>Zone</span>
          </h1>
          <NavLink className="menu-item" to="/SocialPage">
            <span className="iconImg">
              <i className="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </NavLink>
          <NavLink className="menu-item" to="/ProfilePage">
            <span className="iconImg">
              <i className="uil uil-user-circle"></i>
            </span>
            <h3>Profile</h3>
          </NavLink>
          <Link className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-palette"></i>
            </span>
            <h3>Theme</h3>
          </Link>
          <NavLink className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-files-landscapes"></i>
            </span>
            <h3>Courses</h3>
          </NavLink>
          <NavLink className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-upload-alt"></i>
            </span>
            <h3>Upload Task</h3>
          </NavLink>
          <Link
            className="menu-item" to="/">
            <span className="iconImg">
              <i class="uil uil-moon"></i>
            </span>
            <h3>Toggle</h3>
          </Link>

          <NavLink className="menu-item" to="/">
            <span className="iconImg">
              <i className="uil uil-comment-dots"></i>
            </span>
            <h3>Chat</h3>
          </NavLink>
          <NavLink className="menu-item" to="/trainerRequest">
            <span className="iconImg">
              <i className="uil uil-user-check"></i>
            </span>
            <h3>Apply For Trainer</h3>
          </NavLink>

          {/* <!-- <Link className="menu-item">
        <span><i className="uil uil-signal-alt-3"></i></span><h3>Reports</h3>
    </Link> --> */}
        </div>
  )
}

export default SideBar
