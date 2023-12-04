import React, { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('khansaaraein@gmail.com');
  const [password, setPassword] = useState('12345');

  const handleLogIn = async () => {
 
  };

  return (
    <div>
      <h1>Admin Log In</h1>
      <form onSubmit={handleLogIn}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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