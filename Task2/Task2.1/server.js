 const http=require('http');
 let reqCount={};
 const LIMIT=5;
 const WINDOW_MS=60*1000;
 const runMiddlewares=async(req,res,middlewares)=>{
    let index=0;
    const next=async()=>{
        if(res.writableEnded) return;
        if(index < middlewares.length){
           const middleware=middlewares[index++];
           await middleware(req,res,next);
        }
    }
    await next();
 }

async function logger(req,res,next){
    const time=new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    await  next();
}
async function auth(req,res,next){
    const authHeader=req.headers['x-auth'];
    if(authHeader!=='secret123'){
        res.writeHead(401,{'ContentType':'text/plain'});
        res.end("Unauthozied Access...");
        return;
    }
    console.log("Auth passed");
    await next();
}
async function rateLimit(req,res,next){
    const ip=req.socket.remoteAddress;
    const currentTime=Date.now();
    if(!reqCount[ip]){
        reqCount[ip]=[];
    }
    reqCount[ip]=reqCount[ip].filter(timestamp=>currentTime-timestamp<WINDOW_MS);
    if(reqCount[ip].length>= LIMIT){
        res.writeHead(429,{'ContentType':'text/plain'});
        res.end('Too many requests...');
        return;
    }
    reqCount[ip].push(currentTime);
    console.log(`Rate limit:${reqCount[ip].length}/5`);
    await next();
}
const server=http.createServer(async (req,res)=>{
    if(req.method==='GET' && req.url==='/secure'){
        await runMiddlewares(req,res,[logger,auth,rateLimit]);
    }
    if(!res.writableEnded){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end('Secure data...');
      console.log("Response sent");
    }
    else{
        if(!res.writableEnded){
        res.writeHead(404);
        res.end('Not Found');
        }
    }
});
server.listen(3000,()=>{
    console.log("server running on https://localhost:3000");
});
 
