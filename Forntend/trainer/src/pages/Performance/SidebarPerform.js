import React from 'react';
import Button from '../../Constants/button/button';
import './SidebarPerform.css'; 



const handleSubmit = () => {
    // Handle button click (submit action)
    console.log('Form submitted');
  };


function SidebarPerform({ selectedLink, handleLinkClick }) {
  return (
    <div className="perform-sidebar">
      <ul>
        <li className={selectedLink === 'link1' ? 'active' : ''} onClick={() => handleLinkClick('link1')}>Overview</li>
        <li className={selectedLink === 'link2' ? 'active' : ''} onClick={() => handleLinkClick('link2')}>Students</li>
        <li className={selectedLink === 'link3' ? 'active' : ''} onClick={() => handleLinkClick('link3')}>Reviews</li>
        {/* <li className={selectedLink === 'link4' ? 'active' : ''} onClick={() => handleLinkClick('link4')}>Create Content</li>
        <li className={selectedLink === 'link5' ? 'active' : ''} onClick={() => handleLinkClick('link5')}>Pricing</li>
        <li className={selectedLink === 'link6' ? 'active' : ''} onClick={() => handleLinkClick('link6')}>Course Messages</li> */}

      </ul>
      {/* Button for submission */}
      <Button onClick={handleSubmit}>Submit for Review</Button>
    </div>
  );
}

export default SidebarPerform;

