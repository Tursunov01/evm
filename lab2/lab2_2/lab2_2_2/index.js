"use strict";

const fs = require("fs");

const express = require("express");

const app = express();
const port = 5015;
app.listen(port);

app.get("/me/page", function(request, response) {
    const nameString = request.query.p;
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});

app.get("/compare/num", function(request, response) {
    let content = fs.readFileSync("result.txt", "utf8");
    const arr = JSON.parse(content);
    const i = request.query.i;
    const index = parseInt(i);
    const answerJSON = JSON.stringify(arr[index]);    
    response.end(answerJSON);
});