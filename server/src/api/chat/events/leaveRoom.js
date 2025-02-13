import { io } from '../../../index.js';
import moment from 'moment';

const handleLeaveRoom = (data, socket) => {
  const { username, room } = data;

  socket.leave('room');

  io.to(room).emit('messageResponse', {
    name: username,
    text: `${username} left the room!`,
    createdAt: moment().format('LT'),
  });
};

export default handleLeaveRoom;
