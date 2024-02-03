const request = require('supertest');
const app = require('../app');
const Product = require('../models/Product');

beforeEach(async () => {
  await Product.deleteMany();
});

test('Should create a new product', async () => {
  const response = await request(app)
    .post('/products')
    .send({
      name: 'Test Product',
      description: 'This is a test product',
      price: 20,
      variants: [
        {
          name: 'Small',
          sku: 'S123',
          additionalCost: 0,
          stockCount: 50,
        },
      ],
    })
    .expect(201);

  const product = await Product.findById(response.body._id);
  expect(product).not.toBeNull();
  expect(product.name).toBe('Test Product');
  expect(product.variants.length).toBe(1);
});

test('Should get all products', async () => {
  await Product.create({
    name: 'Product 1',
    description: 'Description 1',
    price: 30,
    variants: [
      {
        name: 'Medium',
        sku: 'M123',
        additionalCost: 5,
        stockCount: 20,
      },
    ],
  });

  await Product.create({
    name: 'Product 2',
    description: 'Description 2',
    price: 40,
    variants: [
      {
        name: 'Large',
        sku: 'L123',
        additionalCost: 10,
        stockCount: 10,
      },
    ],
  });

  const response = await request(app)
    .get('/products')
    .expect(200);

  expect(response.body.length).toBe(2);
});

// More tests for update, delete, and search functionality can be added similarly.
