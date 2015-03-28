#!/usr/bin/env node
 //var fs = require("fs");

var jsxformat = require("jsxformat");
var input = [];
process.stdin.on("data", function(trunk) {
    input.push(trunk);
});

process.stdin.on("end", function() {
    //console.log(input.join(""));
    var code = input.join("");
    var output;
    jsxformat.setOptions({});
    output = jsxformat.format(code);
    process.stdout.write(output);
});
