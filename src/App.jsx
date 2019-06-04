import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <MessageList/>
        <ChatBar/>
      </Fragment>
    );
  }
}
export default App;
