import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }
  
  handleNewMessage = (event) => {
    if(event.key === 'Enter') {
      const contentInput = event.target;
      const newMessage = {
        type: 'postMessage',
        username: this.props.name, 
        content: contentInput.value
      };
      this.props.addNewMessage(newMessage);
      contentInput.value = "";
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input 
        className="chatbar-username"
        placeholder="Your Name (Optional)"
        value={this.props.name}
        onChange={this.props.handleNameChange}
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
