import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';
import connectDB from './lib/db.js';
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";



// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

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