const EventEmiter = require('events');

console.log('class');
console.log('class');

class heppend extends EventEmiter {
    startEvent() {
        setTimeout(() => {
            this.emit('somthingHappen', 5000);
        }, 2000);
    }
}
module.exports = heppend;
