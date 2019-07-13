Chatty
=====================

## Overview

Chatty is a SPA(Single-Page-Application) built with ReactJS, Webpack, and Websockets. This real-time app allows users to communicate with each other without delay. Users may also send URLs of images to send an image in chat.

## Final Product

!["Screenshot of Chatty-1"](https://github.com/Nelson-Yu/lighthouse-labs-chatty-app/blob/master/docs/Chatty-1.png)
!["Screenshot of Chatty-2"](https://github.com/Nelson-Yu/lighthouse-labs-chatty-app/blob/master/docs/Chatty-2.png)
!["Screenshot of Chatty-3"](https://github.com/Nelson-Yu/lighthouse-labs-chatty-app/blob/master/docs/Chatty-3.png)

## Usage

1. Enter a name or stay as 'Anonymous'
2. From the header, see if other users are online
3. Type a message and press ENTER to send
4. Have fun and chat away!

## Tech Stack
* ReactJS
* WebPack with Babel and Webpack-dev-server
* WebSockets(ws) with NodeJS
* CSS, SASS, HTML5, JSX

## Getting Started
Clone this project. Install the dependencies for this project. Change diectory into chatty-server, install the dependencies for the WebSocket server. Start up both servers in serparate terminals. 

1. `git clone git@github.com:Nelson-Yu/lighthouse-labs-chatty-app.git chatty-app`

#### React-Front-End
1. `cd chatty-app`
2. `npm install`
3. `npm start`

#### WebSocket Server
1. `cd chatty-server`
2. `npm install`
3. `npm start`

Navigate to `http://localhost:3000` to use Chatty

## Dependencies

Chatty server:
* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* CSS-loader
* SASS-loader
* Node-sass
* Style-loader
* SockJS-client
* ESlint 

WebSocket server:
* Express
* [ws](https://github.com/websockets/ws)
* uuid