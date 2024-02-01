const http = require('http');
const fs = require('fs');

// http.createServer().close();
http.createServer((req, res) => {
    // fs.readFile('index.html', (err, data) => {
    //     if (err) throw err;
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });

    const readStream = fs.createReadStream(`${__dirname}/text.txt`);
    if (req.url === '/') {
        readStream.pipe(res);
    } else if (req.url === '/about') {
        res.write('<h1>welcome to about page</h1>');
        res.end();
    } else {
        res.write('nothing here');
        res.end();
    }
}).listen(3000);
