import './App.css';
import Nav from './components/Nav';

import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
<Routes>
<Route path='/' element={<h1><LandingPage/></h1>} />
<Route path='/about' element={<h1>about</h1>} />
<Route path='/contactus' element={<h1>contact</h1>} />
<Route path='/showcourses' element={<h1>course</h1>} />
<Route path='/tools' element={<h1>tools</h1>} />

<Route path='/signup' element={<h1><SignUp/></h1>} />
<Route path='/login' element={<h1><LogIn/></h1>} />
<Route path="*" element={<ErrorPage/>} />

</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
