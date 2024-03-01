import React from 'react'
import './profileCard.css';
import cover from "../../../images/defaultCover.jpg";
import profile from "../../../images/defaultProfile.png";
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={cover} alt="" />
            <img src={profile} alt="" />
        </div>
    </div>

  )
}

export default ProfileCard
