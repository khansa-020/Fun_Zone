import React, { useState, useEffect } from 'react';
import './TrainerRequests.css';

const TrainerRequests = () => {
  // State to store trainer requests
  const [trainerRequests, setTrainerRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Effect to fetch trainer requests when the component mounts
  useEffect(() => {
    const fetchTrainerRequests = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trainer-requests');
        const data = await response.json();
        setTrainerRequests(data);
      } catch (error) {
        console.error('Error fetching trainer requests:', error);
      }
    };

    fetchTrainerRequests();
  }, []);

  // Filter trainer records based on the search term
  const filteredTrainerRequests = trainerRequests.filter((request) =>
    Object.values(request.personal).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className='body'>
     <span className='span'> <h1>Trainer Requests</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </span>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>CNIC</th>
            <th>Address</th>
            <th>Email</th>
            <th>Degree Level</th>
            <th>Session</th>
            <th>CGPA</th>
            <th>Institute</th>
            <th>Course</th>
            <th>New Thing</th>
            <th>Field of Interest</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrainerRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.personal.name}</td>
              <td>{request.personal.age}</td>
              <td>{request.personal.gender}</td>
              <td>{request.personal.cnic}</td>
              <td>{request.personal.address}</td>
              <td>{request.personal.email}</td>
              <td>{request.education.degreeLevel}</td>
              <td>{request.education.session}</td>
              <td>{request.education.cgpaPercentage}</td>
              <td>{request.education.institute}</td>
              <td>{request.other.course}</td>
              <td>{request.other.newThing}</td>
              <td>{request.other.fieldOfInterest}</td>
              <td>
                <button 
                // onClick={() => handleButtonClick(request._id, 'accept')}
                >Accept</button>
                <button
                //  onClick={() => handleButtonClick(request._id, 'reject')}
                 >Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerRequests;
