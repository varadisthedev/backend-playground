// routes/products.js
const express = require('express');
const router = express.Router();

// Dummy product data
let products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Phone', price: 15000 },
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET product by ID (route parameter)
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST new product (body parameter)
router.post('/add', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.json({ message: 'Product added!', product: newProduct });
});

// GET products with query parameter (e.g., /products/search?price=15000)
router.get('/search', (req, res) => {
  const { price } = req.query;
  const filtered = products.filter(p => p.price == price);
  res.json(filtered);
});

module.exports = router;
