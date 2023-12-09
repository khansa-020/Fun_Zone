// Sidebar.js
import React from 'react';
import PropTypes from 'prop-types';
//import './Sidebar.css';
import Toggle from './Toggle';

const Sidebar = ({ links, onToggle }) => {
  return (
    <div>
      <div id="sidebar">
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.label}
          </a>
        ))}
      </div>
      <Toggle onToggle={onToggle} />
    </div>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Sidebar;
