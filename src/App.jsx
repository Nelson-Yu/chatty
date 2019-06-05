import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.jsx'
import ChatBar from './ChatBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'},
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
        }
      ]
    };
  }
  
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = (event) => {
      console.log('Connected to server');
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

  addNewMessage = (evt) => {
    if(evt.key === 'Enter'){
      const index = this.state.messages.length + 1;
      const contentInput = evt.target;
      const oldMessage = this.state.messages;
      const newMessage = {
        key: index, 
        username: this.state.currentUser.name, 
        content: contentInput.value
      };
      const messages = [...oldMessage, newMessage];
      this.setState({messages: messages});
      contentInput.value = "";
    }
  }
  
  render() {
    return (
      <Fragment>
        <NavBar/>
        <MessageList messages={this.state.messages}/>
        <ChatBar name={this.state.currentUser.name} addNewMessage={this.addNewMessage}/>
      </Fragment>
    );
  }
}
export default App;
