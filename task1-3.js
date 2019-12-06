import csvtojson from 'csvtojson';
import fs from 'fs';

const readFilePath = "./csv/node_mentoring_t1_2_input_example.csv";
const writeFilePath = "./formattedCsv.txt";

readWriteFile(readFilePath, writeFilePath);

function readWriteFile(file, writeFile) {
  const writeStream = fs.createWriteStream(writeFile)
  fs.createReadStream(file)
    .pipe(csvtojson())
    .on('data', row => writeStream.write(row))
    .on('error', error => console.log(error))
    .on('end', () => console.log('File updated!'))
}