import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import LogIn from './pages/LogIn';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn/>} />
          <Route exact path='/adminDashboard' element={<AdminDashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;