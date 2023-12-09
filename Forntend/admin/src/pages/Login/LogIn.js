import React, { useState , useNavigate} from 'react';

const LogIn = () => {
  // const [email, setEmail] = useState('khansaaraein@gmail.com');
  // const [password, setPassword] = useState('12345');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: 'khansaaraein@gmail.com',
      password: 'khan255@',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
  
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
        navigate('/dashboard');
        } else { console.error('Registration failed.');
        } }
    catch (error) {console.error('Error during registration:', error);
    } };

  

  return (
    <div>
      <h1>Admin Log In</h1>
      <form onSubmit={handleLogIn}>
          <input type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required />
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
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;