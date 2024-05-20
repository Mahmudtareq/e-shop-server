const express = require("express");
const cors = require("cors");
const { ObjectId, MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(
  "mongodb+srv://db_users:rOojXTqXPuSZfAPE@cluster0.l1qze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

async function run() {
  try {
    // await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("productsDatabase");
    const productsCollections = db.collection("products");

    // get all supplies data
    app.get("/products", async (req, res) => {
      const productsData = await productsCollections.find({}).toArray();
      res.send(productsData);
    });
    
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productsCollections.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });
    // update data

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run();

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Server is running smoothly",
    timestamp: new Date(),
  };
  res.json(serverStatus);
});
