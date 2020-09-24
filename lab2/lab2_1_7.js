"use strict"

const fs = require("fs");

let content = fs.readFileSync("result1.txt", "utf8");
const obj = JSON.parse(content);
function getValue(obj) {
    getProp(obj);
    function getProp(o) {
        for(var prop in o) {
            if(typeof(o[prop]) === 'object') {
                console.log(prop)
                getProp(o[prop]);
            } 
        }
    }
}

getValue(obj);