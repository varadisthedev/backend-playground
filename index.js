
import express from 'express';
import productRoutes from './routes/products.js';
// index.js
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import product routes
app.use('/products', productRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Day 2 backend is live!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
