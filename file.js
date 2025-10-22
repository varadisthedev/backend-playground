import fs from "fs";
// this is a synchronous tasks
fs.writeFileSync("./test.txt","HELO WORLD from synchronous"); 


// async task 
fs.write("./test.txt","writing with async",(err)=>{} ) // async wantss a callback , no return 

