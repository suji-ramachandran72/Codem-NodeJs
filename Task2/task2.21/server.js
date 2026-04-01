const http=require('http');
function getUsers() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["Arun","Priya","Kiran"]);
        },500);
    });
}
function getOrders(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([101,102,103,104]);
        },400);
    });
}
const server=http.createServer(async(req, res)=>{
    if (req.method==='GET' && req.url==='/summary'){
        try {
            const [users,orders]=await Promise.all([
                getUsers(),
                getOrders()
            ]);
            const response={
                users,
                orders,
                totalUsers: users.length,
                totalOrders: orders.length
            };
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(JSON.stringify(response));
        } catch(err){
            res.writeHead(500);
            res.end(JSON.stringify({error: "Internal Server Error" }));
        }

    }else{
        res.writeHead(404);
        res.end("Not Found");
    }
});
server.listen(3011,()=>{
    console.log("Server running on http://localhost:3011");
});