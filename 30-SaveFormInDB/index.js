import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Template Engine
app.set("view engine", "ejs");

// Add Middleware
app.use(express.urlencoded({ extended: true }));

// Connect to database
const dbName = "db_testing";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db(dbName);

  // Routes
  app.get("/api", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    res.send(students);
  });

  app.get("/ui", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    res.render("students", { students });
  });

  app.get("/add", (req, res) => {
    res.render("form");
  });

  app.post("/submit", async (req, res) => {
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    console.log(result);
    res.send(`
      <h1>Data Submitted Successfully</h1>
      <h3><a href='/ui'>See Data</a></h3>  
    `);
  });
});

// Routes
app.get("/", (req, res) =>
  res.send(`<h1><a href = '/add'>Add Students</a></h1>
  `)
);

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
