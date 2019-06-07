import React, {Component} from 'react';

function ChatBar(props) {
  const { name, addNameChange, sendToServer, userColor} = props;

  const handleNameChange = (event) => {
    if(event.target.value !== name) {
      const newName = {
        type: 'postNotification',
        content: `${name} changed their name to ${event.target.value}`
      }
      addNameChange(event.target.value);
      sendToServer(newName);
    }
  }
  
  const handleNewMessage = (event) => {
    if(event.key === 'Enter') {
      const contentInput = event.target;
      const newMessage = {
        type: 'postMessage',
        username: name, 
        content: contentInput.value,
        userColor: userColor
      };
      sendToServer(newMessage);
      contentInput.value = "";
    }
  }

  return (
    <footer className="chatbar">
      <input 
      className="chatbar-username"
      placeholder="Your Name (Optional)"
      defaultValue={name}
      onBlur={handleNameChange}
      />
      <input 
      className = "chatbar-message"
      placeholder="Type a message and hit ENTER"
      onKeyDown={handleNewMessage}
      />
      
    </footer>
  );
}

export default ChatBar;
