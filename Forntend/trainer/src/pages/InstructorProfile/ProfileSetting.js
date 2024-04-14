import React from 'react';
import Button from './../../Constants/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import './ProfileSetting.css';


const ProfileSettings = () => {

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
<div className='Profile-Setting'>
      <p>Here you can update your profile settings, such as language, website, social media links, etc.</p>
   
 <div className='all-input'>
    <div className='left-inputs'>
    <div>
      <label htmlFor="email" className="profile-label">Email:</label>
      <input type="email" id="email" name="email" className="profile-input" placeholder="Enter your email" />
    </div>
   
    <div>
      <label htmlFor="cnic" className="profile-label">CNIC:</label>
      <input type="text" id="cnic" name="cnic" className="profile-input" placeholder="Enter your CNIC" />
    </div>
    </div>
    <div className='right-inputs'>
    <div>
      <label htmlFor="password" className="profile-label">Password:</label>
      <input type="password" id="password" name="password" className="profile-input" placeholder="Enter your password" />
    </div>
    <div>
      <label htmlFor="confirmPassword" className="profile-label">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" className="profile-input" placeholder="Confirm your password" />
   </div>
  </div>
</div>

      <div className='Public-profile-link'>
      <a href="/PublicProfile"><FontAwesomeIcon icon={faUser}  id="icon-Pro" />View Public Profile</a>
      </div>


    <Button onClick={handleSubmit}>Save</Button>


</div>
  );
};

export default ProfileSettings;
