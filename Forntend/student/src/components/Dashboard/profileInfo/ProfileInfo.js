// import React, { useState } from 'react'
import {UilPen} from '@iconscout/react-unicons';
import "./profileInfo.css";


const ProfileInfo =() =>{
  return (
    <>
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Profile Info</h4>
           
                <div>

                <UilPen width='2rem' height='1.2rem' />
              
                </div>
           
        </div>
        <div className="info">
            <span><b>Work Status: </b></span>
            <span>Software Engineer</span>
        </div>
        <div className="info">
            <span><b>Lives in: </b></span>
            <span>Rawalpindi</span>
        </div>
        <div className="info">
            <span><b>Works at: </b></span>
            <span>Comsats</span>
        </div>
        <button className='logout-butn' >Logout</button>
    </div>
    </>
  )
}

export default ProfileInfo
