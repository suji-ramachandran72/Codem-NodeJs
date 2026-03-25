const createGreeting=require('./greeting');
const fs=require('fs');
fs.readFile("name.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    const names=data.split('\n');
    names.forEach(name=>{
       fs.appendFileSync('greeting.txt',createGreeting(name)+"\n");
    });

});