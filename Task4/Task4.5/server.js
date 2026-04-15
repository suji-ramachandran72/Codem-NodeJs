const express=require('express');
const app=express();
let products=[
    {id:101,name:'Laptop',price:50000,category:'Electronics'},
    {id:102,name:'Phone',price:10000,category:'Electronics'},
    {id:103,name:'Shoes',price:3000,category:'Fashion'},
    {id:104,name:'Watch',price:2000,category:'Accessories'},
    {id:105,name:'Bags',price:1500,category:'Fashion'},
];
products.sort((a,b)=>a.name.localeCompare(b.name));
app.get('/api/products',(req,res)=>{
    console.log("GET /api/products");
    res.status(200).json({
        totalProducts:products.length,
        products:products
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
