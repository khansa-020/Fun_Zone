import './App.css';
// import Nav from './components/Nav';

import LandingPage from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import About from './pages/aboutus/About'
import Tools from './pages/Tools/ArtisticTools'
import EventCard from './pages/Events/Events';
import Courses from "./pages/Courses/Courses"
import SignUp from './pages/Signup/SignUp';
import LogIn from './pages/Login/LogIn';
import ErrorPage from './pages/ErrorPage'

import Dashboard from './pages/Dashboard/StudentDashboard copy';
import Profile from './pages/profile/Profile';
import ApplyTrainer from './pages/ApplyForTrainer/TrainerRequest';
import ChatRoom from './pages/Chat/ChatRoom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       {/* <Nav/> */}
<Routes>
<Route path='/' element={<h1><LandingPage/></h1>} />
<Route path='/about' element={<h1><About/></h1>} />
<Route path='/contactus' element={<h1><ContactUs/></h1>} />
<Route path='/events' element={<h1><EventCard/></h1>} />
<Route path='/showcourses' element={<h1><Courses/></h1>} />
<Route path='/tools' element={<h1><Tools/></h1>} />

<Route path='/' element={<h1><LandingPage/></h1>} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path='/signup' element={<SignUp/>} />
<Route path='/login' element={<LogIn/>} />
<Route path="*" element={<ErrorPage/>} />

<Route path='/profile' element={<Profile/>}/>
<Route path='/chatroom' element={<ChatRoom/>}/>
<Route path='/trainerRequest' element={<ApplyTrainer/>}/>


</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
