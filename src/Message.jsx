import React, {Component, Fragment} from 'react';

// A function that uses the regExp to check if the message content has a url ending with an image/gif type
const checkLink = (content) => {
  const regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&’\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/;
  const pictureLink = content.match(regExp);
  if(pictureLink) {
    return pictureLink[0];
  }
  return false;
}

function Message(props) {
  const { content, type, color, user } = props;

  const validLink = checkLink(content);

  // Returns either message or notification depending on the received message from the WebSocket Server
  return type === 'incomingMessage' ? (
    <Fragment>
      <div className="message">
        <span className="message-username" style={{color:color}}>{user}</span>
        {!validLink && <span className="message-content">{content}</span>}
        {validLink && <span className="message-picture"><img className="picture" src={validLink}/></span>}
      </div>
    </Fragment>
  ) : (
      <div className="message system">
        {content}
      </div>
  );
}

export default Message;