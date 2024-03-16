import React from 'react'
import "./profile.css"
import Cover from "../../../images/feed-6.jpg"
import ProfileImg from "../../../images/user.png"
function Profile() {
  return (
    <div className="profile">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={ProfileImg} alt="" />
        </div>
        <div className="ProfileName">
          <span>Irum saba</span>
          <span>Software Engineer</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>20,000</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>2</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>0</span>
              <span>Posts</span>
            </div>
          </div>
          <hr />
        </div>
        <span>My Profile</span>
    </div>
  )
}

export default Profile
