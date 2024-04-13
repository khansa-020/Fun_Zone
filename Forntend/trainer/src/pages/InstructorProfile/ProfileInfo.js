import { React, useState } from 'react';
import Button from './../../Constants/button/button';
import './ProfileInfo.css';

const ProfileInfo = () => {

  const [headline, setHeadline] = useState('');
  const maxWords = 30;

  const handleHeadlineChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.split(' ');
    if (words.length <= maxWords) {
      setHeadline(inputText);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <form>
      <div className='all-input'>
  <div className='left-inputs'>
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
     <div className='combine'><input type="text" id="headline" name="headline" className="profile-input" placeholder="eg:- Instructor at university" value={headline} onChange={handleHeadlineChange}  />
      <div className="word-count">{maxWords - headline.split(' ').filter(Boolean).length}</div></div>

    </div>
    <div>
      <label htmlFor="biography" className="profile-label">Biography:</label>
      <textarea id="biography" name="biography" className="profile-input" placeholder="Enter your biography"></textarea>
    </div>
    <div>
      <label htmlFor="language" className="profile-label">Language:</label>
      <input type="text" id="language" name="language" className="profile-input" placeholder="Enter your language" />
    </div>
  </div>
  <div className='right-inputs'>
    
    <div>
      <label htmlFor="website" className="profile-label">Website:</label>
      <input type="text" id="website" name="website" className="profile-input" placeholder="Enter your website URL" />
    </div>
    <div>
      <label htmlFor="twitter" className="profile-label">Twitter:</label>
      <input type="text" id="twitter" name="twitter" className="profile-input" placeholder="Enter your Twitter URL" />
    </div>
    <div>
      <label htmlFor="github" className="profile-label">GitHub:</label>
      <input type="text" id="github" name="github" className="profile-input" placeholder="Github profile URL" />
    </div>
    <div>
      <label htmlFor="linkedin" className="profile-label">LinkedIn:</label>
      <input type="text" id="linkedin" name="linkedin" className="profile-input" placeholder="Enter your LinkedIn URL" />
    </div>
    <div>
      <label htmlFor="youtube" className="profile-label">Youtube:</label>
      <input type="text" id="youtube" name="youtube" className="profile-input" placeholder="Enter your YouTube URL" />
    </div>
  </div>
</div>

<Button onClick={handleSubmit}>Save</Button>

      </form>
    </div>
  );
};

export default ProfileInfo;
