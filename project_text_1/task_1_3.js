"use strict";
let arr = []

function create(arr, name_x, x1, y1){
    let flag = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name == name_x)
            flag = 0;
    }
    if (flag){
        let cur_obj = {name: name_x, x: x1, y: y1};
        arr.push(cur_obj);
    }
    else
        console.log(name_x + "exists. Try to add another point.");
}


function remove(arr, name_x){
    let i = 0;
    while (i < arr.length){
        if (arr[i].name == name_x){
                arr.splice(i, 1);
                i--;
        }
        i++;
    }
}

function update(arr, name_from, name_to, x_to, y_to){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name == name_from){
            arr[i].name = name_to;
            arr[i].x = x_to;
            arr[i].y = y_to;
        }
    }
}

function getMaxLen(arr){
    let maxLen = 0;
    for (let i = 0; i < arr.length; i++){
        while(i + 1 < arr.length -1){
            let cur = Math.sqrt((arr[i].x - arr[i + 1].x)**2 + (arr[i].y - arr[i + 1].y)**2);
            if (cur > maxLen){
                maxLen = cur; 
            }
            i++;
        }
    }
    console.log("Max len = " + maxLen);
}

function getPoint(arr, x, y, len){
    for (let i = 0; i < arr.length; i++){
            let cur = Math.sqrt((arr[i].x - x)**2 + (arr[i].y - y)**2);
            if (cur < len){
                console.log("Point with name = " + arr[i].name + "is in inputed interval");
            }
        }
}

function getGroupOfPoint(arr, x, y, direction){
    for (let i = 0; i < arr.length; i++){
        if (direction == "UP"){
            if (arr[i].y > y)
                console.log("Point with name = " + arr[i].name + "is upper than point with coordinates (" + x + ":" + y + ")");
        }
        if (direction == "DOWN"){
            if (arr[i].y < y)
                console.log("Point with name = " + arr[i].name + "is lower than point with coordinates (" + x + ":" + y + ")");
        }
        if (direction == "LEFT"){
            if (arr[i].x < x)
                console.log("Point with name = " + arr[i].name + "is lefter than point with coordinates (" + x + ":" + y + ")");
        }
        if (direction == "RIGHT"){
            if (arr[i].x > x)
                console.log("Point with name = " + arr[i].name + "is righter than point with coordinates (" + x + ":" + y + ")");
        }
    }
}

function getPointInRange(arr, x1, y1, x2, y2){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].x <= x2 && arr[i].y >= y1){
            console.log("Point with name = " + arr[i].name + " is located in rectangle");
        }
    }
}

create(arr, "A", 1, 0);
create(arr, "B", 5, 1.5);
create(arr, "C", 0, 1.8);

getPointInRange(arr, 0, 0, 15, 2);
