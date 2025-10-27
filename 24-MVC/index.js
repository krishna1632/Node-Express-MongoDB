import express from "express";
import { router } from "./routes/user.routes.js";
const app = express();

// EJS Code
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.send(`<h1><a href='/users'>Go to users list page</a></h1>`);
});
app.use(router);

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
