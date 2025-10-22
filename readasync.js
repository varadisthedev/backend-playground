import fs from 'fs'

fs.readFile('./contacts.txt','utf-8',(err,res)=>{
    if(err){
        console.log("#######Error: ",err);
    } 
    else{
        console.log(res)
    }

});

// sync return result
// async expect a callback function , does not return res. so you can't store it directly 