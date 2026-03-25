const fs=require('fs');
fs.readdir("documents",'utf8',(error,files)=>{
    if(error){
        console.log(error.message);
        return;
    }
   console.log("Total Files in documents folder:",files.length);
});