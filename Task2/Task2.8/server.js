const http=require('http');
let jobs={};
let idCounter=1;
function processJob(job){

    setTimeout(()=>{
        job.status='running';
        console.log(`Job ${job.id} is running`);
        setTimeout(()=>{
            job.status="done";
            console.log(`Job ${job.id} is done`);
        },Math.random()*10000);
    },Math.random()*4000);
}
const server=http.createServer((req,res)=>{
    if(req.method ==='POST' && req.url==='/jobs'){
        const id=idCounter++;
        const job={
            id:id,
            status:'queued'
        };
        jobs[id]=job;
        processJob(job);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(job));
    }else if(req.method ==='GET'&&req.url.startsWith('/jobs/')){
        const id=req.url.split('/')[2];
        const job=jobs[id];
        if(job){
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(job));
        }else{
            res.writeHead(404);
            res.end("Job Not Found");
        }
    }
    else if(req.method ==='GET'&&req.url==='/jobs'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(Object.values(jobs)));
    }
     else{
         res.writeHead(404);
        res.end("Job Not Found");
    }
});
server.listen(3003,()=>{
     console.log("Server running on http://localhost:3003");
});