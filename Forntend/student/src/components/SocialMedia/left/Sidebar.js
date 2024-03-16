// Sidebar.js
// Sidebar.js
import React from 'react';
import {Link} from "react-router-dom";
// import './sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Students Record</li>
        <li>Approve Courses</li>
        <li>Trainer Record</li>
        <li>Approve Trainer</li>
        <li><Link to="/AddEvent">Add Event</Link></li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

