import fs from 'fs'
const test=fs.readFileSync("./contacts.txt",'utf-8');
// utf-8 for txt, and simple files
console.log(`result is: ${test}`);
