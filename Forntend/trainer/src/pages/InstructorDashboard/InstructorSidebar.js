import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Icon for the hamburger menu
import { faUser, faBook, faChartColumn, faCog, faTasks, faComment } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from '../.././Constants/button/button';
import './InstructorSidebar.css';

const Sidebar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if sidebar is open

  const iconMap = {
    Profile: faUser,
    'Create Course': faBook,
    'Performance': faChartColumn,
    'Manage Courses': faCog,
    'My Courses': faTasks,
    Chat: faComment
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state of the sidebar
  };

  const handleSubmit = () => {
    // Handle button click (submit action)
    console.log('Form submitted');
  };

  return (
    <div id="body">
      <div className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} onClick={toggleSidebar}>
                <FontAwesomeIcon className='icons' icon={iconMap[link.label]} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button onClick={handleSubmit}>Submit for Review</Button>
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
};

export default Sidebar;
