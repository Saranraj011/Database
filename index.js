const { MongoClient } = require("mongodb");

// MongoDB connection URL (Change accordingly)
const uri = "mongodb://localhost:27017/"; // Local MongoDB
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("MyFristDB");
    const collection = database.collection("newDB");

    // Example: Insert a document
    await collection.insertMany([{ name: "sam", age: 20 },{ name: "Jeo", age: 34 },{ name: "raj", age: 22 },{ name: "ajay", age: 23 },{ name: "vijay", age: 34}]);

    // Example: Fetch documents
    const documents = await collection.find().toArray();
    console.log("Documents:", documents);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectDB();
