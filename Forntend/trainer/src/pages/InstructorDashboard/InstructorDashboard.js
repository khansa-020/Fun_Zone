import React from 'react';
import Sidebar from './DashboardSidebar'; // Import the Sidebar component

const Dashboard = () => {
  const sidebarLinks = [
    { path: '/dashboard/home', label: 'Home' },
    { path: '/dashboard/profile', label: 'Profile' },
    { path: '/dashboard/settings', label: 'Settings' },
  ];

  return (
    <div className="dashboard">
      <Sidebar links={sidebarLinks} />
      <div className="main-content">
        {/* Main content of the dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
