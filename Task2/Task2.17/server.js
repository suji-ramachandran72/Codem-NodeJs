const http = require('http');
http.createServer((req, res)=>{
    if (req.method === 'POST' && req.url === '/upload') {
        let size = 0;
        req.on('data',chunk=>{
            size += chunk.length;
        });
        req.on('end',async()=>{
            if (size >1024 * 1024) {
                res.writeHead(400);
                return res.end("File too large");
            }
            await new Promise(r =>setTimeout(r,500));
            const [file,thumb]=await Promise.all([
                Promise.resolve("photo.jpg"),
                Promise.resolve("thumb_photo.jpg")
            ]);
            res.writeHead(200,{ 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success:true,
                filename:file,
                size:Math.floor(size / 1024) + "KB",
                thumbnail:thumb
            }));
        });
    }else{
        res.writeHead(404);
        res.end("Not Found");
    }
}).listen(3009,()=>{
    console.log("Server  is running on http://localhost:3009");
});