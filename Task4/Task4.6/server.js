const express=require('express');
const app=express();
app.use((req,res,next)=>{
    const time=new Date().toISOString();
    res.on('finish',()=>{
        console.log(`${req.method} ${req.url} ${req.statusCode} -${time}`);
    });
    next();
});
app.get('/',(req,res)=>{
    res.status(200).json({message:"Home Page"});
});
app.get('/api/products',(req,res)=>{
    res.status(200).json({message:"Products List Page"});
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
