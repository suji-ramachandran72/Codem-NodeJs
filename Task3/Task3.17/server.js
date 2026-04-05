const http=require("http");
http.createServer((req,res)=>{
    const startTime=Date.now();
    if(req.url=='/'){
        res.writeHead(200,{'X-Powered-By':' Node.js',
               'X-Response-Time': '{date.now()-startTime}ms', 
                'Content-Type': 'text/html '});
                res.end("Home Page");
    }
    else if(req.url==='/api'){

        res.writeHead(200,{'X-Powered-By':' Node.js',
               'X-Response-Time': '{date.now()-startTime}ms', 
                'Content-Type': 'text/html '});
                res.end("API Page");
    }
    console.log("Response Headers Sent:\n");
    console.log('X-Powered-By: Node.js\n');
    console.log("X-Response-Time:",Date.now()-startTime,"ms");
    console.log("Content-Type: text/html\n");
}).listen(3007);
console.log("server is running on http://localhost:3007");