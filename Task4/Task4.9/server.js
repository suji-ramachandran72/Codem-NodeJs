const express=require('express');
const app=express();
const products=[
    {id:101,name:"Laptop",category:"electronics"},
    {id:102,name:"Phone",category:"electronics"},
    {id:103,name:"Shoes",category:"fashion"},
    {id:104,name:"Watch",category:"accessories"},
    {id:105,name:"Bag",category:"fashion"}
];
app.get('/search',(req,res)=>{
    const { name,category}=req.query;
    console.log("Search Query:",req.query);
    let result=products;
    if(name){
        result=result.filter(p =>
            p.name.toLowerCase().includes(name.toLowerCase())
        );
    }
    if(category) {
        result=result.filter(p =>
            p.category.toLowerCase()===category.toLowerCase()
        );
    }
    if(!name && !category) {
        return res.status(400).json({
            message:"Please provide search parameters"
        });
    }
    res.status(200).json({
        resultCount:result.length,
        data:result
    });
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});