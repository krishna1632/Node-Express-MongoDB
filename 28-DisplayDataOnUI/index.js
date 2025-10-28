import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Connect to database
const dbName = "db_testing";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

// Set EJS Template engine
app.set("view engine", "ejs");

// Set Middleware
app.use(express.urlencoded());

// Routes
app.get("/", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("students");
  const students = await collection.find().toArray();
  console.log(students);
  res.render("students", { students });
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
