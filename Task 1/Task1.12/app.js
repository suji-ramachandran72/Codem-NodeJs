const fs=require('fs');
fs.readFile("sentence.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }

  const reverse=data.split('').reverse().join('');
  fs.appendFileSync('reverse.txt',reverse);


});