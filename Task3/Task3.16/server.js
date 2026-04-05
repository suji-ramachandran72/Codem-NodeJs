const fs=require('fs');
const readStream=fs.createReadStream('source.txt');
const writeStream=fs.createWriteStream('destination.txt');
console.log("Piping started...");
readStream.on("error",(err)=>{
    console.log("Reading Error:",err.message);
});
writeStream.on("error",(err)=>{
    console.log("writing Error:",err.message);
});
readStream.pipe(writeStream);
console.log("Data flowing from source.txt to destination.txt");
writeStream.on("finish",()=>{
    console.log("Pipe complete — destination.txt written successfully");
});