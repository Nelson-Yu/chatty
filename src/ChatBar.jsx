import React, {Component} from 'react';

class ChatBar extends Component {

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
        onKeyDown={this.props.addNewMessage}
        />
        
      </footer>
    );
  }
}

export default ChatBar;
