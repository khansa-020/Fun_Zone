import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  // State to store user information
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '', // Don't display password in view mode
    livesIn: '',
    education: '',
    skills: '',
    workStatus: '',
    worksAt: '',
  });

  // State to track whether the profile is in edit mode
  const [editMode, setEditMode] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Add your token
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        'http://localhost:5000/api/user/update-profile',
        user,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Add your token
            'Content-Type': 'application/json',
          },
        }
      );

      setUser(response.data);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {editMode ? (
        // Form for editing user information
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="livesIn">Lives In:</label>
          <input
            type="text"
            id="livesIn"
            name="livesIn"
            value={user.livesIn}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="education">Education:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={user.education}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={user.skills}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="workStatus">Work Status:</label>
          <input
            type="text"
            id="workStatus"
            name="workStatus"
            value={user.workStatus}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="worksAt">Works At:</label>
          <input
            type="text"
            id="worksAt"
            name="worksAt"
            value={user.worksAt}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        // Display user information
        <div>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Don't display password in view mode */}
          <p>
            <strong>Lives In:</strong> {user.livesIn}
          </p>
          <p>
            <strong>Education:</strong> {user.education}
          </p>
          <p>
            <strong>Skills:</strong> {user.skills}
          </p>
          <p>
            <strong>Work Status:</strong> {user.workStatus}
          </p>
          <p>
            <strong>Works At:</strong> {user.worksAt}
          </p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
