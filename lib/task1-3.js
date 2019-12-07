"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readWriteFile = readWriteFile;

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// babel compiles with following command
// './node_modules/.bin/babel ./task-1.3.js --out-dir lib
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