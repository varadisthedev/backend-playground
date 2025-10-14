// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');

// Use routes (mount all /user routes)
app.use('/user', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the backend home page!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
