import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Sidebar from '../CreateCourses/Course Sidebar/CourseSidebar';
import Logo from '../../Constants/Logo/logo';
import { FaUser, FaBook, FaChartBar, FaCog, FaListUl, FaComments } from 'react-icons/fa';
import './InstructorDashboard.css';

function InstructorDashboard() {
  const [selectedLink, setSelectedLink] = useState('link1'); // Default selected link for Dashboard
  
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    console.log('Selected Link:', link); 
  };
  

  const sidebarLinks = [
    { text: 'Profile', icon: <FaUser /> },
    { text: 'Create Course', icon: <FaBook /> },
    { text: 'Performance', icon: <FaChartBar /> },
    { text: 'Manage Courses', icon: <FaCog /> },
    { text: 'My Courses', icon: <FaListUl /> },
    { text: 'Chat', icon: <FaComments /> }
  ];

  return (
    <div id="Dashboard">
      <div className='logo-comon'>
        <Logo showStepCount={false} /> 
      </div>

      <div className="dashboard-links">
        <Sidebar selectedLink={selectedLink} handleLinkClick={handleLinkClick} links={sidebarLinks} />
      </div>

      <div id="Instructor-components">
        {/* Render links instead of components */}
        <ul>
          <li><Link to="/InstructorProfile">Profile</Link></li>
          <li><Link to="/CreateCourse">Create Course</Link></li>
          <li><Link to="/Performance">Performance</Link></li>
          <li><Link to="/CourseLandingPage">Manage Courses</Link></li>
          <li><Link to="/my-courses">My Courses</Link></li>
          <li><Link to="/chat">Chat</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default InstructorDashboard;
