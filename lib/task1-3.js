"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readFilePath = "./csv/node_mentoring_t1_2_input_example.csv";
var writeFilePath = "./formattedCsv.txt";
readWriteFile(readFilePath, writeFilePath);

function readWriteFile(file, writeFile) {
  var writeStream = _fs["default"].createWriteStream(writeFile);

  _fs["default"].createReadStream(file).pipe((0, _csvtojson["default"])()).on('data', function (row) {
    return writeStream.write(row);
  }).on('error', function (error) {
    return console.log(error);
  }).on('end', function () {
    return console.log('File updated!');
  });
}