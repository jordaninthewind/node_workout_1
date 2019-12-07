"use strict";

var _task = require("./task1-3.js");

console.log(module);
var readFilePath = "./csv/node_mentoring_t1_2_input_example.csv";
var writeFilePath = "./formattedCsv.txt";
(0, _task.readWriteFile)(readFilePath, writeFilePath);