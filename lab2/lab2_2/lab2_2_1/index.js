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
    let result;
    const a = request.query.a;
    const b = request.query.b;
    const c = request.query.c;
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);
    if (aInt > bInt && aInt > cInt)
        result = aInt;
    else if (bInt > aInt && bInt > cInt)
        result = bInt;
    else
        result = cInt;
    const answerJSON = JSON.stringify({Result: result});
    response.end(answerJSON);
});