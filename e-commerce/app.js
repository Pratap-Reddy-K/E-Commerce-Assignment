const express = require('express');
const mongoose = require('mongoose');
const productController = require('./controllers/productController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(productController);

const connectionString = 'mongodb+srv://ecomm:ecommapi@cluster0.i1eadof.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Connected to MongoDB Atlas!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
