"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");
const widening = readlineSync.question("Input widening: ");

const dir = readlineSync.question("Input directory: ");
const arr = fs.readdirSync(dir);
for (let i = 0; i < arr.length; i++){
    if (arr[i].substr(-1*widening.length, widening.length) == widening){
        const contentString = fs.readFileSync(arr[i], "utf8");
        console.log(contentString);
    }
}
