"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const arr = [];
const n = readlineSync.question("Input N: ");

for (let i = 0; i < parseInt(n); i++){
    const str = readlineSync.question("Input str: ");
    if (str.length % 2 == 0){
        arr.push(str);
    }
}

const jsonString = JSON.stringify(arr);

fs.writeFileSync("result1.txt", jsonString);
