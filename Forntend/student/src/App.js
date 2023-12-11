import './App.css';
// import Nav from './components/Nav';

import LandingPage from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import About from './pages/aboutus/About'
import Dashboard from './pages/Dashboard';
import EventCard from './pages/Events/EventCard';
import SignUp from './pages/Signup/SignUp';
import LogIn from './pages/Login/LogIn';
import ErrorPage from './pages/ErrorPage'
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
<Route path='/showcourses' element={<h1>course</h1>} />
<Route path='/tools' element={<h1>tools</h1>} />

<Route path='/' element={<h1><LandingPage/></h1>} />
<Route path='/dashboard' element={<h1><Dashboard/></h1>} />
<Route path='/signup' element={<h1><SignUp/></h1>} />
<Route path='/login' element={<h1><LogIn/></h1>} />
<Route path="*" element={<ErrorPage/>} />

</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
