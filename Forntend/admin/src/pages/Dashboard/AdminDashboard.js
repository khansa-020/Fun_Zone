import React, { useState } from "react";
import Sidebar from '../../components/Sidebar';
//import EventsAdmin from '../../components/Events/EventsAdmin';

const AdminDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };


  const adminLinks = [
    { url: '#', label: 'Admin Profile' },
    { url: '/EventsAdmin', label: 'Events' },
    // Add more admin-specific links
  ];

  return (
    <div>
      {/* <EventsAdmin/> */}
      <div><Sidebar links={adminLinks} onToggle={handleToggle} />
        </div>
      <div id="content" style={{ marginLeft: '200px', padding: '20px', backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
        <h1>Main Content Area</h1>
    </div>
    </div>
  );
};

export default AdminDashboard;