import React from 'react';
import Sidebar from './InstructorSidebar'; 
import Logo from '../.././Constants/Logo/logo';
import admin from "../../../src/admin.jpg";
// import './InstructorDashboard.css'; 

const InstructorDashboard = () => {
  const links = [
    { url: '/InstructorProfile', label: 'Profile' },
    { url: '/CreateCourse', label: 'Create Course' },
    { url: '/Performance ', label: 'Performance' },
    { url: '/CourseLandingPage', label: 'Manage Courses' },
    { url: '/MyCourses', label: 'My Courses' },
    { url: '/Chat', label: 'Chat' }
  ];

  
  return (
    <div className="instructor-dashboard">

      <div className='logo-comon'>
        <Logo showStepCount={false} /> 
      </div>
  

<div > <Sidebar links={links}  /></div>
      <div>
      <img src={admin.img} alt="" />

      </div>

    </div>
  );
};

export default InstructorDashboard;
