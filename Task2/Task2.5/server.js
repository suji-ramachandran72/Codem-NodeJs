const http = require('http');
function unstableDB(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("DB error"); 
        },300);
    });
}
function fallbackData(){
    return { source:'cache', data:['X','Y','Z'] };
}
async function getDataWithRetry(){
    const delays=[500,1000,2000];

    for(let i=0;i<delays.length;i++){
        try{
            const result=await unstableDB();
            return result;
        }
        catch(err){
            if(i < delays.length - 1){
                console.log(`Attempt ${i+1} failed — retrying in ${delays[i]}ms`);
                await new Promise(res => setTimeout(res, delays[i]));
            }
            else{
                console.log(`Attempt ${i+1} failed — using fallback`);
                return fallbackData();
            }
        }
    }
}

http.createServer(async(req,res)=>{

    console.log(req.method,req.url);

    if(req.method === 'GET' && req.url === '/data'){

        const result = await getDataWithRetry();

        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result));
    }
    else{
        res.writeHead(404);
        res.end('Not Found');
    }

}).listen(3002,()=>{
    console.log("Server running on http://localhost:3002");
});