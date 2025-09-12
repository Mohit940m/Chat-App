import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';


// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json({ limit: '4mb' }));

app.use('/api/users', (req, res) => {
  res.send('User route');
});

app.use('/api/messages', (req, res) => {
  res.send('Messages route');
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});