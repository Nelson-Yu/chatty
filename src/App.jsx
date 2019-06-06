import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Anonymous',
      messages: [],
      userCount: 0
    };
    this.socket = new WebSocket('ws://localhost:3001')
  }
  
  addMessage = (message) => {
    const oldMessages = this.state.messages;
    const newMessages = oldMessages.concat(message);
    this.setState({messages: newMessages});
  }
  
  addNameChange = (name) => {
    this.setState({currentUser: name});
  }
  
  sendToServer = (message) => {
    this.socket.send(JSON.stringify(message));
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = (event) => {
      console.log('Connected to server');
    }
    this.socket.onmessage = (event) => {
      console.log(event);
      const receievedData = JSON.parse(event.data);

      switch(receievedData.type) {
        case 'incomingMessage':
          this.addMessage(receievedData);
          break;
        case 'incomingNotification':
          this.addMessage(receievedData);
          break;
        case 'incomingUserCount':
          this.setState({userCount: receievedData.count})
          break;
        default:
          throw new Error('Unknown event type' + receievedData.type);
      }
    }
  }


  render() {
    return (
      <Fragment>
        <NavBar userCount={this.state.userCount}/>
        <MessageList name={this.state.currentUser} messages={this.state.messages}/>
        <ChatBar 
        name={this.state.currentUser} 
        sendToServer={this.sendToServer} 
        addNameChange={this.addNameChange}
        />
      </Fragment>
    );
  }
}
export default App;
