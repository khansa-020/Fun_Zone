import bgVideo from '../../images/loginbgvideo.mp4';
import poster from "../../images/game development.jpg";
import "./Signup.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

//import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
          navigate("/")
        }
      })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


// Styling
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show);
    };
      

//handle submit -submit button
   const handleSubmit = async (e) => {
  e.preventDefault();
      try {
            const response = await fetch('http://localhost:5000/api/user/userSignup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', },
                body: JSON.stringify(formData),
            });
            if (response.ok) {console.log('Registration successful!');
            // Redirect to the home page after successful registration
            navigate('/login');
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
                <h1 className='Heading'>Registration Form</h1>
                <form onSubmit={handleSubmit}>
                <div className="inputBox">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='UserName'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <br />
                    <div className="inputBox">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <br />
                    <div className="inputBox">
                    <input
                        type={show ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />
                        <button className="eyeBtn" onClick={handleClick}>
                        {show ? (
                            <BsFillEyeSlashFill style={{ color: "#F15946" }} />
                        ) : (
                            <BsFillEyeFill style={{ color: "#F15946" }} />
                        )}
                        </button>
                        </div>
                    <br />
                    <input type="submit" value="Register" />
                    <br />
                {/* <p>
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <Link
                    style={{
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "600",
                    }}
                    ></Link>
                </p> */}
                </form>
                </div>
      </div>
      </>
        );
    };

export default SignUp;
