import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Connect to database
const dbName = "db_testing";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db(dbName);
  app.get("/api", async (req, resp) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    resp.send(students);
  });
  app.get("/ui", async (req, resp) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    resp.render("students", { students });
  });
});

// Template Engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) =>
  res.send(`<h1><a href = '/api'>Go here to see json file</a></h1>
  <h1><a href = '/ui'>Go here to see table</a></h1>
  `)
);

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
