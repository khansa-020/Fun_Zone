
import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';


import InstructorProfile from './pages/InstructorProfile/InstructorProfile'
import CourseLandingPage from './pages/CreateCourses/Landing Page/CourseLandingPage';
import InstructorDashboard from './pages/InstructorDashboard/InstructorDashboard';
import CreateCourse from './pages/CreateCourses/New Course/CreateCourse';
import Performance from './pages/Performance/Performance';
import PublicProfile from './pages/InstructorProfile/PublicProfile'
// import ManageCourses from '../CreateCourses/Landing Page/CourseLandingPage';
// import MyCourses from '../Instructor_Components/MyCourses';
// import Chat from '../Chat/Chat';
import Upload from './pages/Upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/InstructorDashboard'element={<InstructorDashboard/>}/>
        <Route path='/Performance'element={<Performance/>}/>
        <Route path='/InstructorProfile'element={<InstructorProfile/>}/>
        <Route path='/PublicProfile'element={<PublicProfile/>}/>
        <Route path='/CourseLandingPage'element={<CourseLandingPage/>}/>
        <Route path='/CreateCourse' element={<CreateCourse/>}/>
        {/* <Route path='/MyCourses'element={<MyCourses/>}/> */}

        <Route path='/upload'element={<Upload/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

