const app = require('express')();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

io.on('connection', socket => {
  socket.on('join', ({ username, room }) => {
    socket.join(room);

    socket.broadcast.to(room).emit('messages', { user: 'admin', text: `${username} has joined the room`, room })
  });

  socket.on('sendMessage', messageObject => {
    socket.to(messageObject.room).emit('messages', messageObject);
  });

  socket.on('disconnect', () => {
    console.log(`User with ID: ${socket.id} has just left`);
  });
});

server.listen(3001, () => {
  console.log('Server is up...');
});
