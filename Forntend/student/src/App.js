import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import About from './pages/aboutus/About';
import Tools from './pages/Tools/ArtisticTools';
import EventCard from './pages/Events/Events';
import Courses from "./pages/Courses/Courses";
import SignUp from './pages/Signup/SignUp';
import LogIn from './pages/Login/LogIn';
import ErrorPage from './pages/ErrorPage';

import Dashboard from './pages/Dashboard/StudentDashboard copy';
import Profile from './pages/profile/Profile';
import ApplyTrainer from './pages/ApplyForTrainer/TrainerRequest';
import ChatRoom from './pages/Chat/ChatRoom';

import SocialPage from './pages/Dashboard/socialpage/SocialPage';
import ProfilePage from './pages/Dashboard/profilepage/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/events' element={<EventCard />} />
          <Route path='/showcourses' element={<Courses />} />
          <Route path='/tools' element={<Tools />} />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chatroom' element={<ChatRoom />} />
          <Route path='/trainerRequest' element={<ApplyTrainer />} />
          <Route path='/SocialPage' element={<SocialPage />} />
          <Route path='/ProfilePage' element={<ProfilePage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
