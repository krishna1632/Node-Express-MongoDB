import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Template Engine
app.set("view engine", "ejs");

// Add Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

  app.post("/add-student-api", async (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are required!!!" });
    }
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    return res.status(201).send({
      success: true,
      message: "Data inserted successfully",
      result: result,
    });
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
