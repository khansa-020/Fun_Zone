import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo'; // Component for displaying profile information
import ProfilePicture from './ProfilePicture'; // Component for displaying profile picture
import ProfileSettings from './ProfileSetting'; // Component for displaying profile settings
import './InstructorProfile.css';

const ProfileComponent = () => {
  // State to track the currently selected option
  const [selectedOption, setSelectedOption] = useState('profile');

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };



  

  return (
    
<div>
<div id='main'></div>
<div className='Main'>
  <h1>Profile & settings</h1>
      <div className="slider">
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
          Privacy Settings
        </div>
      </div>

      {/* Display content based on selected option */}
      {selectedOption === 'profile' && <ProfileInfo />}
      {selectedOption === 'picture' && <ProfilePicture />}
      {selectedOption === 'settings' && <ProfileSettings />}
      </div>
    </div>
  );
};

export default ProfileComponent;
