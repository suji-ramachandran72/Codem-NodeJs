const http=require("http");
http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        res.end();
        return;
    }
    console.log("Header Received");
    console.log("Host:",req.headers['host']);
    console.log("user-Agent:",req.headers['user-agent']);
    console.log("accept:",req.headers['accept']);
    res.end("Request received succesfully");
}).listen(3004);
console.log("Server running on http://localhost:3004");