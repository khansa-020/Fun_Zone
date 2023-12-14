// Events.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./events.module.css";
import EventCard from "./EventCard"; // Create a component to represent each event card

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend when the component mounts
    // You might want to use Axios or another library for making HTTP requests
    // Example: axios.get('/api/events').then(response => setEvents(response.data));
    // For now, let's assume events are hardcoded
    const dummyEvents = [
      { id: 1, name: "Event 1", description: "Description 1", host: "Host 1", price: 10, poster: "poster1.jpg" },
      { id: 2, name: "Event 2", description: "Description 2", host: "Host 2", price: 20, poster: "poster2.jpg" },
      // Add more events as needed
    ];
    setEvents(dummyEvents);
  }, []);

  const handleEventClick = (eventId) => {
    // Navigate to a detailed view of the event
    navigate(`/events/${eventId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            {/* EventCard component to display event details */}
            <EventCard event={event} onClick={() => handleEventClick(event.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
