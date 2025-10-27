import express from "express";
import path from "path";
const app = express();

const absPath = path.resolve("./views/login.html");

// Built-In Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public")); // For serving static files like css files

// Routes
app.get("/", (req, res) => res.send("<h1>Home page</h1>"));
app.get("/login", (req, res) => {
  res.sendFile(absPath);
});
app.post("/submit", (req, res) => {
  res.send(`<h1>Data Submitted: ${JSON.stringify(req.body)}`);
  console.log(req.body);
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
