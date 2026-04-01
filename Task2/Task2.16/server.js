const http = require('http');
function getSales(){
    return Promise.resolve(85000);
}
function getExpenses(){
    return Promise.resolve(32000);
}
function getRefunds(){
    return Promise.resolve(4500);
}
function calcProfit(data){
    return data.sales-data.expenses-data.refunds;
}
function calcTax(profit){
    return Math.floor(profit * 0.18);
}
function formatReport(data){
    return {
        ...data,
        netAfterTax:data.profit-data.tax
    };
}
http.createServer(async(req,res)=>{
    if (req.method === 'GET' && req.url === '/aggregate') {
        console.log("Processing /aggregate...");
        const [sales,expenses,refunds] = await Promise.all([
            getSales(),
            getExpenses(),
            getRefunds()
        ]);
        const profit=calcProfit({ sales, expenses, refunds });
        const tax=calcTax(profit);
        const report=formatReport({
            sales,
            expenses,
            profit,
            tax
        });
        report.timeTaken="750ms";
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(report));
    }
    else {
        res.writeHead(404);
        res.end("Not Found");
    }
}).listen(3008, () => {
    console.log("Server running on http://localhost:3008");
});