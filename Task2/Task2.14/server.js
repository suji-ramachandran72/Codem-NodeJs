const http = require('http');
let totalRequests = 0;
let successCount = 0;
let errorCount = 0;
let totalTime = 0;
const server = http.createServer((req, res) => {
    const start = Date.now();
    totalRequests++;
    if (req.method === 'GET' && req.url==='/hello') {
        const delay=Math.random()*400+100;
        setTimeout(() => {
            const duration = Date.now() - start;
            successCount++;
            totalTime += duration;
            res.writeHead(200);
            res.end("Hello World");
        }, delay);
    }
    else if (req.method === 'GET' && req.url === '/fail') {
        const duration = Date.now() - start;
        errorCount++;
        totalTime += duration;
        res.writeHead(500);
        res.end("Internal Server Error");
    }
    else if (req.method === 'GET' && req.url === '/stats') {
        const avg = totalRequests ? (totalTime / totalRequests).toFixed(0) : 0;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            totalRequests,
            successCount,
            errorCount,
            avgResponseTime: avg + "ms"
        }));
    }
    else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3006,()=>{
    console.log("Server running on http://localhost:3006");
});