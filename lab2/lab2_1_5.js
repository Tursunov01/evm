"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const result;
const n = readlineSync.question("Input N: ");


for (let i = 0; i < parseInt(n); i++){
    const str = readlineSync.question("Input str: ");
    let content = fs.readFileSync(str, "utf8");
    result += content;
}

fs.writeFileSync("result1.txt", result);
