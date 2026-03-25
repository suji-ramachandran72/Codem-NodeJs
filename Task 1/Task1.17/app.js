const fs=require('fs');
fs.readFile("text.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }
    const uniqueWords=[...new Set(data.split(' '))].join(' ');
    fs.writeFileSync('uniquewords.txt',uniqueWords);
});