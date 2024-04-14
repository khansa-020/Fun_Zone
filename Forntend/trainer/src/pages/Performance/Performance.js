import React, { useState } from 'react';
import Logo from '../../Constants/Logo/logo';
import Sidebar from './SidebarPerform'; 
import PerformComponent from './PerformComponent';
import './Performance.css'; 

    
function Performance() {
    const [selectedLink, setSelectedLink] = useState('link1'); 
    
    const handleLinkClick = (link) => {
      setSelectedLink(link);
      console.log('Selected Link:', link); 
    };
  
    
    return (
      <div id="performance">
        <div className='logo-perform'>
          <Logo showStepCount={false} /> 
        </div>
    
  
          <div className='left-side-perform'>
            {/* <Sidebar selectedLink={selectedLink} handleLinkClick={handleLinkClick} /> */}
            <Sidebar selectedLink={selectedLink} handleLinkClick={handleLinkClick} links={['Overview', 'Students','Reviews']} />
          </div>
        
  
          <div id="perform-components" >
            {PerformComponent[selectedLink]}
          </div>
        </div>
      );
    }
    

export default Performance;
