const { data } = require('./3-data');

let santaXPos = 0;
let santaYPos = 0;

let roboXPos = 0;
let roboYPos = 0;

const steps = [];

const coordinatesExistsInArray = (x, y) => (
    steps.find((step) => 
        step.x === x && step.y === y
    )    
);

const step = (direction, isSanta) => {
    switch(direction) {
        case '<':
            isSanta ? santaXPos-- : roboXPos--;
            break;
        case '>':
            isSanta ? santaXPos++ : roboXPos++;
            break;
        case '^': 
            isSanta ? santaYPos++ : roboYPos++;
            break;
        case 'v':
            isSanta ? santaYPos-- : roboYPos--;
            break;
    }
    if(isSanta) {
        if(!coordinatesExistsInArray(santaXPos, santaYPos)) {
            steps.push({x: santaXPos, y: santaYPos});
        }
        console.log('Santa is at x: ', santaXPos, 'y: ', santaYPos)
        return;
    }
    if(!coordinatesExistsInArray(roboXPos, roboYPos)) {
        steps.push({x: roboXPos, y: roboYPos});
    }
    console.log('Robo Santa is at x: ', roboXPos, 'y: ', roboYPos)
}

for(let i=0; i<data.length; i++) {
    step(data[i], i%2 === 0);
}

console.log('Unique houses delivered to: ', steps.length)