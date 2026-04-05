const http=require('http');
const fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Welcom to my Node server');
    }
    else if(req.url==='/about'){
        res.end('This server is built using Node.Js');
    }
    else if(req.url==='/contact'){
        res.end('Contact us at codem@mail.com');
    }
}).listen(3001);
console.log("Server running on http://localhost:3001");