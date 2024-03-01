// import React, { useEffect, useRef, useState } from "react";
// import profile from "../../images/defaultProfile.png";
// import "../chatBox/chatBox.css";
// import { format } from "timeago.js";
// import InputEmoji from "react-input-emoji";

// const ChatBox = ({ chat, currentUserId, setSendMessage, receivedMessage }) => {
//   const [userData, setUserData] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const scroll = useRef();

//   const handleChange = (newMessage) => {
//     setNewMessage(newMessage);
//   };

//   // Fetching data for header
//   useEffect(() => {
//     const userId = chat?.members?.find((id) => id !== currentUserId);
//     const getUserData = async () => {
//       try {
//         const { data } = await fetch(`/api/users/${userId}`);
//         setUserData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (chat !== null) getUserData();
//   }, [chat, currentUserId]);

//   // Fetch messages
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const { data } = await fetch(`/api/chat/${chat?._id}/messages`);
//         setMessages(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     if (chat !== null) fetchMessages();
//   }, [chat?._id, messages]);
  
//   // Always scroll to last Message
//   useEffect(() => {
//     scroll.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Send Message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     const message = {
//       senderId: currentUserId,
//       text: newMessage,
//       chatId: chat._id,
//     };
//     const receiverId = chat.members.find((id) => id !== currentUserId);

//     // Send message to socket server
//     setSendMessage({ ...message, receiverId });

//     // Send message to database
//     try {
//       const { data } = await fetch(`/api/chat/${chat._id}/add-message`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(message),
//       });
//       setMessages([...messages, data]);
//       setNewMessage("");
//     } catch {
//       console.log("error");
//     }
//   };

//   // Receive Message from parent component
//   useEffect(() => {
//     console.log("Message Arrived: ", receivedMessage);
//     if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
//       setMessages([...messages, receivedMessage]);
//     }
//   }, [receivedMessage]);

//   return (
//     <>
//       <div className="ChatBox-container">
//         {chat ? (
//           <>
//             <div className="follower conversation">
//               <div className="menu-item">
//                 <div className="profile-picture">
//                   <img
//                     className="profile-picture"
//                     src={userData?.profilePicture || profile}
//                     alt="profileImg"
//                   />
//                 </div>
//                 <div className="name">
//                   <h3>{userData?.username}</h3>
//                 </div>
//               </div>
//             </div>
//             {/* Chatbox messages */}
//             {/* Chat-body */}
//             <div className="chat-body">
//               {messages.map((message) => (
//                 <div
//                   key={message._id}
//                   ref={scroll}
//                   className={
//                     message.senderId === currentUserId
//                       ? "chatMessage own"
//                       : "chatMessage"
//                   }
//                 >
//                   <span>{message.text}</span>
//                   <span>{format(message.createdAt)}</span>
//                 </div>
//               ))}
//             </div>
//             {/* Chat sender */}
//             <div className="chat-sender">
//               <div>+</div>
//               <InputEmoji value={newMessage} onChange={handleChange} />
//               <div onClick={handleSend} className="send-button buttn">
//                 send
//               </div>
//             </div>
//           </>
//         ) : (
//           <span>Tap on a chat to start a conversation!</span>
//         )}
//       </div>
//     </>
//   );
// };

// export default ChatBox;

