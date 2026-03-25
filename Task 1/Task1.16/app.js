const fs=require('fs');
fs.readFile("story.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }

    const words=data.split('\n');
    console.log("Total Words:",words.length);
   


});