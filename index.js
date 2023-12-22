// const http= require('http');
const fs = require('fs');
// const os= require('os');
const Happend = require('./emiter');

const hp = new Happend();
hp.on('somthingHappen', (time) => {
    console.log(`Somthing happend after time ${time}`);
});
hp.startEvent();

console.log('lodding...');

fs.appendFile(
    'index.html',
    `
Hello`,
    (err) => {
        if (err) throw err;
        console.log('success');
    }
);
// console.log(http);

// console.log(os.freemem());
