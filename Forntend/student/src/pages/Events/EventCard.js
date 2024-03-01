// EventCard.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./eventcard.module.css";
// import Nav from "../../components/Nav"

const EventCard = ({ event, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);
// {/* <Nav/> */}
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.card} onClick={toggleDetails}>
      <img src={event.posterImage} alt={event.name} className={styles.poster} />
      <div className={styles.details}>
        <h2>{event.eventName}</h2><br/>
        <p>{event.description}</p>
        <p>Hosted by: {event.hostedBy}</p>
        <p>Price: RS :{event.price}</p>

        {showDetails && (
        <>
        <p>Category: {event.category}</p>
        <p>Date:  {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Venue: {event.venue}</p>
        <p>Max Attendees: {event.maxAttendees}</p>
        </>

        )}
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // posterImage: PropTypes.instanceOf(Buffer), 
    posterImage: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date), 
    time: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
   
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EventCard;
