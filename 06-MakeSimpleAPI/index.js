const http = require("http");

const usersData = [
  {
    name: "krishna",
    age: 21,
    email: "krishna@test.com",
  },
  {
    name: "vanshika",
    age: 20,
    email: "vanshi@test.com",
  },
  {
    name: "dev",
    age: 21,
    email: "dev@test.com",
  },
];

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(usersData));
  res.end();
});

app.listen(1000, () =>
  console.log(`Server running on port http://localhost:1000`)
);
