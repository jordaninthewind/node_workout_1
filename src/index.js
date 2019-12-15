import { readWriteFile } from './task1-3.js';

const readFilePath = './csv/node_mentoring_t1_2_input_example.csv';
const writeFilePath = './output/formattedCsv2.txt';

readWriteFile(readFilePath, writeFilePath);
