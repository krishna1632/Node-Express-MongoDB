import express from "express";
import path from "path";
const app = express();

const absPath = path.resolve("./views/error.html");

// Middleware
const ageCheck = (req, res, next) => {
  console.log(req.query.age);

  if (!req.query.age || req.query.age < 18) {
    res.sendFile(absPath);
  } else {
    next();
  }
};

// Routes
app.get("/", (req, res) => res.send("<h1>Home page</h1>"));
app.get("/login", (req, res) => res.send("<h1>Login page</h1>"));
app.get("/users", ageCheck, (req, res) => res.send("<h1>Users page</h1>"));
app.get("/products", ageCheck, (req, res) =>
  res.send("<h1>Products page</h1>")
);

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
