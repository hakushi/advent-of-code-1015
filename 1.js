const { string } = require('./1a_data.js');
let floor = 0;

for(i = 0; i<string.length; i++) {
    if(string[i] === '(') {
        floor++
    }
    if(string[i] === ')') {
        floor--
    }
    if(floor === -1) {
        console.log(i+1)
    }
}
console.log('Floor: ', floor);
