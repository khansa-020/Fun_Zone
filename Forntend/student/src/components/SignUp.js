// App.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

// const collectData=()=>{
//     console.warn(username,email,password);}

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


//handle submit -submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000', {
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
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder='UserName'
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                 {/* <label>Password hide</label> */}
              {/* <button className="eyeBtn" onClick={handleClick}>
                {show ? ( <BsFillEyeSlashFill style={{ color: "#F15946" }} />
                ) : (<BsFillEyeFill style={{ color: "#F15946" }} />
                )}
              </button> */}
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
    );
};

export default SignUp;
