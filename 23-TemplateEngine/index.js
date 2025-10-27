import express from "express";
const app = express();

// EJS Code
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.render("home", { name: "Krishna", age: 21 }));
app.get("/users", (req, res) => res.send("<h1>Users page</h1>"));
app.get("/products", (req, res) => res.send("<h1>Products page</h1>"));

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
