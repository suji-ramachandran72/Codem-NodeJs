const http=require('http');
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    if(req.url==='/users') {
        res.end(JSON.stringify({users:["Arun","Priya","Kiran"]}));
    }
    else if(req.url==='/products') {
        res.end(JSON.stringify({products:["Laptop","Phone","Tablet"]}));
    }
    else{
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not found" }));
    }
}).listen(3010,()=>{
    console.log("Server  is running on http://localhost:3010");
});