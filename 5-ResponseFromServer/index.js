const http = require("http");

const age = 18;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Learning Node.js</title>
      </head>
      <body>
        <h1>Hello Krishna Bhai</h1>
        <h2>${age}</h2>
        <h2>${new Date()}</h2>
      </body>
    </html>
  `);
  res.end();
});

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});
