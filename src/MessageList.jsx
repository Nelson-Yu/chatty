import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    const eachMessage = this.props.messages.map((message) => 
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
}

export default MessageList;