const express = require('express');
const app = express();
const path = require('path');
const WebSocket = require('ws');

const socketServer = new WebSocket.Server({port: 3030});
const messages = ['Start Chatting!'];
socketServer.on('connection', (socketClient) => {
  console.log('connected');
  console.log('Number of clients: ', socketServer.clients.size);
  socketClient.send(JSON.stringify(messages));
  
  socketClient.on('message', (message) => {
    messages.push(message);
    socketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify([message]));
      }
    });
  });

    socketClient.on('close', (socketClient) => {
        console.log('closed');
        console.log('Number of clients: ', socketServer.clients.size);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

const port = 8765;
app.listen(port, () => {
    console.log(`listening http://localhost:${port}`);
}); 