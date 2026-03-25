const fs=require('fs');
function logTime(message){
    const now=new Date().toISOString().replace('T','').split('.')[0];
      fs.appendFileSync('timeLog.txt',`${now} -${message}\n`);
}
module.exports=logTime;