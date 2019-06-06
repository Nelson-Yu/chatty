import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

  handleNameChange = (event) => {
    if(event.target.value !== this.props.name) {
      const newName = {
        type: 'postNotification',
        content: `${this.props.name} changed their name to ${event.target.value}`
      }
      this.props.addNameChange(event.target.value);
      this.props.sendToServer(newName);
    }
  }
  
  handleNewMessage = (event) => {
    if(event.key === 'Enter') {
      const contentInput = event.target;
      const newMessage = {
        type: 'postMessage',
        username: this.props.name, 
        content: contentInput.value
      };
      this.props.sendToServer(newMessage);
      contentInput.value = "";
    }
  }


  render() {
    return (
      <footer className="chatbar">
        <input 
        className="chatbar-username"
        placeholder="Your Name (Optional)"
        defaultValue={this.props.name}
        onBlur={this.handleNameChange}
        />
        <input 
        className = "chatbar-message"
        placeholder="Type a message and hit ENTER"
        onKeyDown={this.handleNewMessage}
        />
        
      </footer>
    );
  }
}

export default ChatBar;
