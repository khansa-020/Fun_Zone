import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatRoom() {
  const [chatRooms, setChatRooms] = useState([]);
  const [newRoomName, setNewRoomName] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/chat-rooms')
      .then(response => setChatRooms(response.data))
      .catch(error => console.error('Error fetching chat rooms:', error));
  }, []);

  const handleCreateRoom = () => {
    axios.post('http://localhost:5000/api/chat-rooms', { name: newRoomName })
      .then(response => setChatRooms([...chatRooms, response.data]))
      .catch(error => console.error('Error creating chat room:', error));
  };

  const handleSelectRoom = (roomId) => {
    setSelectedRoom(roomId);
  };

  const handleAddUserToRoom = (roomId, username) => {
    axios.post(`http://localhost:5000/api/chat-rooms/${roomId}/add-user`, { username })
      .then(response => {
        const updatedChatRooms = chatRooms.map(room =>
          room._id === roomId ? response.data : room
        );
        setChatRooms(updatedChatRooms);
      })
      .catch(error => console.error('Error adding user to chat room:', error));
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <h2>Create a New Chat Room</h2>
        <input
          type="text"
          placeholder="Enter room name"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
        />
        <button onClick={handleCreateRoom}>Create Room</button>
      </div>
      <div>
        <h2>Chat Rooms</h2>
        <ul>
          {chatRooms.map(room => (
            <li key={room._id}>
              <button onClick={() => handleSelectRoom(room._id)}>{room.name}</button>
              {selectedRoom === room._id && (
                <div>
                  <h3>Users in {room.name}</h3>
                  <ul>
                    {room.users.map(user => (
                      <li key={user}>{user}</li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => handleAddUserToRoom(room._id, e.target.value)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChatRoom;
