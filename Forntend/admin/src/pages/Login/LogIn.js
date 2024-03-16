import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../../images/loginbgvideo.mp4';
import poster from "../../images/game development.jpg";
import './Login.css';

const LogIn = () => {
  // const [email, setEmail] = useState('khansaaraein@gmail.com');
  // const [password, setPassword] = useState('12345');
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: '',
      password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const navigate = useNavigate();
  const handleLogIn = async (e) => {
   // const handleLogIn = (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/user/userLogin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', },
            body: JSON.stringify(formData),
        });
        if (response.ok) {console.log('Registration successful!');
        // Redirect to the home page after successful registration
        navigate('/adminDashboard');
        } else { console.error('Registration failed.');
        } }
    catch (error) {console.error('Error during registration:', error);
    } };

  

  return (
    <>
    <video poster={poster} autoPlay playsInline muted loop>
    <source src={bgVideo} type="video/mp4" />
    </video>
    <div className="main_div">
       <div className="box">
      <h1>Admin Log In</h1>
      <form onSubmit={handleLogIn}>

      <div className="inputBox">
          <input type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required />
       </div>             
        <br />
        <div className="inputBox">
          <input 
           type="password"
           id="password"
           name="password"
           placeholder='Password'
           value={formData.password}
           onChange={handleChange}
           required
        />
        </div>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default LogIn;