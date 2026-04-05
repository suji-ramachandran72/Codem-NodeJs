const http=require("http");
const fs=require("fs").promises;
http.createServer(async(req,res)=>{
    const query=new URL(req.url,`http:${req.headers.host}`);
    const name=query.searchParams.get('name') || "Guest";
    try{
  let html=await fs.readFile('template.html','utf-8');
    html=html.replace('{{username}}',name);
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(html);
    }catch(err){
        res.writeHead(500);
        res.end("Error loading the page");
    }
  
}).listen(3008);
console.log("Server is running on http://localhost:3008");