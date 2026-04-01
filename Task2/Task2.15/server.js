const http = require('http');
function validateOrder(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (order.item && order.qty && order.userId) {
                resolve(order);
            } else {
                reject("Invalid order");
            }
        }, 200);
    });
}
function checkInventory(){
    return Promise.resolve(true);
}
function chargePayment(){
    return Promise.resolve(true);
}
function createShipment(){
    return Promise.resolve({ trackingId: "TRK-8821" });
}
function sendConfirmation(){
    return Promise.resolve(true);
}
http.createServer((req,res)=>{
    if (req.method === 'POST' && req.url === '/orders'){
        let body= "";
        req.on('data',chunk=>body += chunk);
        req.on('end',async()=>{
            try {
                const order=JSON.parse(body);
                await validateOrder(order);
                await Promise.all([
                    checkInventory(),
                    chargePayment()
                ]);
                const [shipment] = await Promise.all([
                    createShipment(),
                    sendConfirmation()
                ]);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    orderId: "ORD-1042",
                    status: "confirmed",
                    trackingId: shipment.trackingId,
                    emailSent: true
                }));
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: err }));
            }
        });
    }

}).listen(3007,()=>{
    console.log("Server  is running on http://localhost:3007");
});