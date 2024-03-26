import React, { useState } from 'react';
import './CourseLandingPage.css';
import Logo from '../../../Constants/Logo/logo';
import Sidebar from '../Course Sidebar/CourseSidebar';
import contentComponents from '../../CreateContent/contentComponent'; 
  
function CourseLandingPage() {
  const [selectedLink, setSelectedLink] = useState('link3'); // State to track the selected link
  
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    console.log('Selected Link:', link); // Add this line to log the selected link
  };

  
  return (
    <div id="landing-page">
      <div className='logo-comon'>
        <Logo showStepCount={false} /> 
      </div>
  

        <div className='left-side'>
          <Sidebar selectedLink={selectedLink} handleLinkClick={handleLinkClick} />
        </div>
        
        <div id="course-components" >
          {contentComponents[selectedLink]}
        </div>
      </div>
    );
  }
  
  export default CourseLandingPage;
  