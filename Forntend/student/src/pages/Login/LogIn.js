import bgVideo from '../../images/loginbgvideo.mp4';
import poster from "../../images/game development.jpg";
import "../Signup/Signup.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/")
    }
  })

  // Styling
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
      e.preventDefault();
      setShow(!show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password };
      const response = await axios.post("http://localhost:5000/api/user/userLogin", formData);
      if(response){
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/dashboard")
      }else{
        alert("Plz Enter correct details")
      }
    } 
    catch (error) {
      console.error('Plz Enter correct details:', error.message, error.response);
    }
  };

  return (
    <>
    <video poster={poster} autoPlay playsInline muted loop>
    <source src={bgVideo} type="video/mp4" />
    </video>
    <div className="main_div">
       <div className="box">
       <h2 className='Heading'>SIGN IN</h2>
      <form onSubmit={handleLogin}>
      <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br/>
        <div className="inputBox">
            <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
              <button className="eyeBtn" onClick={handleClick}>
                        {show ? (
                            <BsFillEyeSlashFill style={{ color: "#F15946" }} />
                        ) : (
                            <BsFillEyeFill style={{ color: "#F15946" }} />
                        )}
                        </button>
        </div>
        <input type="submit" value="Register" />
        <br />
        <p className='pt-3' style={{fontSize: "1.6rem", paddingTop:"8px"}}>Don't have an Account yet <Link to='/signup'  style={{
                  cursor: "pointer",
                  color: "blue",
                  fontWeight: "100",
                }}> Sign Up</Link></p>
      </form>
    </div>
    </div>
    </>
  );
 };
