"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const dir = readlineSync.question("Input directory: ");


var getFiles = function (dir, files_){
    
    files_ = files_ || [];
      var files = fs.readdirSync(dir);
      for (var i in files){
          var name = dir + '/' + files[i];
          if (fs.statSync(name).isDirectory()){
              getFiles(name, files_);
          } else {
              files_.push(name);
          }
      }
      return files_;
  };

  
let arr = getFiles(dir);
for (var i in arr){
    const contentString = fs.readFileSync(i, "utf8");
    if (contentString.length < 10)
        console.log(i);
}