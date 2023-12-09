// EventsAdmin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './eventsadmin.module.css'; // Add your CSS styles

const EventsAdmin = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ eventName: '', description: '' });

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
      setNewEvent({ eventName: '', description: '' });
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

        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default EventsAdmin;
