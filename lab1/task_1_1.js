"use strict";
let arr = []

function create(arr, surname_x, age_x){
    let flag = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].surname == surname_x)
            flag = 0;
    }
    if (flag){
        let cur_obj = {surname: surname_x, age: age_x};
        arr.push(cur_obj);
    }
    else
        console.log(surname_x + "exists. Try to add another surname.");
}

function print(arr){
    for (let i = 0; i < arr.length; i++){
        console.log("Surname is " + arr[i].surname + ". Age is " + arr[i].age);
    }
}

function remove(arr, surname_x, age_x){
    let i = 0;
    while (i < arr.length){
        if (arr[i].surname == surname_x && arr[i].age == age_x){
                arr.splice(i, 1);
                i--;
        }
        i++;
    }
}

function update(arr, surname_from, age_from, surname_to, age_to){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].surname === surname_from && arr[i].age === age_from){
            arr[i].surname = surname_to;
            arr[i].age = age_to;
        }
    }
}

function getAverageAge(arr){
    let averageAge = 0;
    for (let i = 0; i < arr.length; i++){
        averageAge += arr[i].age;
    }
    return averageAge / arr.length;
}

function getOldestChild(arr){
    let max = arr[0].age;
    let index = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].age > max){
            max = arr[i].age;
            console.log("Hello");
            index = i; 
        }
    }
    console.log("Oldest child surname is " + arr[index].surname + ". Age is " + arr[index].age);
}

function getChildInSection(arr, age_min, age_max){
    console.log("List of children who`s age in this section: \n");
    for (let i = 0; i < arr.length; i++){
        if (arr[i].age < age_max && arr[i].age > age_min)
            console.log("Surname is " + arr[i].surname + ". Age is " + arr[i].age);  
    }
}

function getChildByLetter(arr, letter){
    let currentLetter;
    console.log("List of children who`s surname starts with " + letter + ":\n");
    for (let i = 0; i < arr.length; i++){
        currentLetter = arr[i].surname[0];
        if (currentLetter.toLowerCase() === letter.toLowerCase())
            console.log("Surname is " + arr[i].surname + ". Age is " + arr[i].age);  
    }
}

function getChildByLettersNum(arr, n){
    console.log("List of children who`s length of surname is greater than " + n + ":\n");
    for (let i = 0; i < arr.length; i++){
        if ((arr[i].surname).length > n)
            console.log("Surname is " + arr[i].surname + ". Age is " + arr[i].age);  
    }
}

function getChildByFirstLetter(arr){
    let vowelLetters = ["у", "е", "э","о", "а","я", "и", "ю"];
    let letter;
    console.log("List of children who`s surname starts with vowel letter:\n");
    for (let i = 0; i < arr.length; i++){
        letter = (arr[i].surname[0]).toLowerCase();
        for (let j = 0; j < vowelLetters.length; j++){
            if (letter == vowelLetters[j])
                console.log("Surname is " + arr[i].surname + ". Age is " + arr[i].age);      
        }
    }
}

create(arr, "Уткирова", 18);
create(arr, "Турсунов", 7);
create(arr, "Куцелаба", 20);
create(arr, "юля", 16);
create(arr, "джим", 45);


function print(arr){
    for (let i = 0; i < arr.length; i++){
        console.log("Surname is " + arr[i].surname + ". Age is " + arr[i].age);
    }
}

// console.log(getAverageAge(arr));
// print(arr);
// getOldestChild(arr);
// getChildInSection(arr, 6, 17);
// getChildByLetter(arr, "s");
// getChildByLettersNum(arr, 3);
// getChildByFirstLetter(arr);
// remove(arr, "Турсунов", 7);
print(arr);