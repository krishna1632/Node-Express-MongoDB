import express from "express";
import path from "path";
const app = express();

const absPath = path.resolve("./views/error.html");
// Middlewares
function ageCheck(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.sendFile(absPath);
  } else {
    next();
  }
}

app.use(ageCheck);

// Routes
app.get("/", (req, res) => res.send("Home page"));
app.get("/users", (req, res) => res.send("Users page"));
app.get("/products", (req, res) => res.send("Products page"));

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
