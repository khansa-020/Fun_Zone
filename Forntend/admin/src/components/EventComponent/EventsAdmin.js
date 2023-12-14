// EventsAdmin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './eventsadmin.module.css'; // Add your CSS styles

const EventsAdmin = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ eventName: '', description: '' ,hostedBy: '',
  price: 0, category: '', posterImage: '', date: '', time: '',venue: '',maxAttendees: 0, 
 });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/update-event/${selectedEvent._id}`, selectedEvent);
      console.log('Event updated successfully');
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleCancel = () => {
    setSelectedEvent(null);
  };

  const handleChange = (e) => {
    setSelectedEvent({ ...selectedEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/add-event', newEvent);
      setEvents([...events, response.data]);
      setNewEvent({
        eventName: '',
        description: '',
        hostedBy: '',
        price: 0,
        category: '',
        posterImage: '',
        date: '',
        time: '',
        venue: '',
        maxAttendees: 0,        });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event._id} className={styles.eventItem}>
            <h3>{event.eventName}</h3>
            <p>{event.description}</p>
            <p>Hosted by: {event.hostedBy}</p>
        <p>Price: RS :{event.price}</p>
           <p>Category: {event.category}</p>
        <p>Date:  {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Venue: {event.venue}</p>
        <p>Max Attendees: {event.maxAttendees}</p>

            <button onClick={() => handleEdit(event)}>Edit</button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className={styles.editForm}>
          <label>
            Event Name:
            <input
              type="text"
              name="eventName"
              value={selectedEvent.eventName}
              onChange={handleChange}
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={selectedEvent.description}
              onChange={handleChange}
            />
          </label>

           {/* New inputs for additional properties */}
           <label>
            Hosted By:
            <input
              type="text"
              name="hostedBy"
              value={selectedEvent.hostedBy}
              onChange={handleChange}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={selectedEvent.price}
              onChange={handleChange}
            />
          </label>

          <label>
            Category:
            <input
              type="text"
              name="category"
              value={selectedEvent.category}
              onChange={handleChange}
            />
          </label>

          <label>
            Poster Image:
            <input
              type="text"
              name="posterImage"
              value={selectedEvent.posterImage}
              onChange={handleChange}
            />
          </label>

          <label>
            Date:
            <input
              type="text"
              name="date"
              value={selectedEvent.date}
              onChange={handleChange}
            />
          </label>

          <label>
            Time:
            <input
              type="text"
              name="time"
              value={selectedEvent.time}
              onChange={handleChange}
            />
          </label>

          <label>
            Venue:
            <input
              type="text"
              name="venue"
              value={selectedEvent.venue}
              onChange={handleChange}
            />
          </label>

          <label>
            Max Attendees:
            <input
              type="number"
              name="maxAttendees"
              value={selectedEvent.maxAttendees}
              onChange={handleChange}
            />
          </label>

          <div className={styles.editButtons}>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}

      <div className={styles.addEventForm}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={newEvent.eventName}
            onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
        </label>
        {/* Newly added fields */}
        <label>
          Hosted By:
          <input
            type="text"
            name="hostedBy"
            value={newEvent.hostedBy}
            onChange={(e) => setNewEvent({ ...newEvent, hostedBy: e.target.value })}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newEvent.price}
            onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
          />
        </label>

        <label>
          Poster Image:
          <input
            type="img"
            name="posterImage"
            value={newEvent.posterImage}
            onChange={(e) => setNewEvent({ ...newEvent, posterImage: e.target.value })}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
        </label>

        <label>
          Time:
          <input
            type="text"
            name="time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
          />
        </label>

        <label>
          Venue:
          <input
            type="text"
            name="venue"
            value={newEvent.venue}
            onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
          />
        </label>

        <label>
          Max Attendees:
          <input
            type="number"
            name="maxAttendees"
            value={newEvent.maxAttendees}
            onChange={(e) => setNewEvent({ ...newEvent, maxAttendees: e.target.value })}
          />
        </label>

        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default EventsAdmin;


       