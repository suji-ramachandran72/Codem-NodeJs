const fs=require('fs');
fs.readFile("numbers.txt",'utf8',(error,data)=>{
    if(error){
        console.log(error.message);
        return;
    }

  const evenNums=data.split("").filter(n=>n%2===0).join('');
  fs.writeFileSync('evenNumbers.txt',evenNums);


});