"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");
const glasnie = ["у", "е", "э","о", "а","я", "и", "ю"];
let flag;
const content = fs.readFileSync("result1.txt", "utf-8");
const arr = JSON.parse(content);

for (let i = 0; i < arr.length; i++){
    flag = 0;
    for (let j = 0; j < arr[i].length; j++){
        let letter = (arr[i][j]).toLowerCase();
        for (let k = 0; k < glasnie.length; k++){
            if (letter == glasnie[k])
                flag++;
        }
    }
    if (flag == arr[i].length)
        console.log(arr[i]);
}