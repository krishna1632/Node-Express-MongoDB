const http = require("http");

const arg = process.argv;
console.log(arg);

const app = http.createServer((req, res) => {
    res.write("Jai Shree Ram");
    res.end();
});

const port = arg[2];

app.listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
);
