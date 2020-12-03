const { data } = require('./3-data');

let xPos = 0;
let yPos = 0;
const steps = [];

const coordinatesExistsInArray = (x, y) => (
    steps.find((step) => 
        step.x === x && step.y === y
    )    
);

const step = (direction) => {
    switch(direction) {
        case '<':
            xPos--;
            break;
        case '>':
            xPos++;
            break;
        case '^': 
            yPos++;
            break;
        case 'v':
            yPos--;
            break;
    }
    if(!coordinatesExistsInArray(xPos, yPos)) {
        steps.push({x: xPos, y: yPos});
    }
    console.log('x: ', xPos, 'y: ', yPos)
}

for(let i=0; i<data.length; i++) {
    step(data[i]);
}

console.log('Unique houses delivered to: ', steps.length)