const fs=require('fs');
fs.readFile("paragraph.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }

    const words=data.split(/\s+/);
    console.log("Total Lines:",words.length);
   


});