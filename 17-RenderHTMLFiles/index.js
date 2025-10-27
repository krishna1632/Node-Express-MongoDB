import express from "express";
import path from "path";
const app = express();

app.get("/", (req, res) => {
  const absPath = path.resolve("./views/home.html");
  res.sendFile(absPath);
});

app.get("/login", (req, res) => {
  const absPath = path.resolve("./views/login.html");
  res.sendFile(absPath);
});

app.post("/submit", (req, res) => {
  const absPath = path.resolve("./views/submit.html");
  res.sendFile(absPath);
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
