import React from 'react';
import './profilePage.css';
import Profile from '../../../components/Dashboard/profileCard/Profile';
import SideBar from '../../../components/Dashboard/sidebar/SideBar';
import TopBar from '../../../components/Dashboard/socialpage/TopBar';
import ProfileLeft from '../../../components/Dashboard/profileleft/ProfileLeft';
function ProfilePage() {
  return (
    <>
    <TopBar/>
      <div className="Profilepage">
        <SideBar/>
        <Profile />
        <ProfileLeft/>
      </div>
    </>
  );
}

export default ProfilePage;
