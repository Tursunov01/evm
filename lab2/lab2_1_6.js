"use strict"
let n = 0;
function getValue(obj) {
    getProp(obj);

    function getProp(o) {
        for(var prop in o) {
            if(typeof(o[prop]) === 'object') {
                n++;
                getProp(o[prop]);
            } 
        }
    }
    return n;
}

let obj = {a: 1, c: 2, d: {q:1, r:4, k:{l:7, p: 0}}};
console.log("Result is ", getValue(obj));