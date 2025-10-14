import express from 'express'
// index.js
const app = express(); // stores the express application obj
console.log(app);

const PORT = 5000;
// [React frontend] --> (fetch request) --> [Express API at port 5000] --> (send data back) --> [React displays it]

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});
app.get('/admin', (req, res) => {
  res.send('looks like the admin panel!');
});

// Example API route
app.get('/api/user', (req, res) => {
  res.json([{ name: 'Varad', role: 'Student', status: 'learning Node & Express' },
    { name: 'varunvi', role: 'jalpari', status: 'already knows Node & Express' }]);

});

// Start server
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
