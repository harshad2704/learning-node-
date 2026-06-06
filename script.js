const { error } = require('console');
const fs = require('fs');

console.log("start");

//synchronous
//const content = fs.readFileSync('text.txt','utf-8');
//asynchronus
const content = fs.readFile('text.txt','utf-8',function(error,data){
    if(error){
        console.log(error);

    }
    else{
        console.log(data);
    }
});

console.log("end");