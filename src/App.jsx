import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Anonymous',
      messages: []
    };
    this.socket = new WebSocket('ws://localhost:3001')
  }
  
  componentDidMount() {
    this.socket.onopen = (event) => {
      console.log('Connected to server');
    }
    this.socket.onmessage = (event) => {
      console.log(event);
      const receievedMessage = JSON.parse(event.data);
      const oldMessages = this.state.messages;
      const newMessages = oldMessages.concat(receievedMessage);
      this.setState({messages: newMessages});
    }
    // console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }

  handleNameChange = (event) => {
    this.setState({currentUser: event.target.value});
  }

  addNewMessage = (event) => {
    if(event.key === 'Enter'){
      const currentUser = (this.state.currentUser.length <= 0 ? 'Anonymous' : this.state.currentUser);
      const contentInput = event.target;
      const newMessage = {
        username: currentUser, 
        content: contentInput.value
      };
      this.socket.send(JSON.stringify(newMessage))
      contentInput.value = "";
    }
  }
  
  render() {
    return (
      <Fragment>
        <NavBar/>
        <MessageList messages={this.state.messages}/>
        <ChatBar 
        name={this.state.currentUser} 
        addNewMessage={this.addNewMessage} 
        handleNameChange={this.handleNameChange}
        />
      </Fragment>
    );
  }
}
export default App;
