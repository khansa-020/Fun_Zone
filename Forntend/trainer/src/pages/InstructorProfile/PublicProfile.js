import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers, faBook, faComments } from '@fortawesome/free-solid-svg-icons';
import './PublicProfile.css'; 
const PublicProfile = () => {
  return (
    <div className="public-profile">
      <div className="profile-info">
        <h1>Khansa Abdullah</h1>
        <h4>Instructor at COMSAT</h4>
      </div>
      <div className='pic-summary'>
      <div className="public-picture">
      <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/10/lion-face.jpg" alt="Profile" className="public-image" />
        {/* <img src="https://s.udemycdn.com/course/750x422/placeholder.jpg" alt="Profile" className="profile-image" /> */}
      </div>

      <div className="profile-summary">
          <h4 className="rating"><FontAwesomeIcon id="icon" icon={faStar} /> 4.6 Instructor Rating</h4>
          <h4 className="reviews"><FontAwesomeIcon id="icon" icon={faComments} /> 6,790 Reviews</h4>
          <h4 className="students"><FontAwesomeIcon id="icon" icon={faUsers} /> 31,339 Students</h4>
          <h4 className="courses"><FontAwesomeIcon id="icon" icon={faBook} /> 1 Course</h4>
        </div>
        <div className="biography">
        <h4>About me</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eu urna at fermentum. Aliquam vel nisi vel enim malesuada varius. Curabitur aliquet nisl a quam volutpat, non fermentum dolor vehicula. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eu urna at fermentum. Aliquam vel nisi vel enim malesuada varius. Curabitur aliquet nisl a quam volutpat, non fermentum dolor vehicula.</p>
      </div>
        </div>

      <div className="biography">
        <h4>About me</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eu urna at fermentum. Aliquam vel nisi vel enim malesuada varius. Curabitur aliquet nisl a quam volutpat, non fermentum dolor vehicula.</p>
      </div>
      <div className='trainer-courses'>
        <h4>My Courses</h4>
      </div>
    </div>
  );
};

export default PublicProfile;
