const express=require('express');
const app=express();
const products=[
    {id:101,name:"Laptop",category:"electronics",price:50000},
    {id:102,name:"Phone",category:"electronics",price:10000},
    {id:103,name:"Shoes",category:"fashion",price:5000},
    {id:104,name:"Watch",category:"accessories",price:2000},
    {id:105,name:"Bag",category:"fashion",price:500}
];
app.use(express.json());
app.get('/products',(req,res)=>{
    console.log('Fetching all products');
    res.status(200).json(products);
})
app.post('/products',(req,res)=>{
    const {name,category,price}=req.body;
    console.log("validating user...");
    if(!name && !price && !category){
        return res.status(404).json({
            error:"name and  price and category are required"
        });
    }
    const newProduct={
        id:Date.now(),
        name,
        category,
        price
    };
    products.push(newProduct);
    console.log("Product addded");
    res.status(201).json({message:"Product created successfully",data:newProduct});
});
app.put('/products/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const {name,category,price}=req.body;
    const product=products.find(p=>p.id===id);
    if(!product){
        return  res.status(404).json({error:"Product not found"});
    }
    product.name=name ||product.name;
    product.category=category ||product.category;
    product.price=price ||product.price;
    console.log("Product updated");
    res.json({message:"Productupdated successfully",data:product});
   
});
app.delete('/products/:id',(req,res)=>{
     const id=parseInt(req.params.id);
     const index =products.findIndex(p=>p.id===id);
     if(index===-1){
        return  res.status(404).json({error:"Product not found"});
     }
     products.splice(index,1);
     console.log("Product deleted");
     res.json({message:"Product deleted successfully"})
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});