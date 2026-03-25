const fs=require('fs');
fs.readFile("article.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    const count=(data.match(/Node\.js/g)||[]).length;
    console.log("Word Node.js found "+ count+"times");



});