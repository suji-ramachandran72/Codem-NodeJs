const express=require('express');
const app=express();
app.use(express.json());
let orders=[
    {id:1,product:"Laptop",quantity:1},
    {id:2,product:"Phone",quantity:2}
];
app.get('/orders',(req,res)=>{
    console.log("Fetching orders");
    res.status(200).json(orders);
});
app.post('/orders',(req, res) => {
    const {product, quantity}=req.body;
    if (!product||!quantity) {
        console.log("Invalid order data");
        return res.status(400).json({
            error:"Product and quantity are required"
        });
    }
    const newOrder={
        id: orders.length + 1,
        product,
        quantity
    };
    orders.push(newOrder);
    console.log("Order created");
    res.status(201).json(newOrder);
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});