// server.js
import express from 'express';

const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
