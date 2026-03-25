const fs=require('fs');
fs.readFile("important.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    fs.writeFileSync("important_backup.txt",data);
    console.log("Backup created successfully");
});