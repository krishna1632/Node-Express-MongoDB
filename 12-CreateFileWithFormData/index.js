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

        res.writeHead(200, { 'Content-Type': 'text/html' });
        if (req.url == '/') {
            res.write(data);
        } else if (req.url == '/submit') {
            let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            })
            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                // console.log(readableData);
                let dataString = `My name is ${readableData.name} and my email id is ${readableData.email}`;
                // Synchronous File
                // fs.writeFileSync(`data/${readableData.name}.txt`, dataString)
                // console.log('File Created');
                // Asynchronous File
                fs.writeFile(`data/${readableData.name}.txt`, dataString, 'utf-8', (err) => {
                    if (err) {
                        res.end('Internal Server Error');
                        return false;
                    } else {
                        console.log('File Created');
                    }
                })
            })
            res.write('<h1>Data submitted</h1>')
        }
        res.end();
    })
});

app.listen(3001, () =>
    console.log(`Server is running in http://localhost:3001`)
);
