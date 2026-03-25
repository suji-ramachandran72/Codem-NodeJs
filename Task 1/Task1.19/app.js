const fs=require('fs');
fs.readdir("assets",'utf8',(error,files)=>{
    if(error){
        console.log(error.message);
        return;
    }
    fs.writeFileSync('fileList.txt',files.join('\n'));
   console.log("file list save successfully");
});