// server.js

const express = require('express');
const WebSocket = require('ws')
const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

// Sets up broadcast to send data to every client with an open WebSocket
wss.broadcast = (data) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

// Defined a userCount message to send to client
const userCount = {
  type: 'incomingUserCount',
  count: 0
};

const colorArray = ['#D00000','#25CED1', '#064789', '#427AA1', '#E54B4B', '#470024', '#5B1865', '#EC4E20', '#A3E7EC']

// A function that randomizes the a color from colorsArray
const randomColor = (arr) => {
  let i = Math.floor(Math.random()*(arr.length - 1));
  return arr[i];
}

// Defined a userColor message to send to client
const userColor = {
  type: 'incomingUserColor',
  color:''
}

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Set userCount's count to the amount of clients connected to the ws server
  userCount.count = wss.clients.size;

  // Sets userColor's color to a random color from the colorArray
  userColor.color = randomColor(colorArray);

  wss.broadcast(JSON.stringify(userCount));
  ws.send(JSON.stringify(userColor));

  ws.on('message', (data) => {
    receivedData = JSON.parse(data);
    receivedData.id = uuidv1();

    //Check to see the type of the received post from client
    if(receivedData.type === 'postMessage') {
      receivedData.type = 'incomingMessage';
    }

    if(receivedData.type === 'postNotification') {
      receivedData.type = 'incomingNotification';
    }

    wss.broadcast(JSON.stringify(receivedData));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');

    // Updates user count when a client is closed
    userCount.count = wss.clients.size;

    wss.broadcast(JSON.stringify(userCount));
  });
});