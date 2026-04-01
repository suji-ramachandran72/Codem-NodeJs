const http = require('http');
function parseJSON(data){
    return new Promise((resolve,reject)=>{
        try{
            const obj=JSON.parse(data);
            resolve(obj);
        } catch (err){
            reject("Invalid JSON");
        }
    });
}
function validateSchema(obj){
    return new Promise((resolve,reject)=>{
        if(obj.name && obj.age && obj.email) {
            resolve(obj);
        } else{
            reject("Validation failed");
        }
    });
}
function transformData(obj){
    return new Promise((resolve) =>{
        const transformed={
            name: obj.name.toUpperCase(),
            age: obj.age,
            email: "xyz@gmail.com" 
        };
        resolve(transformed);
    });
}
function buildResponse(obj) {
    return{
        success: true,
        data: obj
    };
}
const server = http.createServer((req, res)=>{
    console.log(req.method,req.url);
    if (req.method === 'POST' && req.url.startsWith('/process')) {
        let body = "";
        req.on('data',chunk=>{
            body +=chunk.toString();
        });
        req.on('end', async()=>{
            try{
                const parsed=await parseJSON(body);
                const valid=await validateSchema(parsed);
                const transformed=await transformData(valid);
                const response=buildResponse(transformed);
                res.writeHead(200,{ 'Content-Type': 'application/json' });
                res.end(JSON.stringify(response));

            }catch(err){
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err }));
            }
        });
    } else{
        res.writeHead(404);
        res.end("Not Found");
    }
});
server.listen(3004,()=>{
    console.log("Server running on http://localhost:3004");
});