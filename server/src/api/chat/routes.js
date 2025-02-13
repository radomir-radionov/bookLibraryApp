import handleJoinUser from './events/joinUser.js';
import handleLeaveRoom from './events/leaveRoom.js';
import handleMessage from './events/message.js';
import handleDisconnect from './events/disconnect.js';

const rooms = {};

const handleConnection = (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('joinUser', (data) => handleJoinUser(data, socket, rooms));
  socket.on('message', (data) => handleMessage(data));
  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));
  socket.on('clearTyping', () =>
    socket.broadcast.emit('clearTypingResponse', '')
  );
  socket.on('leaveRoom', (data) => handleLeaveRoom(data, socket));
  socket.on('disconnect', () => handleDisconnect(socket, rooms));
};

export default handleConnection;
