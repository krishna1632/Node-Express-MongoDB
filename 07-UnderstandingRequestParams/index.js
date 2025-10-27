const http = require("http");

const app = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    if (req.url == "/") {
        res.write("Home Page");
    } else if (req.url == "/login") {
        res.write("Login Page");
    } else {
        res.write("Other Page");
    }
    res.end();
});

app.listen(1001, () =>
    console.log(`Server is running in http://localhost:1001`)
);
