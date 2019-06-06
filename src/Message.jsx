import React, {Component, Fragment} from 'react';

const checkLink = (content) => {
  const regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&’\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/;
  const pictureLink = content.match(regExp);
  if(pictureLink) {
    return pictureLink[0];
  }
  return false;
}

class Message extends Component {

  render() {
    const validLink = checkLink(this.props.content);

    return this.props.type === 'incomingMessage' ? (
      <Fragment>
        <div className="message">
          <span className="message-username" style={{color:this.props.color}}>{this.props.user}</span>
          {!validLink && <span className="message-content">{this.props.content}</span>}
          {validLink && <span className="message-picture"><img className="picture" src={validLink}/></span>}
        </div>
      </Fragment>
    ) : (
        <div className="message system">
          {this.props.content}
        </div>
    );
  }
}

export default Message;