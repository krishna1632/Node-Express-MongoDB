const http = require("http");

const app = http.createServer((req, res) => {
  res.write("<h1>Jai Shree Ram</h1>");
  res.end();
});

app.listen(4000, () =>
  console.log(`Server is running in http://localhost:4000`)
);
