const fs=require('fs');
fs.readFile("message.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    const uppercasefile=data.toUpperCase();
    fs.writeFileSync('uppercase.txt',uppercasefile,()=>{
        console.log("File converted successfully");
    });
});