import React, { useState } from 'react';
import Sidebar from './../InstructorDashboard/InstructorSidebar'; 
import ProfileInfo from './ProfileInfo'; // Component for displaying profile information
import ProfilePicture from './ProfilePicture'; // Component for displaying profile picture
import ProfileSettings from './ProfileSetting'; // Component for displaying profile settings
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './InstructorProfile.css';

const ProfileComponent = () => {
  // State to track the currently selected option
  const [selectedOption, setSelectedOption] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track if sidebar is open

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Function to toggle sidebar visibility
const toggleSidebar = () => {
  setIsSidebarOpen(prevState => !prevState);
};



  const links = [
    { url: '/InstructorProfile', label: 'Profile' },
    { url: '/CreateCourse', label: 'Create Course' },
    { url: '/Performance ', label: 'Performance' },
    { url: '/CourseLandingPage', label: 'Manage Courses' },
    { url: '/MyCourses', label: 'My Courses' },
    { url: '/Chat', label: 'Chat' }
  ];

  

  return (
    <div>
     
      <div id='sidebar'>
         {/* Sidebar */}
      <Sidebar links={links} isOpen={isSidebarOpen} />
      </div>
     

      <div className="slider">
      <div className="menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

        <div
          className={`option ${selectedOption === 'profile' ? 'active' : ''}`}
          onClick={() => handleOptionClick('profile')}
        >
          Instructor Profile
        </div>
        <div
          className={`option ${selectedOption === 'picture' ? 'active' : ''}`}
          onClick={() => handleOptionClick('picture')}
        >
          Profile Picture
        </div>
        <div
          className={`option ${selectedOption === 'settings' ? 'active' : ''}`}
          onClick={() => handleOptionClick('settings')}
        >
          Profile Settings
        </div>
      </div>

      {/* Display content based on selected option */}
      {selectedOption === 'profile' && <ProfileInfo />}
      {selectedOption === 'picture' && <ProfilePicture />}
      {selectedOption === 'settings' && <ProfileSettings />}
    </div>
  );
};

export default ProfileComponent;
