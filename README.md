# E-Commerce-Assignment
The e-commerce Node.js API facilitates product management with features for creating, updating, and deleting products and variants. The system includes a search functionality for products, ensuring efficient data retrieval. Robust testing using Jest and Newman ensures reliable performance.

<h1> To Run and Interact this project </h1>

````````
Step 1:

Set Up Project
Create a new Node.js project using npm init.
Install necessary dependencies:  npm install express mongoose jest supertest.

Step 2:
Install Dependencies
Navigate to the project folder and install the required dependencies.
cd <e-commerce>
npm install

Step 3:
Set Up MongoDB
Make sure your MongoDB server is running. If it's not, start it using the mongod command.
Connecting to MongoDB Atlas using Node.js involves using the MongoDB Node.js driver and providing the connection string provided by MongoDB Atlas. Follow these steps:

Step 3.1:

Create a MongoDB Atlas Cluster
Go to the MongoDB Atlas website and sign in or create an account.
Create a new cluster by following the instructions provided.

Step 3.2:

Obtain Connection String
Once your cluster is created, go to the "Clusters" section.
Click the "Connect" button for your cluster.
Choose "Connect Your Application.
Copy the connection string. It should look like:
mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>

Step 3.3:

Install MongoDB Driver
Make sure you have the MongoDB Node.js driver installed in your project.
npm install mongodb

Step 3.4:

Connect to MongoDB Atlas in Node.js
Now, you can use the obtained connection string to connect to MongoDB Atlas in your Node.js project.
const { MongoClient } = require('mongodb');
// Replace the connection string with your MongoDB Atlas connection string
const uri = 'mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function connectToMongoDB() {
  try {
    await client.connect();
   console.log('Connected to MongoDB Atlas');
  } catch (error) {
  console.error('Error connecting to MongoDB Atlas:', error);
  }
}
// Call the function to connect
connectToMongoDB();
Replace <username>, <password>, <cluster-name>, and <database-name> with your actual MongoDB Atlas credentials.

Step 4:

Run the Server
Start the Node.js server.
node app.js
You should see a message indicating that the server is running on a specific port. Ex: http://localhost:3000

Step 5:

Test with Postman
Open Postman and test the API by sending requests to http://localhost:3000/products.
Use a POST request to create a new product.
Use a GET request to retrieve all products.

Example: Creating a Product
Let's assume you want to create a product using your API:

Create a new request named "Create Product."
Set the request type to POST.
Enter the URL, either directly (e.g., http://localhost:3000/products) or using your environment variable (e.g., {{baseUrl}}/products).
Set the header: Content-Type: application/json.
In the "Body" tab, select raw and choose JSON (application/json).
Enter the request body:
{
  "name": "Sample Product",
  "description": "This is a sample product",
  "price": 25,
  "variants": [
    {
      "name": "Regular",
      "sku": "R123",
      "additionalCost": 0,
      "stockCount": 100
    },
    {
      "name": "Large",
      "sku": "L123",
      "additionalCost": 5,
      "stockCount": 50
    }
  ]
}
