// client/src/utils/socket.js
import { io } from 'socket.io-client';

// Connect to the server's Socket.IO instance
const SOCKET_URL = process.env.NODE_ENV === 'production' 
  ? window.location.origin
  : 'http://localhost:5000';

const socket = io(SOCKET_URL, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

// Event listeners for connection status
socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

export default socket;