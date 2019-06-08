import React from 'react';
import Message from './Message.jsx'

// A functional component that loops over each props.messages and sends the data down to the message child funcitional component
function MessageList(props) {
  const eachMessage = props.messages.map((message) => 
  <Message 
  key={message.id} 
  type={message.type}
  user={message.username}
  color={message.userColor} 
  content={message.content}
  />);

  return (
    <main className="messages">
      {eachMessage}
    </main>
  );
}

export default MessageList;