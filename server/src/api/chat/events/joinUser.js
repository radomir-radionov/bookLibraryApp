import { io } from '../../../index.js';
import moment from 'moment';

const handleJoinUser = (data, socket, rooms) => {
  if (!rooms[data.room]) rooms[data.room] = [];

  const existingUserIndex = rooms[data.room].findIndex(
    (user) => user.userId === data.userId
  );

  if (existingUserIndex === -1) {
    rooms[data.room].push({
      sockeID: socket.id,
      userId: data.userId,
      user: data.name,
      room: data.room,
    });
  } else {
    socket.leave(data.room);
  }

  socket.join(data.room);
  io.to(data.room).emit('joinedUser', rooms[data.room]);
  io.to(data.room).emit('newUser', {
    name: data.name,
    text: `${data.name} has joined the room`,
    createdAt: moment().format('LT'),
  });

  console.log('rooms', rooms);

  const subscriptions = Object.keys(socket.rooms);
  console.log('Subscriptions:', subscriptions);
};

export default handleJoinUser;
