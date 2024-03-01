
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './studentdashboard.css'
import Leftside from '../../components/SocialMedia/stdleft/Leftside';
import FollowersCard from '../../components/SocialMedia/stdright/FollowersCard';
import PostSide from '../../components/SocialMedia/postside/PostSide';
const StudentDashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');

    if (!authenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  return (
    <div className='Social'>
      {/* <h1>Welcome to the Dashboard</h1> */}
      <button onClick={handleLogout}>Logout</button>
      <div>
      <Leftside/>
      <PostSide/>
      <FollowersCard/>
      </div>
     
    </div>
  );
};

export default StudentDashboard
