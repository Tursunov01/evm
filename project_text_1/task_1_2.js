"use strict";
let arr = []

function create(arr, group_x, studCard_x, grade_x){
    let flag = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].studCard == studCard_x)
            flag = 0;
    }
    if (flag){
        let cur_obj = {group: group_x, studCard: studCard_x, grade: grade_x};
        arr.push(cur_obj);
    }
    else
        console.log(studCard_x + "exists. Try to add another student.");
}


function remove(arr, studCard_x){
    let i = 0;
    while (i < arr.length){
        if (arr[i].studCard == studCard_x){
                arr.splice(i, 1);
                i--;
        }
        i++;
    }
}

function update(arr, studCard_from, group_to, studCard_to, grade_to){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].studCard == studCard_from){
            arr[i].studCard = studCard_to;
            arr[i].group = group_to;
            arr[i].grade = grade_to;
        }
    }
}

function getAverageGrade(arr, studCard_x){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].studCard == studCard_x){
            for (let j = 0; j < (arr[i].grade).length; j++){
                sum += arr[i].grade[i];
            }
            sum /= (arr[i].grade).length;
        }
    }
    console.log("Average grades of student " + studCard_x + "is " + sum)
}

function getStudentByGroup(arr, group_x){
    console.log("List of student in " + group_x + "group")
    for (let i = 0; i < arr.length; i++){
        if (arr[i].group == group_x){
            console.log("StudCard is " + arr[i].studCard + ".Grades are " + arr[i].grade);
        }
    }
}

function getStudWithMaxGrades(arr, group_x){
    let index = 0;
    let maxGrade = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].group == group_x){
            if ((arr[i].grade).lenght > maxGrade){
                maxGrade = (arr[i].grade).lenght;
                index = i;
            }
        }
    }
    console.log("In " + group_x + "group maxmimal grades have student with ID: "+ arr[index].studCard);
} 

function getStudWithZeroGrades(arr){
    for (let i = 0; i < arr.length; i++){
        if ((arr[i].grade).lenght == 0){
            console.log("Student with zero grades have student with ID: "+ arr[i].studCard);
        }
    }
} 