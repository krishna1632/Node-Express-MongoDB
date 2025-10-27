import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Connect to database
const dbName = "db_testing";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const connectDb = async () => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("students");
  const result = await collection.find().toArray();
  console.log(result);
};

connectDb();

// Routes
app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
