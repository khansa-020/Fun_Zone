// EventCard.js
import React from "react";
import PropTypes from "prop-types";
import styles from "./eventcard.module.css";

const EventCard = ({ event, onClick }) => {
  console.log("Event:", event); // Log the event object to the console

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={event.poster} alt={event.name} className={styles.poster} />
      <div className={styles.details}>
        <h3>{event.eventName}</h3>
        <p>{event.description}</p>
        <p>Hosted by: {event.hostedBy}</p>
        <p>Price: RS :{event.price}</p>
        <p>Category: {event.category}</p>
        <p>Date:  {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Venue: {event.venue}</p>
        <p>Max Attendees: {event.maxAttendees}</p>

      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EventCard;
