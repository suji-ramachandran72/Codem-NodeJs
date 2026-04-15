const express=require('express');
const app=express();
app.use(express.json());
app.get('/error',(req,res,next)=>{
    try{
        throw new Error("Something went wrong");

    }catch(err){
        next(err);
    }
});
app.get('/',(req,res)=>{
    res.json({message:'Home Route Working'});
});
app.use((err,req,res,next)=>{
    console.log("Error:",err.message);
    res.status(500).json({
        error:err.message || "Internal server Error"
    });
});
app.use((req,res)=>{
    res.status(404).json({
        error:"Route not found"
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});