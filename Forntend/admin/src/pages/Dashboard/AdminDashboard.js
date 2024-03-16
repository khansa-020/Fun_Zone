import React, { useState } from "react";
import Sidebar from '../../components/Sidebar';
import Nav from '../../components/NavComponent/Nav'
// import EventsAdmin from '../../pages/EventAdmin/EventsAdmin';

const AdminDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };


  const adminLinks = [
    { url: '#', label: 'Admin Profile' },
    { url: '/EventsAdmin', label: 'Events' },
    { url: '/EventsAdmin', label: 'Students' },
    { url: '/WebsiteContent', label: 'Content' },
    { url: '/TrainerRequests', label: 'Trainer Requests' },
    { url: '/StudentRecord', label: 'Student Record' },


    // Add more admin-specific links
  ];

  return (
    <div>
      <Nav/>
      <div><Sidebar links={adminLinks} onToggle={handleToggle} />
        </div>
      <div id="content" style={{ marginLeft: '320px', padding: '20px', backgroundColor: isDarkMode ? '#333' : ' rgb(249, 186, 204)', color: isDarkMode ? '#fff' : '#333' }}>
        <h1 id="main_h1" >Main Content Area</h1>
    </div>
    </div>
  );
};

export default AdminDashboard;