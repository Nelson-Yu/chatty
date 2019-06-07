import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
    <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span><img className="logo" src="../images/chat-icon.png"/></span>
        <span className="users-online">{this.props.userCount} Users Online!</span>
    </nav>
    );
  }
}

export default NavBar;
