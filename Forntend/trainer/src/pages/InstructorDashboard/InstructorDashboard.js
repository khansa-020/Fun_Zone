import React from 'react';
import Sidebar from './../../Constants/Sidebar/Sidebar'; 

const InstructorDashboard = () => {
  const sidebarLinks = [
    { path: '/CreateCourse', label: 'Create Course' },
    { path: '/InstructorProfile', label: 'Profile' },
    { path: '/Performance', label: 'Performance' },
    { path: '/CourseLandingPage', label: 'Manage Course' },
    { path: '/View Courses', label: 'My Courses' },
    { path: '/Chat', label: 'Chat' },

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

export default InstructorDashboard;
