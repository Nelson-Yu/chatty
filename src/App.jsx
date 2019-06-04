import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <NavBar/>
        <MessageList messages={this.state.messages}/>
        <ChatBar name={this.state.currentUser.name}/>
      </Fragment>
    );
  }
}
export default App;
