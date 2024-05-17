import { io } from 'socket.io-client';

// TODO: Add url to env
const socket = io('http://localhost:4000');

export default socket;
