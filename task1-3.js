// babel compiles with following command
// './node_modules/.bin/babel ./ind./task-1.3.js --out-dir lib

import csvtojson from 'csvtojson';
import fs from 'fs';

function readWriteFile(file, writeFile) {
  const writeStream = fs.createWriteStream(writeFile)
  fs.createReadStream(file)
    .pipe(csvtojson())
    .on('data', row => writeStream.write(row))
    .on('error', error => console.log(error))
    .on('end', () => console.log('File updated!'))
}

export { readWriteFile };