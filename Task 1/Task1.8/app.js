const fs=require('fs');
const file='notes.txt';
fs.stat(file,(error,stats)=>{
    if(error){
        console.log("File not found");
        return;
    }
    console.log(`File:${file},Size:${stats.size}bytes`);
});