import express from "express";
const app = express();

// Middlewares
function checkRoute(req, res, next) {
  console.log(`User is accessing ${req.url} page`);
  next();
}
app.use(checkRoute);

// Routes
app.get("/", (req, res) => res.send("Home page"));
app.get("/users", (req, res) => res.send("Users page"));
app.get("/products", (req, res) => res.send("Products page"));

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
