import React, { useState } from 'react';
import './CourseLandingPage.css';
import Logo from '../../../Constants/Logo/logo';
import Sidebar from '../Course Sidebar/CourseSidebar';
import contentComponents from '../../CreateContent/contentComponent'; 
  
function CourseLandingPage() {
  const [selectedLink, setSelectedLink] = useState('link1'); 
  
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    console.log('Selected Link:', link); 
  };

  
  return (
    <div id="landing-page">
      <div className='logo-comon'>
        <Logo showStepCount={false} /> 
      </div>
  

        <div className='left-side'>
          {/* <Sidebar selectedLink={selectedLink} handleLinkClick={handleLinkClick} /> */}
          <Sidebar selectedLink={selectedLink} handleLinkClick={handleLinkClick} links={['About Courses', 'Course Structure', 'Landing Page', 'Create Content', 'Pricing', 'Course Messages']} />
        </div>
      

        <div id="course-components" >
          {contentComponents[selectedLink]}
        </div>
      </div>
    );
  }
  
  export default CourseLandingPage;
  