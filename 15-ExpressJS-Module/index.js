import express from "express";
import { about, home } from "./pages/pages.js";
const app = express();

app.get("/", (req, res) => {
  res.send(home());
});

app.get("/about", (req, res) => {
  res.send(about());
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
