const http=require('http');
const fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=='/stream'){
        fs.createReadStream('bigfile.txt').pipe(res);

    }
}).listen(3000);
console.log("Server running on http://localhost:3000");