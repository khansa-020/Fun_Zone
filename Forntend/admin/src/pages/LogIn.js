import React, { useState , useNavigate} from 'react';

const LogIn = () => {
  // const [email, setEmail] = useState('khansaaraein@gmail.com');
  // const [password, setPassword] = useState('12345');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: 'khansaaraein@gmail.com',
      password: 'khan255@',
  });
  
  const handleLogIn = async (e) => {
   // const handleLogIn = (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000', {
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
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;