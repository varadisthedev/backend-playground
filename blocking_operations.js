 const fs= require('fs');

 console.log('1')
 // sync= blocking
 const result= fs.readFileSync('contacts.txt','utf-8');
 console.log(result)
 console.log('2')