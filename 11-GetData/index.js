const http = require("http");
const fs = require('fs');
const queryString = require('querystring');

const app = http.createServer((req, res) => {
    fs.readFile('./views/form.html', 'utf-8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('Internal Server Error!!!');
            return;
        }

        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end()
        } else if (req.url == '/submit') {
            let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            })
            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(
                    `
                        <h3>Data Submitted is: </h3>
                        <p>Name : ${readableData.name}</p>
                        <p>Email : ${readableData.email}</p>
                    `
                )
                res.end();
            })
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Page Not Found</h1>');
            res.end();
        }
    })
});

app.listen(3001, () =>
    console.log(`Server is running in http://localhost:3001`)
);
