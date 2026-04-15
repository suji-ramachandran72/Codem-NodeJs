const express=require('express');
const app=express();
const products=[
    {id:101,name:"Laptop",price:5000},
    {id:102,name:"Phone",price:20000},
    {id:103,name:"Shoes",price:3000}
];
app.get('/products/:id',(req, res) =>{
    const productId=parseInt(req.params.id);
    console.log("Requested Product ID:",productId);
    const product=products.find(p =>p.id===productId);
    if (!product) {
        return res.status(404).json({
            error:"Product not found"
        });
    }
    res.status(200).json({
        data:product,
        requestedAt:new Date()
    });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});