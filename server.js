import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.get('/test', (req, res) => {
  res.send('Hello!');
});

app.post('/exec', (req, res) => {
  const { cmd } = req.body;

  if (!cmd) {
    return res.status(400).json({ error: 'Command (cmd) is required.' });
  }

  // Execute the command
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }

    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }

    // Return the command output
    res.json({ output: stdout });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
