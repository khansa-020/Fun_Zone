import React from 'react'
import './socialpage.css';
import SideBar from '../../../components/Dashboard/sidebar/SideBar';
import TopBar from '../../../components/Dashboard/socialpage/TopBar';
import FollowersCard from "../../../components/Dashboard/FollowersCard/FollowersCard";
import PostSide from '../../../components/Dashboard/PostSide/PostSide';

const SocialPage = () => {
  return (
    <>
    <TopBar/>
    <div className="Socialpage">
      <SideBar/>
      <PostSide/>
      <FollowersCard/>
    </div>
    </>
  )
}

export default SocialPage
