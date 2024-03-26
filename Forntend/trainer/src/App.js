
import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';



import CreateCourse from './pages/CreateCourses/New Course/CreateCourse';
import CourseLandingPage from './pages/CreateCourses/Landing Page/CourseLandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/CourseLandingPage'element={<CourseLandingPage/>}/>
        <Route path='/CreateCourse' element={<CreateCourse/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

