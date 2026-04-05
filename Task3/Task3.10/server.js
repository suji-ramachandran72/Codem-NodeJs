const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
     if(req.url==='/image'){
        res.writeHead(200,{'Content-Type': 'image.jpg'});
        fs.createReadStream('image.jpg').pipe(res);
     }
}).listen(3007);
console.log("Server running on http://localhost:3007");