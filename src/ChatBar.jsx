import React from 'react';

function ChatBar(props) {
  const { name, addNameChange, sendToServer, userColor} = props;

  // A function that handles the user name change event and creates a 'message' to send to the WebSocket Server
  const handleNameChange = (event) => {
    if (event.target.value === '') {
      return;
    }
    if(event.target.value !== name) {
      const newName = {
        type: 'postNotification',
        content: `${name} changed their name to ${event.target.value}`
      }
      addNameChange(event.target.value);
      sendToServer(newName);
    }
  }

  // A function that handles a new message event and creates a 'message' to send to the WebSocket Server, then resets input to an empty string
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
      contentInput.value = '';
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
