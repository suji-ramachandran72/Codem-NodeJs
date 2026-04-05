const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
     if(req.url==='/'){
        const data=fs.readFileSync('home.html');
        res.end(data);
     }
     else if(req.url==='/about'){
        const data1=fs.readFileSync('about.html');
        res.end(data1);
     }
     else if(req.url==='/contact'){
        const data2=fs.readFileSync('contact.html');
        res.end(data2);
     }
}).listen(3006);
console.log("Server running on http://localhost:3006");