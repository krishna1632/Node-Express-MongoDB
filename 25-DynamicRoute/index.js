import express from "express";
const app = express();

// Routes
app.get("/", (req, res) => {
  const users = ["Krishna", "Vanshika", "Dev", "Dwaipayan"];
  let data = ``;
  for (let i = 0; i < users.length; i++) {
    data += `
      <h3>
        <li>Visit 
          <a href='user/${users[i]}'>${users[i]}'s</a> page
        </li>
      </h3>
    `;
    console.log(users[i]);
  }
  res.send(data);
});

app.get("/user/:name", (req, res) => {
  let username = req.params.name;
  res.send(`<h1>This is ${username}'s page</h1>`);
});

app.listen(3500, () =>
  console.log(`Server running on port http://localhost:3500`)
);
