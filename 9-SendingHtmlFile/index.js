const http = require("http");
const fs = require('fs')

const app = http.createServer((req, res) => {
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.write('Internal server error')
            res.end()
            return
        }
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data);
        res.end();
    })
});

app.listen(3001, () =>
    console.log(`Server is running in http://localhost:3001`)
);
