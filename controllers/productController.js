const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Create product
router.post('/products', async (req, res) => {
    try {
      const { name, description, price, variants } = req.body;
  
      // Create product with basic details
      const product = new Product({
        name,
        description,
        price,
        variants: variants || [], // Ensure variants is an array
      });
  
      // Save the product to the database
      await product.save();
  
      res.status(201).send(product);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  });
  

// Read products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update product by ID
router.patch('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Search products by name, description, or variant name
router.get('/products/search', async (req, res) => {
    try {
      const { query } = req.query;
  
      // Perform a case-insensitive search on name, description, and variant name
      const products = await Product.find({
        $or: [
          { name: { $regex: new RegExp(query, 'i') } },
          { description: { $regex: new RegExp(query, 'i') } },
          { 'variants.name': { $regex: new RegExp(query, 'i') } },
        ],
      });
  
      res.send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

module.exports = router;
