const http=require("http");
http.createServer((req,res)=>{
    console.log("Method:",req.method);
    console.log("URL:",req.url);
    res.end("Request received succesfully");
}).listen(3002);
console.log("Server running on http://localhost:3002");