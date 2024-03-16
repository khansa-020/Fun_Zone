import React from 'react'
import "./followersCard.css"
import { Followers } from '../../SocialMedia/data/FollowersData';
import Home from "../../../images/home.png";
import Notification from "../../../images/notification.png";
import Comment from "../../../images/comment.png";
import Setting from "../../../images/settings.png";

const FollowersCard=()=> {
  return (
    <>
    <div className="Icons">
    <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Setting} alt="" />
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
    <div className="FollowersCard">
           <div className="messages">
        <div className="heading">
          <h3>People you may know</h3>
          <i className="uil uil-user"></i>
        </div>
        {/* <!-- -----SEARCH BAR---- --> */}
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search Name..."
            id="message-search"
         
          />
        </div>
        </div>
    
     

        {Followers.map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" 
                        className='followerImage'/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default FollowersCard
