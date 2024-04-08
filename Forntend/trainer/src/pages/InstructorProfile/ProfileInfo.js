import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div>
      <h2>Instructor Profile</h2>
      <form>
        <div>
          <label htmlFor="firstName" className="profile-label">First Name:</label>
          <input type="text" id="firstName" name="firstName" className="profile-input" placeholder="Enter your first name" />
        </div>
        <div>
          <label htmlFor="lastName" className="profile-label">Last Name:</label>
          <input type="text" id="lastName" name="lastName" className="profile-input" placeholder="Enter your last name" />
        </div>
        <div>
          <label htmlFor="headline" className="profile-label">Headline:</label>
          <input type="text" id="headline" name="headline" className="profile-input" placeholder="Enter your headline" />
        </div>
        <div>
          <label htmlFor="biography" className="profile-label">Biography:</label>
          <textarea id="biography" name="biography" className="profile-input" placeholder="Enter your biography"></textarea>
        </div>
        <div>
          <label htmlFor="language" className="profile-label">Language:</label>
          <input type="text" id="language" name="language" className="profile-input" placeholder="Enter your language" />
        </div>
        <div>
          <label htmlFor="website" className="profile-label">Website:</label>
          <input type="text" id="website" name="website" className="profile-input" placeholder="Enter your website URL" />
        </div>
        <div>
          <label htmlFor="twitter" className="profile-label">Twitter:</label>
          <input type="text" id="twitter" name="twitter" className="profile-input" placeholder="Enter your Twitter URL" />
        </div>
        <div>
          <label htmlFor="facebook" className="profile-label">Facebook:</label>
          <input type="text" id="facebook" name="facebook" className="profile-input" placeholder="Enter your Facebook URL" />
        </div>
        <div>
          <label htmlFor="linkedin" className="profile-label">LinkedIn:</label>
          <input type="text" id="linkedin" name="linkedin" className="profile-input" placeholder="Enter your LinkedIn URL" />
        </div>
        <div>
          <label htmlFor="youtube" className="profile-label">Youtube:</label>
          <input type="text" id="youtube" name="youtube" className="profile-input" placeholder="Enter your YouTube URL" />
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
