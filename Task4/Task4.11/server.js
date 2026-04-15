const express=require('express');
const app=express();
function authMiddleware(req,res,next){
    const token=req.headers['authorization'];
    console.log("Auth attempt:",token);
    if(!token && token!=='mysecrettoken'){
        return res.status(404).json({message:"Unauthorized Access"});
    }
    next();
}
app.get('/',(req,res)=>{
    res.status(200).json({message:"public Route-No Auth Needed"});
});
app.get('/dashboard',authMiddleware,(req,res)=>{
    res.status(200).json({message:"Welocme to dashboard"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});