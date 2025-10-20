const express = require("express");
const app = express();
const PORT = 3000;

// A small quote database
const quotes = [
  "Discipline beats motivation.",
  "Push yourself, because no one else will.",
  "Dream big. Start small. Act now.",
  "Don’t stop when you’re tired, stop when you’re done.",
  "Make your future self proud."
];

// Endpoint to get a random quote
app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({
    quote: quotes[randomIndex],
    author: "Varad’s Cool API",
    timestamp: new Date().toISOString()
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Motivational Quote API! 🔥 Try /quote");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
