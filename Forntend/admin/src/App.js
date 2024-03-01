import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import LogIn from './pages/Login/LogIn';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import WebsiteContent from './pages/Websitecontent/main/WebsiteContent'
import Events from './components/EventComponent/Events';
import EventsAdmin from './pages/EventAdmin/EventsAdmin';
import TrainerRequests from './pages/Trainer Request/TrainerRequests';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn/>} />
          <Route exact path='/adminDashboard' element={<AdminDashboard/>} /> 
          <Route exact path='/WebsiteContent' element={<WebsiteContent/>} />
          <Route exact path='/Events' element={<Events/>} />
          <Route exact path='/EventsAdmin' element={<EventsAdmin/>} />
          <Route exact path='/TrainerRequests' element={<TrainerRequests/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;