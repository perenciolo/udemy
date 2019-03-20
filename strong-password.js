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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789".split('');
    const lower_case = "abcdefghijklmnopqrstuvwxyz".split('');
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const special_characters = "!@#$%^&*()-+".split('');
    let num_numbers = 0;
    let num_lower = 0;
    let num_upper = 0;
    let special_chars = 0;
    let minimum_len = 6;
    let completion_len = 0;
    let passwordArr = password.split('');
    let sum = 0;
    let strongness = 4;
    let weekness = 0;
    
    if(passwordArr.length) {
       passwordArr.forEach(function(el) {
          if(numbers.includes(el)){
              num_numbers = 1;
          }
          if(lower_case.includes(el)){
              num_lower = 1;
          }
          if(upper_case.includes(el)){
              num_upper = 1;
          }
          if(special_characters.includes(el)){
              special_chars = 1;
          }
       });

        // Should be 4 to pass
        sum = num_numbers + num_lower + num_upper + special_chars;
        
       if(passwordArr.length < minimum_len) {
          completion_len = minimum_len - passwordArr.length;
       }

        console.log('cmp',completion_len)
        
       weekness = strongness - sum;

        console.log('weekness',weekness)
        
       if(completion_len === 0 || weekness > completion_len) {
        return   weekness;  
       }
        
       if (completion_len >= weekness) {
        return completion_len;
       }
        
       return completion_len - weekness; 
    }  

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
