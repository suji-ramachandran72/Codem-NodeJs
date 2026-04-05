const http=require("http");
const url=require('url');
http.createServer(async(req,res)=>{
    const query=url.parse(req.url,true).query;
    if(Object.keys(query).length===0){
        res.writeHead(400,{'content-type':'text/plain'});
        res.end("Noquery parameters found");
        return;
    }else{
        console.log("Query received:");
        for(let key in query){
            console.log(`${key}=${query[key]}`);
        }
    }
    try{
    res.writeHead(200,{'content-Type':'application/json'});
    res.end(JSON.stringify(query));
    }catch(err){
        res.writeHead(500);
        res.end("Error loading the page");
    }
  
}).listen(3008);
console.log("Server is running on http://localhost:3008");