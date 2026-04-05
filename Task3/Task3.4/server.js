const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    if(req.url==='/readfile'){
        fs.readFile('datafile.txt',(err,data)=>{
            res.end(data);
        });
    }
    else if(req.url==='/streamfile'){
        fs.createReadStream('datafile.txt').pipe(res);    }
}).listen(3001);
console.log("Server running on http://localhost:3001")