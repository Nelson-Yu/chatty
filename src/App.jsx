import React, {Component, Fragment} from 'react';
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList />
        <ChatBar />
      </Fragment>
    );
  }
}
export default App;
