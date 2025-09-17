import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';
import connectDB from './lib/db.js';
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server} from "socket.io";




// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Create Socket.io server
export const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// store online users
export const userSocketMep = {}; // {userId: socketId}

// Socket.io connection
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User connected: " + userId);

  if (userId) {
    userSocketMep[userId] = socket.id;
  }

  // emit to all users that user is online
  io.emit("getOnlineUsers", Object.keys(userSocketMep));

  socket.on("disconnect", () => {
    console.log("User disconnected: " + userId);
    delete userSocketMep[userId];
    // emit to all users that user is offline
    io.emit("getOnlineUsers", Object.keys(userSocketMep));
  });
});




// Middleware
app.use(cors());
app.use(express.json({ limit: '4mb' }));

// app.use('/', (req, res) => {
//   res.send('Server is running');
// });

// app.use('/api/users', (req, res) => {
//   res.send('User route');
// });

app.use('/api/auth',userRouter)
app.use('/api/messages',messageRouter)
await connectDB()

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});