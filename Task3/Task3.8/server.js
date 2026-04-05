const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
     if(req.url==='/'){
        const data=fs.readFileSync('index.html');
        res.end(data);
     }
}).listen(3005);
console.log("Server running on http://localhost:3005");