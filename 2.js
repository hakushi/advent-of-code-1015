const { data } = require('./2-data');

const sortFunc = ((a,b) => {
    if(a<b) {
        return -1
    }
    if(a>b) {
        return 1
    }
    
    return 0
})

const getArea = (l,w,h) => {
    const surfaceA = parseInt(2*l*w, 10);
    const surfaceB = parseInt(2*w*h, 10);
    const surfaceC = parseInt(2*h*l, 10);

    const arr = [surfaceA, surfaceB, surfaceC].sort(sortFunc);
    return(surfaceA + surfaceB + surfaceC + arr[0]/2);
}

const getRibbon = (l,w,h) => {
    const arr = [parseInt(l, 10),parseInt(w, 10),parseInt(h, 10)].sort(sortFunc);
    console.log(arr);
    return arr[0]*2 + arr[1]*2 + parseInt(l, 10)*parseInt(w, 10)*parseInt(h, 10)
}

let paperCounter = 0;
let ribbonCounter = 0;

data.forEach(row => {
    paperCounter += getArea(row.l, row.w, row.h)
    ribbonCounter += getRibbon(row.l, row.w, row.h)
})

console.log('Paper needed: ', paperCounter)
console.log('Ribbon needed: ', ribbonCounter)