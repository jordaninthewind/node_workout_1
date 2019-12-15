# Node.js Training Module 1

This repo is the homework for the first module of EPAM's Node.js training.

## installing dependencies

Before using the repo, type 'npm install' to ensure that all required packages are installed for the environment. Node version ^12 is recommended.

## running code

The three modules can be tested by using the following console commands:

### - Task 1

Typing 'npm run task:1.1' into the console will start the program. Typing a word, as instructed, will log your entry backward. This runs continually until ctrl + c is pressed.

### - Task 2

Enter 'npm run task:1.2' in the console will read the CSV file and output the values to '/output/formattedCsv.txt'.

### - Task 3

Run './node_modules/.bin/babel ./src/index.js ./src/task1-3.js --out-dir lib' to run babel, which outputs the files to '/lib'. After this is completed, run 'npm run task:1.3' to have the file output data to '/output/formattedCsv.txt'.
