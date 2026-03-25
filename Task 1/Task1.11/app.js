const generateNumber=require('./randomNumber');
const fs=require("fs");
for(let i=0;i<5;i++){
      fs.appendFileSync("randomNumber.txt",generateNumber()+'\n');
}