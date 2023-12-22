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
    }
    if (req.url === '/about') {
        res.write('page not foud');
    }
}).listen(3000);
