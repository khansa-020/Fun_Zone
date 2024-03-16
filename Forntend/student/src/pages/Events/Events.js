import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import styles from "./events.module.css";
import EventCard from "./EventCard";
import Nav from "../../components/Nav"


const Events = () => {
  // const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend when the component mounts
    axios.get("http://localhost:5000/api/get-events")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  // const handleEventClick = (eventId) => {
  //   navigate(`/events/${eventId}`);
  // };

  return (
    <>
    <Nav/>
    <ul className="circles">
      <h1 className="toolsHeading">Events And Workshops</h1>
      <p className="text-center para">
        Unlock your creativity with free AI tools for digital arts and game
        development, offering limitless possibilities and empowering creators.
      </p>
      <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>


    <div className={styles.container}>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <EventCard event={event} 
            // onClick={() => handleEventClick(event.id)}
             />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Events;
