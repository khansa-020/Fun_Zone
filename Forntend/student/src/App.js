import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
<Routes>
<Route path='/home' element={<h1>home</h1>} />
<Route path='/about' element={<h1>about</h1>} />
<Route path='/contactus' element={<h1>contact</h1>} />
<Route path='/showcourses' element={<h1>course</h1>} />
<Route path='/tools' element={<h1>tools</h1>} />
<Route path='/signup' element={<h1>signup</h1>} />
<Route path='/login' element={<h1>login</h1>} />

</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
