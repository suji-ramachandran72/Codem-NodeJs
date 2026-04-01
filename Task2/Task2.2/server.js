const http=require('http');
let active=0;
const LIMIT=2;
const queue=[];
let id=1;
const processRequest=(reqId,res)=>{
    active++;
    const start=Date.now();
    console.log(`Request ${reqId}:processing`);
    setTimeout(()=>{
        const endTime=Date.now();
        const timeTaken=endTime-start;
        console.log(`Request ${reqId}:done in ${timeTaken} ms`);
        res.end(`Done ${reqId}`);
        active--;
        if(queue.length >0){
            const next=queue.shift();
            next();
        }
    },1000);
    
};
http.createServer((req,res)=>{
    const reqId=id++;
    if(active<LIMIT){
        processRequest(reqId,res);

    }else{
        console.log(`Request ${reqId}: queued (waiting)`);
        queue.push(()=>{
            processRequest(reqId,res)
        });
    }

}).listen(3002, () => {
    console.log("Server running on http://localhost:3002");
});