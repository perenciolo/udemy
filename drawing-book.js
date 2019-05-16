'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let minPageTurns = 0;

    if (p === n || p === 1) {
        return minPageTurns;
    }

    const pages = [];

    for (let i = 1; i <= n; i++) {
        pages.push(i);
    }

    let pairs = pairArray(pages.slice(1));
    pairs.splice(0, 0, [pages[0]]);
    // Max index of array pairs.
    const maxIndex = pairs.length - 1;

    pairs.forEach((el, i) => {
        if (el.indexOf(p) !== -1) {

            if (i === maxIndex) {
                return;
            } else if (maxIndex - i < i) {
                minPageTurns = maxIndex - i;
            } else {
                minPageTurns = i;
            }
        }
    });

    return minPageTurns;

}

function pairArray(a) {
    const temp = a.slice();
    const arr = [];

    while (temp.length) {
        arr.push(temp.splice(0, 2));
    }

    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
