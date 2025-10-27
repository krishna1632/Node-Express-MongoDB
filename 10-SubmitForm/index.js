const http = require("http");
const fs = require('fs');

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
            res.write('<h1>Data Submitted</h1>');
        }
        res.end();
    })

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // if (req.url == '/') {
    //     res.write(`
    //             <u><h1>Form Submit</h1></u>
    //             <form action='/submit' method='post' >
    //                 <input name='email' type="text" placeholder="Enter your name" required/>
    //                 <input  name='password' type="password" placeholder="Enter your password" required/>
    //                 <button>Click me</button>
    //             </form>
    //         `)
    // } else if (req.url == '/submit') {
    //     res.write('<h1>Data Submitted</h1>')
    // }
    // res.end();
});

app.listen(3001, () =>
    console.log(`Server is running in http://localhost:3001`)
);
