const csv = require("csvtojson");
const fs = require("fs");
const filePath = "./csv/node_mentoring_t1_2_input_example.csv";
const file = csv()
  .fromFile(filePath)
  .then(json => writeFile(json));

function writeFile(file) {
  const formattedFile = file.map(obj => JSON.stringify(obj));
  fs.writeFile("formattedCsv.txt", formattedFile, err => {
    if (err) throw err;
    console.log("The file has been saved.");
  });
}
