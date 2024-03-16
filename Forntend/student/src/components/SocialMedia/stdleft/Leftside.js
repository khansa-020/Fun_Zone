import React from 'react'
import {Link} from "react-router-dom"
import './leftside.css';
const Leftside = ({onApplyTrainerClick }) => {
  return (
    <div className="Leftside">
        <h2>Student Dashboard</h2>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Courses</Link></li>
      <li><Link to="/">Learning</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/chatroom">Chat</Link></li>
      <li><Link to="/">Theme</Link></li>
      <li><Link to="/">Upload Task</Link></li>
      <li><Link to="/trainerRequest">Apply Trainer</Link></li>




      </ul>
    </div>
  )
}

export default Leftside
