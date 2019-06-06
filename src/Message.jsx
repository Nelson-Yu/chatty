import React, {Component, Fragment} from 'react';

class Message extends Component {
  render() {
    return this.props.type === 'incomingMessage' ? (
        <div className="message">
          <span className="message-username">{this.props.user}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
    ) : (
        <div className="message system">
          {this.props.content}
        </div>
    );
  }
}

export default Message;