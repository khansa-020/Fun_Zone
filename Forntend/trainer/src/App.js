
import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';


// import InstructorProfile from './pages/InstructorProfile/InstructorProfile'
import CreateCourse from './pages/CreateCourses/New Course/CreateCourse';
import CourseLandingPage from './pages/CreateCourses/Landing Page/CourseLandingPage';
import InstructorDashboard from './pages/InstructorDashboard/InstructorDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/InstructorDashboard'element={<InstructorDashboard/>}/>
        {/* <Route path='/InstructorProfile'element={<InstructorProfile/>}/> */}
        <Route path='/CourseLandingPage'element={<CourseLandingPage/>}/>
        <Route path='/CreateCourse' element={<CreateCourse/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

