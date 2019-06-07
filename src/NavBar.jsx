import React, {Component} from 'react';

function NavBar(props) {
  return (
  <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span><img className="logo" src="../images/chat-icon.png"/></span>
      <span className="users-online">{props.userCount} Users Online!</span>
  </nav>
  );
}

export default NavBar;
