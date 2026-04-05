const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    if(req.url==='/csv'){
        res.writeHead(200,{'Content-Type':'text/csv','content-disposition':'attachment;filename=data.csv'});
        fs.createReadStream('data.csv').pipe(res);
    }
}).listen(3009);
console.log("Server is running on http://localhost:3009")