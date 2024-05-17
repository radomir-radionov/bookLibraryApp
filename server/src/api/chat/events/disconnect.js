const handleDisconnect = (socket, rooms) => {
  console.log('🔥: A user disconnected');

  for (const room in rooms) {
    rooms[room] = rooms[room]?.filter(({ socketID }) => socketID !== socket.id);
  }
};

export default handleDisconnect;
