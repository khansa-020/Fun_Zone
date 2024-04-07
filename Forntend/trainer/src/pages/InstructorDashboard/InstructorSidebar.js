import React from 'react';
import PropTypes from 'prop-types';
// import './Sidebar.css';

const Sidebar = ({ links }) => {
  return (
    <div id="body">

      <div id="sidebar">
        {links.map((link, index) => (
          <a key={index} href={link.url}> {link.label} </a>
        ))}
      </div>


      
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
