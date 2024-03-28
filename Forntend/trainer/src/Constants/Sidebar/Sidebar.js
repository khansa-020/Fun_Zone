import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ links }) => {
  return (
    <div className="sidebar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
