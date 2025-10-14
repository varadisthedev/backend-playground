// routes/user.js
const express = require('express');
const router = express.Router();

// GET route
router.get('/', (req, res) => {
  res.json({ message: 'User route working fine!' });
});

// POST route example
router.post('/create', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name} (age ${age}) created successfully!` });
});

// Export router
module.exports = router;
