import { io } from '../../../index.js';

const handleMessage = (data) => {
  const { room, message } = data;
  io.to(room).emit('messageResponse', message);
};

export default handleMessage;
