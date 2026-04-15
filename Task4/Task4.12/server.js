const express=require('express');
const app=express();
app.use(express.json());
const validateUser=((req,res,next)=>{
    const {name,email}=req.body;
    console.log("validating user...");
    if(!name && !email){
        console.log("Validation failed")
        return res.status(404).json({
            error:"name and email are required"
        });
    }
    next();
});
app.post('/users',validateUser,(req,res)=>{
    res.status(200).json({
        message:'User data is valid',
        data:req.body
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});